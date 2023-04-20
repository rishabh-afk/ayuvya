import CheckoutForm from "../components/common/forms/CheckoutForm";
import OrderDetails from "../components/order/OrderDetails";

const Checkout = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full md:w-1/2 p-8 lg:p-12 order-last lg:order-first">
        <CheckoutForm />
      </div>
      <div className="w-full md:w-1/2 px-8 lg:p-12 bg-gray-100 h-fit border-l border-[#e1e1e1] order-first lg:order-last">
        <OrderDetails />
      </div>
    </div>
  );
};

export default Checkout;
