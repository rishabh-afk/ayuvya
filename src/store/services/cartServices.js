import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const CART_URL = "api/cart/item/";
let token = localStorage.getItem("ayuvya-cart-token");
const cartId = localStorage.getItem("ayuvya-cart-cartId");
let headers = {
  "Content-Type": "application/json",
  Authorization: "Token" + token,
};

const addItemToCart = async (data) => {
  const resp = await axios.post(`${BASE_URL}${CART_URL}`, data, {
    headers: headers,
  });
  return resp.data;
};

const updateCartItem = async (data, item_id) => {
  const resp = await axios.put(`${BASE_URL}${CART_URL}${item_id}`, data, {
    headers: headers,
  });
  return resp.data;
};

const fetchCart = async () => {
  const resp = await axios.get(`${BASE_URL}${CART_URL}${cartId}`, {
    headers: headers,
  });
  return resp.data;
};

const APPLY_COUPON_URL = "api/cart/coupon/";
const applyCoupon = async (data) => {
  const resp = await axios.post(`${BASE_URL}${APPLY_COUPON_URL}`, data, {
    headers: headers,
  });
  return resp.data;
};

const cartServices = {
  fetchCart,
  applyCoupon,
  addItemToCart,
  updateCartItem,
};

export default cartServices;
