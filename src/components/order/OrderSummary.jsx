import { useState } from "react";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import config from "../../config/config";
import { useDispatch } from "react-redux";
import { BsClipboard } from "react-icons/bs";
import CustomerDetails from "./CustomerDetails";
import { Link, useNavigate } from "react-router-dom";
import { load } from "@cashfreepayments/cashfree-js";
import { updateCODOrder } from "../../store/slices/orderSlice";

const OrderSummary = ({ userDetails, final_amount, orderId, payment_type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [copyToClip, setCopyToClip] = useState(false);

  const backToHome = async () => {
    localStorage.removeItem("AYUVYA_CART_9731_8652");
    localStorage.removeItem("AYUVYA_ORDER_ID");
    localStorage.removeItem("AYUVYA_USERDATA");
    localStorage.removeItem("AYUVYA_CART_ID_8932_6754");
    navigate("/");
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderId);
    setCopyToClip(true);
    setTimeout(() => {
      setCopyToClip(false);
    }, 3000);
  };
  // to create prepaid orders
  const handlePrePaidOrder = () => {
    const user = {
      ...userDetails,
      orderId: orderId,
    };
    dispatch(updateCODOrder(user)).then((response) => {
      localStorage.setItem("AYUVYA_ORDER_ID", response.payload.get_order_id);
      localStorage.setItem(
        "AYUVYA_UPDATED_ORDER_ID",
        response.payload.order_id
      );
      handleCashFreePayment(response.payload.order_token);
    });
  };
  //to handle prepaid order
  const handleCashFreePayment = async (order_token) => {
    const cashfree = await load({ mode: config.CASHFREE_MODE });
    let checkoutOptions = {
      paymentSessionId: order_token,
      returnUrl: config.CASHFREE_RETURN_URL,
    };
    cashfree.checkout(checkoutOptions).then((result) => {
      if (result.error) toast.error(result.error.message);
      if (result.redirect) console.log("Redirection");
    });
  };
  return (
    <div>
      <h2 className="text-3xl text-black mb-4 hidden lg:block">
        Ayuvya Ayurveda
      </h2>
      <div className="flex gap-3 my-7">
        <div className="border-[6px] border-gray-400 rounded-full w-fit h-fit">
          <TiTick className="text-gray-400" size={40} />
        </div>
        <div className="flex flex-col gap-1">
          <div
            id="copyToClipboard"
            className="inline-flex items-center text-lg"
          >
            Order #{orderId}
            <div className="pl-2">
              {copyToClip ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center"
                >
                  <TiTick className="text-green-600" size={25} />
                  <p className="text-sm">Copied!</p>
                </motion.div>
              ) : (
                <motion.div whileHover={{ scale: 1.2 }}>
                  <BsClipboard onClick={copyToClipboard} />
                </motion.div>
              )}
            </div>
          </div>
          <p className="text-xl">Thank You {userDetails?.first_name}!</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {payment_type === "COD" && (
          <div className="flex justify-between border border-green-500 rounded-lg p-4 bg-green-300">
            <div className="w-3/5 text-green-700 flex flex-col gap-2">
              <p className="text-2xl font-semibold">
                Save ₹ {((final_amount * 10) / 100).toFixed(2)}
              </p>
              <p className="text-sm">
                Pay Online on this order by making your payment online
              </p>
            </div>
            <Button
              handler={handlePrePaidOrder}
              className="text-white h-fit bg-blue-500 px-4 hover:bg-blue-500/90 rounded-lg relative z-50"
            >
              <span className="text-lg">Pay Online</span>
            </Button>
          </div>
        )}
        <div className="border border-slate-300 bg-slate-100 rounded-lg p-4">
          <h4 className="text-2xl">Your order is confirmed</h4>
          <p className="mt-3 text-sm text-gray-500">
            You'll receive a confirmation sms with your order number shortly.
          </p>
        </div>
        <div className="border border-slate-300 bg-slate-100 rounded-lg p-4">
          <h4 className="text-2xl">Order updates</h4>
          <p className="mt-3 text-sm text-gray-500">
            You'll get shipping and delivery updates by sms.
          </p>
        </div>
        <div className="border border-slate-300 bg-slate-100 rounded-lg p-4">
          <CustomerDetails
            userDetails={userDetails}
            final_amount={final_amount}
          />
        </div>
      </div>
      <div className="flex justify-center items-center my-8 gap-2 flex-col md:flex-row md:justify-between">
        <p className="order-last md:order-first">
          Need Help?{" "}
          <Link
            to={"/contact-us"}
            className="text-blue-800 cursor-pointer hover:underline hover:underline-offset-2"
          >
            Contact Us
          </Link>
        </p>
        <div className="order-first md:order-last">
          <Button
            handler={backToHome}
            className="text-white w-fit bg-gray-400 rounded-lg py-3 px-4 hover:bg-gray-400/90"
          >
            <span className="text-lg">Continue Shopping</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
