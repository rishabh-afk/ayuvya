import { TiTick } from "react-icons/ti";
import { BsClipboard } from "react-icons/bs";
import CustomerDetails from "./CustomerDetails";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const OrderSummary = (props) => {
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
          <p className="inline-flex items-center text-lg">
            Order #{"114223" || props?.orderId}
            <span className="pl-2">
              <BsClipboard />
            </span>
          </p>
          <p className="text-xl">Thank You {"Rishabh" || props.username}!</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between border border-green-500 rounded-lg p-4 bg-green-300">
          <div className="w-3/5 text-green-700 flex flex-col gap-2">
            <p className="text-2xl font-semibold">Save ₹ 99.90</p>
            <p className="text-sm">
              Pay Online on this order by making your payment online
            </p>
          </div>
          <Button className="text-white h-fit bg-blue-500 px-4 hover:bg-blue-500/90 rounded-lg">
            <span className="text-lg">Pay Online</span>
          </Button>
        </div>
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
          <CustomerDetails />
        </div>
      </div>
      <div className="flex justify-center items-center my-8 gap-2 flex-col lg:flex-row lg:justify-between">
        <p className="order-last lg:order-first">
          Need Help?{" "}
          <Link
            to={"/contact-us"}
            className="text-blue-800 cursor-pointer hover:underline hover:underline-offset-2"
          >
            Contact Us
          </Link>
        </p>
        <div className="order-first lg:order-last">
          <Button className="text-white w-fit bg-gray-400 rounded-lg py-3 px-4 hover:bg-gray-400/90">
            <span className="text-lg">Continue Shopping</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
