import FormInput from "../forms/FormInput";

const CheckoutForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-gray-700">
      <h2 className="text-xl">Contact Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
        <FormInput
          placeholder="Phone Number*"
          name="phoneNumber"
          id="phoneNumber"
          type="number"
          required
          className="py-3 w-full rounded-md"
        />
        <FormInput
          placeholder="Email (Optional)"
          name="email"
          id="email"
          type="email"
          className="py-3 w-full rounded-md"
        />
        <h2 className="text-xl pb-2">Shipping Address</h2>
        <FormInput
          placeholder="First Name*"
          name="firstName"
          id="firstName"
          type="text"
          required
          className="py-3 w-full rounded-md"
        />
        <FormInput
          placeholder="Last Name*"
          name="lastName"
          id="lastName"
          type="text"
          className="py-3 w-full rounded-md"
        />
        <FormInput
          placeholder="Pincode*"
          name="pincode"
          id="pincode"
          type="number"
          required
          className="py-3 w-full rounded-md"
        />
        <FormInput
          placeholder="City/district"
          name="city_District"
          id="city_District"
          type="text"
          className="py-3 w-full rounded-md"
        />
        <select className="border w-full py-3 px-1 rounded-md mb-2">
          <option disabled value={"State"}>
            State
          </option>
          <option value="Delhi" className="">
            Delhi
          </option>
          <option value="Goa" className="">
            Goa
          </option>
          <option value="Mumbai" className="">
            Mumbai
          </option>
          <option value="Bangalore" className="">
            Bangalore
          </option>
          <option value="Chennai" className="">
            Chennai
          </option>
        </select>
        <FormInput
          placeholder="House number and area name*"
          name="addressLine1"
          id="addressLine1"
          type="text"
          required
          className="py-3 w-full rounded-md"
        />
        <FormInput
          placeholder="Apartment, suite, etc. (optional)"
          name="addressLine2"
          id="addressLine2"
          type="text"
          className="py-3 w-full rounded-md"
        />
        <select className="border w-full py-3 px-1 rounded-md mb-2">
          <option disabled value={"Country"}>
            Country
          </option>
          <option value="Delhi" className="">
            Delhi
          </option>
          <option value="Goa" className="">
            Goa
          </option>
          <option value="Mumbai" className="">
            Mumbai
          </option>
          <option value="Bangalore" className="">
            Bangalore
          </option>
          <option value="Chennai" className="">
            Chennai
          </option>
        </select>
        <select className="border w-full py-3 px-1 rounded-md mb-2">
          <option disabled value={"State"}>
            Gender
          </option>
          <option value="Delhi" className="">
            Male
          </option>
          <option value="Goa" className="">
            Female
          </option>
          <option value="Mumbai" className="">
            Others
          </option>
        </select>
        <div className="border-2 border-gray-300 rounded-full pl-4 pr-1 flex justify-between items-center">
          <input
            placeholder="Promo Code"
            name="promocode"
            id="promocode"
            type="text"
            className="py-3 w-full rounded-md outline-none"
          />
          <span className="bg-gray-500 px-6 rounded-full text-white py-2 ">
            Apply
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <FormInput
            placeholder="Apartment, suite, etc. (optional)"
            name="addressLine2"
            id="addressLine2"
            type="radio"
            className="h-4 w-4 mt-3 rounded-md"
          />
          <p className="">cash On Delivery (COD)</p>
        </div>
        <div className="flex gap-5 items-center">
          <FormInput
            placeholder="Apartment, suite, etc. (optional)"
            name="addressLine2"
            id="addressLine2"
            type="radio"
            className="h-4 w-4 mt-3 rounded-md"
          />
          <p className="">Pay Online</p>
        </div>
        {/* <div className="w-5 h-5 border-1 border-blue-800 rounded-full m-1">
          <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
        </div> */}
      </form>
    </div>
  );
};

export default CheckoutForm;
