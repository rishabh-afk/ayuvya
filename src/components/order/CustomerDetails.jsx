const CustomerDetails = ({ userDetails, totalAmount }) => {
  return (
    <div>
      <h4 className="text-2xl">Customer information</h4>
      <div className="border-b py-4">
        <h5 className="text-lg pb-2 text-gray-600">Customer Details</h5>
        <div className="text-gray-500 text-sm">
          <div className="flex justify-between">
            <p className="">Name:</p>
            <p className="">
              {userDetails?.first_name} {userDetails?.last_name}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="">Phone Number:</p>
            <p className="">+91 {userDetails?.phone}</p>
          </div>
          <div className="flex justify-between">
            <p className="">Email:</p>
            <p className="">{userDetails?.email}</p>
          </div>
        </div>
      </div>
      <div className="border-b py-4">
        <h5 className="text-lg pb-2 text-gray-600">Shipping address</h5>
        <p className="text-gray-500 text-sm">
          {userDetails?.apartment} {userDetails?.address}
        </p>
      </div>
      <div className="py-4">
        <h5 className="text-lg pb-2 text-gray-600">Payment method</h5>
        <div className="flex justify-between text-gray-500 text-sm">
          <p className="">Cash On Delivery (COD):</p>
          <p className="">₹ {totalAmount}.00</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
