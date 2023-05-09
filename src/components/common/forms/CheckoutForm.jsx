// import { useState } from "react";
import { useState } from "react";
import Button from "../Button";
import FormInput from "../forms/FormInput";
import VerifyOtp from "../../modals/VerifyOtp";
import Form from "./Form";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { load } from "@cashfreepayments/cashfree-js";

const CheckoutForm = ({ handlePaymentType, paymentMode, userDetails }) => {
  // const navigate = useNavigate();
  const [customerDetail, setCustomerDetail] = useState({
    phone: "",
    email: "",
    notification: "false",
    first_name: "",
    last_name: "",
    address: "",
    apartment: "",
    pin_code: "",
    city: "",
    state: "",
    country: "India",
    gender: "Male",
    promoCode: "",
    payment_method: "Prepaid",
    saveInformation: "false",
  });
  const [otpModal, showOtpModal] = useState(false);
  const [otp, setOtp] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = await JSON.parse(
      localStorage.getItem("ayuvya-user-details")
    );
    if (userDetails) {
      localStorage.removeItem("ayuvya-user-details");
    }
    localStorage.setItem("ayuvya-user-details", JSON.stringify(customerDetail));
    if (customerDetail.payment_method === "COD") {
      const data = {
        phone: customerDetail.phone,
      };
      sendOtp(data);
    } else {
      const data = {
        ...customerDetail,
        cart: "4b922503-302a-4f13-ae33-28eb97f01f4d",
      };
      const resp = await axios.post(
        "http://192.168.0.101:80/api/checkout/create/order/",
        data
      );
      if (resp.status === 201) {
        toast.success("order created successfully");
        console.log(resp.data);
        const cashfree = await load({
          mode: "sandbox", //or production
        });
        let checkoutOptions = {
          paymentSessionId: resp.data.order_token,
          returnUrl: `http://localhost:3000/thank-you/${resp.data.order_id}`,
        };
        cashfree.checkout(checkoutOptions).then(function (result) {
          if (result.error) {
            alert(result.error.message);
          }
          if (result.redirect) {
            console.log("Redirection");
          }
        });
      }
    }
  };
  const sendOtp = async (data) => {
    const resp = await axios.post(
      "http://192.168.0.101:80/api/auth/otp/send/",
      data
    );
    if (resp.status === 200) {
      toast.success("OTP is sent successfully");
      showOtpModal(true);
    } else {
      toast.warn("Failed to send OTP. Try again later");
    }
  };
  const handleClose = () => {
    showOtpModal(false);
    setOtp(null);
  };
  const ApplyPromoCode = async (e) => {
    e.preventDefault();
    // const resp = await axios.get(
    //   "http://192.168.0.111:80/check-pincode/?pincode=" + e.target.value
    // );
  };
  const handlePinCode = async (e) => {
    e.preventDefault();
    if (e.target.value.length === 6) {
      const resp = await axios.get(
        "http://192.168.0.101:80/check-pincode/?pincode=" + e.target.value
      );
      if (resp.data) {
        setCustomerDetail({
          ...customerDetail,
          pin_code: resp.data.data.pincode,
          city: resp.data?.data.city,
          state: resp.data?.data.state,
        });
      }
    }
  };
  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    setCustomerDetail((prevFields) => ({
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
        phone={customerDetail.phone}
        customerDetail={customerDetail}
      />
      <h2 className="text-3xl text-black mb-4 hidden lg:block">
        Ayuvya Ayurveda
      </h2>
      <h2 className="text-xl">Contact Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
        <div className="mt-3">
          <Form
            type="text"
            name="phone"
            id="phone"
            pattern="[0-9\/]*"
            maxlength="10"
            value={customerDetail.phone || userDetails?.phone}
            onChange={handleOnChange}
            label="Phone Number *"
            autoFocus
            required
          />
        </div>
        <div className="mt-3">
          <Form
            type="email"
            id="email"
            name="email"
            label="Email (Optional)"
            value={customerDetail.email || userDetails?.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex gap-3 items-center">
          <FormInput
            type="checkbox"
            name="notification"
            id="notification"
            value={customerDetail.notification || userDetails?.notification}
            onChange={handleOnChange}
            className="h-5 w-5 mt-2 rounded-md"
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
              id="first_name"
              name="first_name"
              value={customerDetail.first_name || userDetails?.first_name}
              onChange={handleOnChange}
              label="First Name *"
              required
            />
          </div>
          <div className="w-full lg:w-1/2 mt-3 lg:mt-0">
            <Form
              type="text"
              id="last_name"
              label="Last Name"
              name="last_name"
              value={customerDetail.last_name || userDetails?.last_name}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-0 lg:mt-3">
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <Form
              type="number"
              id="pin_code"
              name="pin_code"
              label="Pincode *"
              onChange={handlePinCode}
              required
            />
          </div>
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <Form
              type="text"
              id="city"
              name="city"
              value={userDetails?.city || customerDetail.city}
              onChange={(e) =>
                setCustomerDetail({
                  ...customerDetail,
                  city: e.target.value,
                })
              }
              label="City/district *"
              required
            />
          </div>
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <div className="relative">
              <select
                id="state"
                name="state"
                required
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              >
                <option disabled>Select state</option>
                <option value={customerDetail?.state}>
                  {customerDetail?.state}
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
            name="address"
            value={customerDetail.address || userDetails?.address}
            onChange={handleOnChange}
            label="House number and area name *"
            required
          />
        </div>
        <div className="w-full mt-3">
          <Form
            type="text"
            id="apartment"
            name="apartment"
            value={customerDetail.apartment || userDetails?.apartment}
            onChange={handleOnChange}
            label="Apartment, suite, etc. (optional)"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <div className="w-full lg:w-1/2 mt-3">
            <div className="relative">
              <select
                id="country"
                name="country"
                value={customerDetail.country || userDetails?.country}
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              >
                <option disabled>Select Country</option>
                <option value="India">India</option>
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
                value={customerDetail.gender || userDetails?.gender}
                onChange={handleOnChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              >
                <option disabled value={"select Gender"}>
                  Select Gender
                </option>
                <option value="Male">Male</option>
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
            placeholder="Promo Code"
            name="promoCode"
            id="promoCode"
            value={customerDetail.promoCode || userDetails?.promoCode}
            onChange={handleOnChange}
            type="text"
            className="py-3 w-full rounded-md font-medium outline-none"
          />
          <span
            onClick={ApplyPromoCode}
            className="bg-gray-500 px-8 rounded-full text-white py-2 cursor-none lg:cursor-pointer"
          >
            Apply
          </span>
        </div>
        <fieldset className="flex flex-col gap-3 lg:flex-row lg:gap-10 py-4">
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="COD"
              name="payment_method"
              value="COD"
              checked={paymentMode === "offline"}
              onChange={(e) => {
                handlePaymentType(e.target.value);
                setCustomerDetail({
                  ...customerDetail,
                  payment_method: e.target.value,
                });
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
              value="Prepaid"
              checked={paymentMode === "online"}
              onChange={(e) => {
                handlePaymentType(e.target.value);
                setCustomerDetail({
                  ...customerDetail,
                  payment_method: e.target.value,
                });
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
            name="saveInformation"
            id="saveInformation"
            value={
              customerDetail.saveInformation || userDetails?.saveInformation
            }
            onChange={handleOnChange}
            className="h-5 w-5 mt-2 rounded-md"
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
