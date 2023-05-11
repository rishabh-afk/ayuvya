import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CREATE_ORDER_COD_URL = "api/checkout/create/order/";
const createOrder = async (data, token) => {
  const resp = await toast.promise(
    axios.post(`${BASE_URL}${CREATE_ORDER_COD_URL}`, data, {
      headers:
        data.payment_method !== "Prepaid"
          ? { Authorization: "Token " + token }
          : token === null
          ? { "Content-Type": "application/json" }
          : {
              "Content-Type": "application/json",
              Authorization: "Token " + token,
            },
    }),
    {
      pending: "Please wait...",
      success: "Order created successfully!",
      error: "Failed to initialize order! Try again later",
    }
  );
  return resp.data;
};

const VERIFY_PAYMENT_STATUS = "api/checkout/verify/payment/";
const verifyPaymentStatus = async (data) => {
  const resp = await axios.post(`${BASE_URL}${VERIFY_PAYMENT_STATUS}`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return resp.data;
};

const orderServices = { createOrder, verifyPaymentStatus };

export default orderServices;
