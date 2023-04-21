// import { useState } from "react";
import { useState } from "react";
import Button from "../Button";
import FormInput from "../forms/FormInput";
import VerifyOtp from "../../modals/VerifyOtp";

const CheckoutForm = ({ handlePaymentType }) => {
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
        <FormInput
          placeholder="Phone Number*"
          name="phoneNumber"
          id="phoneNumber"
          type="number"
          required
          className="py-3 w-full rounded-md focus:outline-blue-200 focus:outline-4 focus:outline-offset-0"
        />
        <FormInput
          placeholder="Email (Optional)"
          name="email"
          id="email"
          type="email"
          className="py-3 w-full rounded-md focus:outline-blue-200 focus:outline-4 focus:outline-offset-0"
        />
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
          <FormInput
            placeholder="First Name*"
            name="firstName"
            id="firstName"
            type="text"
            required
            className="py-3 w-full rounded-md focus:outline-blue-200 focus:outline-4 focus:outline-offset-0"
            width="w-full md:w-1/2"
          />
          <FormInput
            placeholder="Last Name*"
            name="lastName"
            id="lastName"
            type="text"
            className="py-3 w-full rounded-md focus:outline-blue-200 focus:outline-4 focus:outline-offset-0"
            width="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <FormInput
            placeholder="Pincode*"
            name="pincode"
            id="pincode"
            type="number"
            required
            className="py-3 w-full rounded-md focus:outline-blue-200 focus:outline-4 focus:outline-offset-0"
            width="w-full md:w-1/3"
          />
          <FormInput
            placeholder="City/district*"
            name="city_District"
            id="city_District"
            type="text"
            className="py-3 w-full rounded-md focus:outline-blue-200 focus:outline-4 focus:outline-offset-0"
            width="w-full md:w-1/3"
          />
          <select
            id="state"
            className="border w-full md:w-1/3 py-3 md:py-0 px-1 rounded-md mb-2 md:mb-3 focus:outline focus:outline-blue-200 focus:outline-4 focus:outline-offset-0 bg-white border-gray-300 text-gray-400"
          >
            <option disabled defaultValue>
              Select State
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <FormInput
          placeholder="House number and area name*"
          name="addressLine1"
          id="addressLine1"
          type="text"
          required
          className="py-3 w-full rounded-md focus:outline-blue-200 focus:outline-4 focus:outline-offset-0"
        />
        <FormInput
          placeholder="Apartment, suite, etc. (optional)"
          name="addressLine2"
          id="addressLine2"
          type="text"
          className="py-3 w-full rounded-md focus:outline-blue-200 focus:outline-4 focus:outline-offset-0"
        />
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <select className="border w-full md:w-1/2 py-3 px-1 rounded-md mb-2 focus:outline focus:outline-blue-200 focus:outline-4 focus:outline-offset-0 bg-white border-gray-300 text-gray-400">
            <option disabled defaultValue>
              Select Country
            </option>
            <option value="India">India</option>
          </select>
          <select className="border w-full md:w-1/2 py-3 px-1 rounded-md mb-2 focus:outline focus:outline-blue-200 focus:outline-4 focus:outline-offset-0 bg-white border-gray-300 text-gray-400">
            <option disabled defaultValue>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="border border-gray-300 rounded-full pl-4 pr-1 flex justify-between items-center">
          <input
            placeholder="Promo Code"
            name="promocode"
            id="promocode"
            type="text"
            className="py-3 w-full rounded-md"
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
          className="bg-gray-400 rounded-lg flex justify-center w-full md:w-fit hover:bg-white hover:border hover:border-gray-400"
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
