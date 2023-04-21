const Subtotal = ({ price }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 py-8 text-gray-600 border-b">
        <p className="flex justify-between text-xl">
          <span className="">Subtotal</span>
          <span className="">₹ {price}</span>
        </p>
        <p className="flex justify-between text-xl">
          <span className="">Online Discount</span>
          <span className="">₹ {(price / 10).toFixed(2)}</span>
        </p>
        <p className="flex justify-between text-xl">
          <span className="">Shipping</span>
          <span className="">Free</span>
        </p>
      </div>
      <p className="flex justify-between text-xl border-b py-6 text-gray-700">
        <span className="">Total</span>
        <span className="">₹ {price - price / 10}</span>
      </p>
    </div>
  );
};

export default Subtotal;
