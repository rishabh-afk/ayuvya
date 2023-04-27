// import { useState } from "react";
import { useState } from "react";
import Button from "../Button";
import FormInput from "../forms/FormInput";
import VerifyOtp from "../../modals/VerifyOtp";
import Form from "./Form";

const CheckoutForm = ({ handlePaymentType, paymentMode }) => {
  // const [customerDetail, setCustomerDetail] = useState({
  //   phoneNumber: "",
  //   email: "",
  //   firstName: "",
  //   notification: "",
  //   lastName: "",
  //   pincode: "",
  //   city_District: "",
  //   state: "",
  //   addressLine1: "",
  //   addressLine2: "",
  //   country: "",
  //   gender: "",
  //   promoCode: "",
  //   payment: "",
  //   saveInformation: "",
  // });
  const [otpModal, showOtpModal] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    showOtpModal(true);
  };
  const handleClose = () => {
    showOtpModal(false);
  };
  const ApplyPromoCode = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-gray-700">
      <VerifyOtp otpModal={otpModal} handleClose={handleClose} />
      <h2 className="text-3xl text-black mb-4 hidden lg:block">
        Ayuvya Ayurveda
      </h2>
      <h2 className="text-xl">Contact Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
        <div className="mt-3">
          <Form
            type="number"
            id="phoneNumber"
            label="Phone Number *"
            autoFocus
            required
          />
        </div>
        <div className="mt-3">
          <Form type="email" id="email" label="Email (Optional)" />
        </div>
        <div className="flex gap-3 items-center">
          <FormInput
            type="checkbox"
            name="notification"
            id="notification"
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
              id="firstName mt-3 lg:mt-0"
              label="First Name *"
              required
            />
          </div>
          <div className="w-full lg:w-1/2 mt-3 lg:mt-0">
            <Form type="text" id="lastName" label="Last Name" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-0 lg:mt-3">
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <Form type="number" id="pincode" label="Pincode *" required />
          </div>
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <Form
              type="text"
              id="city_District"
              label="City/district *"
              required
            />
          </div>
          <div className="w-full lg:w-1/3 mt-3 lg:mt-0">
            <div className="relative">
              <select
                id="city"
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              >
                <option disabled>Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
              </select>
              <label
                htmlFor="city"
                className="absolute rounded-lg text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Country
              </label>
            </div>
          </div>
        </div>
        <div className="w-full mt-3">
          <Form
            type="text"
            id="addressLine1"
            label="House number and area name *"
            required
          />
        </div>
        <div className="w-full mt-3">
          <Form
            type="text"
            id="addressLine2"
            label="Apartment, suite, etc. (optional)"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <div className="w-full lg:w-1/2 mt-3">
            <div className="relative">
              <select
                id="country"
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
            name="promocode"
            id="promocode"
            type="text"
            className="py-3 w-full rounded-md font-medium"
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
              id="cashOnDelivery"
              name="payment"
              value="cashOnDelivery"
              checked={paymentMode === "offline"}
              onChange={(e) => handlePaymentType(e.target.value)}
              className="h-7 w-7 rounded-md"
            />
            <label htmlFor="cashOnDelivery" className="text-lg">
              Cash On Delivery (COD)
            </label>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="payOnline"
              name="payment"
              value="payOnline"
              checked={paymentMode === "online"}
              onChange={(e) => handlePaymentType(e.target.value)}
              className="h-7 w-7 rounded-md"
            />
            <label htmlFor="payOnline" className="text-lg">
              Pay Online
            </label>
          </div>
        </fieldset>
        <div className="flex gap-3 items-center px-1">
          <FormInput
            type="checkbox"
            name="saveInformation"
            id="saveInformation"
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
