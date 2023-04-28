import OrderDetails from "../components/order/OrderDetails";
import OrderSummary from "../components/order/OrderSummary";
import { motion } from "framer-motion";
import { cart } from "../data/cartData";

const variants = {
  initial: { y: -500 },
  animate: { y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
};

const ThankYou = () => {
  const handlePaymentType = () => {};

  return (
    <div className="lg:pl-20 flex flex-col lg:flex-row">
      <motion.div
        variants={variants}
        initial={variants.initial}
        animate={variants.animate}
        transition={variants.transition}
        className="w-full lg:w-[55%] p-4 lg:p-12 order-last lg:order-first"
      >
        <OrderSummary />
      </motion.div>
      <motion.div
        variants={variants}
        initial={variants.initial}
        animate={variants.animate}
        transition={variants.transition}
        className="w-full lg:w-[45%] px-4 lg:p-12 bg-gray-100 border-l border-[#e1e1e1] order-first lg:order-last"
      >
        <OrderDetails handlePaymentType={handlePaymentType} cart={cart} />
      </motion.div>
    </div>
  );
};

export default ThankYou;
