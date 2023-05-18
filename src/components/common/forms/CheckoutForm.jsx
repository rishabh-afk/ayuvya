import Form from "./Form";
import axios from "axios";
import Button from "../Button";
import { useState } from "react";
import { toast } from "react-toastify";
import FormInput from "../forms/FormInput";
import config from "../../../config/config";
import VerifyOtp from "../../modals/VerifyOtp";
import { useNavigate } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { load } from "@cashfreepayments/cashfree-js";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP } from "../../../store/slices/commonSlice";
import { createOrder } from "../../../store/slices/orderSlice";
import { motion } from "framer-motion";
import { addToCartAuth, applyCoupon } from "../../../store/slices/cartSlice";

const CheckoutForm = ({ handlePaymentType, paymentMode, userDetails }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const couponStatus = useSelector((state) => state.cart.couponStatus);

  // customer details
  const [user, setUser] = useState({
    city: "",
    phone: "",
    state: "",
    email: "",
    address: "",
    pin_code: "",
    apartment: "",
    last_name: "",
    promoCode: "",
    first_name: "",
    gender: "Male",
    country: "India",
    notification: "false",
    saveInformation: "false",
    payment_method: "Prepaid",
  });
  const [otpModal, showOtpModal] = useState(false);
  const [otp, setOtp] = useState(null);

  // send notification
  const sendOtp = async (data) => {
    dispatch(sendOTP(data)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        showOtpModal(true);
      }
    });
  };
  // to close sendOtpModal
  const handleClose = () => {
    showOtpModal(false);
    setOtp(null);
  };
  // to create a new checkout / order
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("AYUVYA_USERDATA", JSON.stringify(user));
    if (user.payment_method === "COD") {
      handleCodOrder();
    } else {
      const cartId = localStorage.getItem("AYUVYA_CART-CARTID");
      const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
      let data = [];
      if (cart !== null) {
        cart.items.map((item) => {
          data.push({ product: item.id, quantity: item.quantity });
          return data;
        });
      }
      if (!cartId && data.length === cart.items.length) {
        dispatch(addToCartAuth(data)).then(() => {
          handlePrePaidOrder();
        });
      }
      if (cartId || cart === null) {
        handlePrePaidOrder();
      }
    }
  };

  // to handle COD orders, we need to check if the user is authorized or not
  const handleCodOrder = () => {
    if (user.phone.length !== 10) {
      toast.error("Invalid Phone Number");
      return;
    }
    if (isLoggedIn) {
      handleCreateOrder();
    } else {
      sendOtp({ phone: user.phone });
    }
  };
  // to create prepaid orders
  const handlePrePaidOrder = () => {
    dispatch(createOrder(user)).then(async (response) => {
      if (response.meta.requestStatus === "fulfilled") {
        localStorage.setItem("AYUVYA_ORDER_ID", response.payload.order_id);
        handleCashFreePayment(response.payload.order_token);
      }
    });
  };
  //to handle prepaid order
  const handleCashFreePayment = async (order_token) => {
    const cashfree = await load({
      mode: "sandbox", //or production
    });
    let checkoutOptions = {
      paymentSessionId: order_token,
      // returnUrl: `http://localhost:3000/thank-you`,
      returnUrl: `http://ayuvya-react-app.s3-website-ap-southeast-2.amazonaws.com/thank-you`,
    };
    cashfree.checkout(checkoutOptions).then((result) => {
      if (result.error) {
        toast.error(result.error.message);
      }
      if (result.redirect) {
        console.log("Redirection");
      }
    });
  };
  //to handle a new order
  const handleCreateOrder = async () => {
    dispatch(createOrder(user)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        localStorage.setItem("AYUVYA_ORDER_ID", response.payload.get_order_id);
        navigate("/thank-you/");
      } else {
        toast.warn("Something went wrong!");
      }
    });
  };

  //apply promo Code to order
  const ApplyPromoCode = async (e) => {
    e.preventDefault();
    if (!isLoggedIn && user.phone.length !== 10) {
      toast.error("Invalid Phone Number");
      return;
    }
    if (user.promoCode.length < 1) {
      toast.error("Invalid Promo Code");
      return;
    }
    if (isLoggedIn) {
      dispatch(applyCoupon(user.promoCode));
    } else {
      sendOtp({ phone: user.phone });
    }
  };
  // handle pin code of user
  const handlePinCode = async (e) => {
    e.preventDefault();
    if (e.target.value.length === 6) {
      const BASE_URL = config.REACT_APP_BASE_URL;
      const resp = await axios.get(
        `${BASE_URL}check-pincode/?pincode=` + e.target.value
      );
      if (resp.data) {
        setUser({
          ...user,
          pin_code: resp.data.data.pincode,
          city: resp.data?.data.city,
          state: resp.data?.data.state,
        });
      }
    }
  };
  // to handle changes of state
  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    setUser((prevFields) => ({
      ...prevFields,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="text-gray-700">
      <VerifyOtp
        otpModal={otpModal}
        handleClose={handleClose}
        sendOtp={sendOtp}
        setOtp={setOtp}
        otp={otp}
        phone={user.phone}
      />
      <h2 className="text-3xl text-black mb-4 hidden lg:block">
        Ayuvya Ayurveda
      </h2>
      <h2 className="text-xl">Contact Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
        <div className="mt-3">
          <Form
            id="phone"
            type="text"
            name="phone"
            maxLength="10"
            pattern="[0-9\/]*"
            label="Phone Number *"
            value={user.phone || userDetails?.phone}
            onChange={handleOnChange}
            required
            autoFocus
          />
        </div>
        <div className="mt-3">
          <Form
            id="email"
            type="email"
            name="email"
            maxLength="50"
            label="Email (Optional)"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={user.email || userDetails?.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex gap-3 items-center">
          <FormInput
            type="checkbox"
            id="notification"
            name="notification"
            className="h-5 w-5 mt-2 rounded-md"
            value={user.notification || userDetails?.notification}
            onChange={handleOnChange}
          />
          <label htmlFor="notification" className="text-sm">
            Keep me up to date on news and exclusive offers
          </label>
        </div>
        <h2 className="text-xl pb-2">Shipping Address</h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <div className="w-full lg:w-1/2">
            <Form
              type="text"
              maxlength="25"
              id="first_name"
              name="first_name"
              pattern="^[^-\s][a-zA-Z \s]*$"
              label="First Name *"
              value={user.first_name || userDetails?.first_name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="w-full lg:w-1/2 mt-3 lg:mt-0">
            <Form
              type="text"
              id="last_name"
              maxLength="25"
              name="last_name"
              label="Last Name *"
              pattern="^[^-\s][a-zA-Z \s]*$"
              value={user.last_name || userDetails?.last_name}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-0 lg:mt-3">
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <Form
              type="text"
              id="pin_code"
              name="pin_code"
              label="Pincode *"
              pattern="[0-9\/]*"
              maxLength="6"
              value={user.pin_code || userDetails?.pin_code}
              onChange={handlePinCode}
              required
            />
          </div>
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <Form
              id="city"
              type="text"
              name="city"
              maxLength="25"
              pattern="^[^-\s][a-zA-Z \s]*$"
              label="City/district *"
              value={user.city || userDetails?.city}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <div className="relative">
              <select
                id="state"
                name="state"
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                required
              >
                <option value="" disabled>
                  Select state
                </option>
                <option value={user?.state ? user?.state : "Delhi"}>
                  {user?.state ? user?.state : "Delhi"}
                </option>
              </select>
              <label
                htmlFor="state"
                className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                State
              </label>
            </div>
          </div>
        </div>
        <div className="w-full mt-3">
          <Form
            type="text"
            id="address"
            maxLength="75"
            name="address"
            pattern="^[^-\s][a-zA-Z0-9 \s]*$"
            label="House number and area name *"
            value={user.address || userDetails?.address}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="w-full mt-3">
          <Form
            type="text"
            id="apartment"
            maxLength="25"
            name="apartment"
            pattern="^[^-\s][a-zA-Z0-9 \s]*$"
            label="Apartment, suite, etc. (optional)"
            value={user.apartment || userDetails?.apartment}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <div className="w-full lg:w-1/2 mt-3">
            <div className="relative">
              <select
                id="country"
                name="country"
                value={user.country || userDetails?.country}
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                required
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="India">
                  India
                </option>
              </select>
              <label
                htmlFor="country"
                className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Country
              </label>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-3">
            <div className="relative">
              <select
                id="gender"
                name="gender"
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                value={user.gender || userDetails?.gender}
                onChange={handleOnChange}
                required
              >
                <option disabled value="">
                  Select Gender
                </option>
                <option selected value="Male">
                  Male
                </option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <label
                htmlFor="gender"
                className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Gender
              </label>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-full pl-4 pr-1 flex justify-between items-center mt-3">
          <input
            type="text"
            id="promoCode"
            name="promoCode"
            placeholder="Promo Code"
            className="py-3 w-full rounded-md font-medium outline-none"
            value={user.promoCode || userDetails?.promoCode}
            onChange={handleOnChange}
          />
          <span
            onClick={ApplyPromoCode}
            className="bg-gray-500 px-8 rounded-full text-white py-2 cursor-none lg:cursor-pointer"
          >
            Apply
          </span>
        </div>
        {couponStatus === "success" ||
          (couponStatus === "404" && (
            <motion.div
              initial={{ x: -800, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
              className="mt-1 ml-4"
            >
              <p className="relative bg-green-600 py-1 px-2 rounded-md text-white w-fit text-sm">
                Applied!{" "}
                <span className="absolute -top-2 shadow-3xl bg-white rounded-full p-[2px]">
                  <VscChromeClose onClick={() => {}} color="black" size={14} />
                </span>
              </p>
            </motion.div>
          ))}
        <fieldset className="flex flex-col gap-3 lg:flex-row lg:gap-10 py-4">
          <div className="flex gap-3 items-center">
            <input
              id="COD"
              type="radio"
              name="payment_method"
              value="COD"
              checked={
                paymentMode === "offline" && user.payment_method === "COD"
              }
              onChange={(e) => {
                handlePaymentType(e.target.value);
                setUser({ ...user, payment_method: e.target.value });
              }}
              className="h-7 w-7 rounded-md"
            />
            <label htmlFor="COD" className="text-lg">
              Cash On Delivery (COD)
            </label>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="Prepaid"
              name="payment_method"
              checked={
                paymentMode === "online" && user.payment_method === "Prepaid"
              }
              value="Prepaid"
              onChange={(e) => {
                handlePaymentType(e.target.value);
                setUser({ ...user, payment_method: e.target.value });
              }}
              className="h-7 w-7 rounded-md"
            />
            <label htmlFor="Prepaid" className="text-lg">
              Pay Online
            </label>
          </div>
        </fieldset>
        <div className="flex gap-3 items-center px-1">
          <FormInput
            type="checkbox"
            id="saveInformation"
            name="saveInformation"
            className="h-5 w-5 mt-2 rounded-md"
            value={user.saveInformation || userDetails?.saveInformation}
            onChange={handleOnChange}
          />
          <label htmlFor="saveInformation" className="text-sm">
            Save this information for next time
          </label>
        </div>
        <p className="pb-3">
          Note: Get <strong>10% discount</strong> on online payment.
        </p>
        <Button
          type="submit"
          className="bg-gray-400 rounded-lg flex justify-center w-full lg:w-fit hover:bg-white hover:border hover:border-gray-400"
        >
          <span className="text-xl py-2 lg:py-1 lg:px-8 text-white hover:text-gray-400">
            Continue
          </span>
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
