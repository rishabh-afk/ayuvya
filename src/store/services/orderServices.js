import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CREATE_ORDER_COD_URL = "api/checkout/create/";
const createOrder = async (data) => {
  const resp = await axios.post(`${BASE_URL}${CREATE_ORDER_COD_URL}`, data, {
    headers: { "Content-Type": "application/json" },
  });
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
