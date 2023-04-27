const CustomerDetails = () => {
  return (
    <div>
      <h4 className="text-2xl">Customer information</h4>
      <div className="border-b py-4">
        <h5 className="text-lg pb-2 text-gray-600">Customer Details</h5>
        <div className="text-gray-500 text-sm">
          <div className="flex justify-between">
            <p className="">Name:</p>
            <p className="">Rishabh</p>
          </div>
          <div className="flex justify-between">
            <p className="">Phone Number:</p>
            <p className="">+91 9354697528</p>
          </div>
          <div className="flex justify-between">
            <p className="">Email:</p>
            <p className="">guptarishabh792@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-b py-4">
        <h5 className="text-lg pb-2 text-gray-600">Shipping address</h5>
        <p className="text-gray-500 text-sm">
          Street Number-16/2 Sadh Nagar Wz-228A Delhi 110045 Delhi India
        </p>
      </div>
      <div className="py-4">
        <h5 className="text-lg pb-2 text-gray-600">Payment method</h5>
        <div className="flex justify-between text-gray-500 text-sm">
          <p className="">Cash On Delivery (COD):</p>
          <p className="">₹ 1000.00</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
