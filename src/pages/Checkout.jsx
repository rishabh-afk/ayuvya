import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchCart, fetchCartAuth } from "../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "../components/order/OrderDetails";
import CheckoutForm from "../components/common/forms/CheckoutForm";

const variants = {
  initial: { y: -500 },
  animate: { y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
};

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (cart.status !== "success") {
      if (isLoggedIn) dispatch(fetchCartAuth());
      else dispatch(fetchCart());
    }
    if (cart.status === "success" && cart?.items.length === 0) navigate("/");
  }, [dispatch, cart, navigate, isLoggedIn]);

  return (
    <>
      {cart.status === "success" && (
        <div className="lg:pl-20 flex flex-col lg:flex-row">
          <motion.div
            variants={variants}
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
            className="w-full lg:w-[55%] p-6 lg:p-12 order-last lg:order-first"
          >
            <CheckoutForm />
          </motion.div>
          <motion.div
            variants={variants}
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
            className="w-full lg:w-[45%] px-6 lg:p-12 bg-gray-100 border-l border-[#e1e1e1] order-first lg:order-last"
          >
            <OrderDetails cart={cart} payment_type={cart?.payment_type} />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Checkout;
