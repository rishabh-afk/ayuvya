import CheckoutForm from "../components/common/forms/CheckoutForm";
import OrderDetails from "../components/order/OrderDetails";
const ThankYou = () => {
  const handlePaymentType = () => {};
  return (
    <div className="lg:pl-20 flex flex-col lg:flex-row">
      <div className="w-full md:w-[55%] p-8 lg:p-12 order-last lg:order-first">
        <CheckoutForm handlePaymentType={handlePaymentType} />
      </div>
      <div className="w-full md:w-[45%] px-8 lg:p-12 bg-gray-100 border-l border-[#e1e1e1] order-first lg:order-last">
        <OrderDetails handlePaymentType={handlePaymentType} />
      </div>
    </div>
  );
};

export default ThankYou;
