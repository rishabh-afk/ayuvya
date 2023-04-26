import OrderDetails from "../components/order/OrderDetails";
import OrderSummary from "../components/order/OrderSummary";
import { cart } from "../data/cartData";
const ThankYou = () => {
  const handlePaymentType = () => {};
  return (
    <div className="lg:pl-20 flex flex-col lg:flex-row">
      <div className="w-full lg:w-[55%] p-4 lg:p-12 order-last lg:order-first">
        <OrderSummary />
      </div>
      <div className="w-full lg:w-[45%] px-4 lg:p-12 bg-gray-100 border-l border-[#e1e1e1] order-first lg:order-last">
        <OrderDetails handlePaymentType={handlePaymentType} cart={cart} />
      </div>
    </div>
  );
};

export default ThankYou;
