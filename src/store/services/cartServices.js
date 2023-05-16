import axios from "axios";
import { toast } from "react-toastify";
import config from "../../config/config";

const BASE_URL = config.REACT_APP_BASE_URL;
const CART_URL = "api/cart/item/";

const addItemToCart = async (data, token) => {
  const resp = await toast.promise(
    axios.post(`${BASE_URL}${CART_URL}`, data, {
      headers:
        token !== null
          ? { Authorization: "Token " + token }
          : { "Content-Type": "application/json" },
    }),
    {
      pending: "Please wait...",
      success: "Item updated successfully!",
      error: "Failed to update",
    }
  );
  return resp.data;
};

const fetchCart = async (token, cartId) => {
  const resp = await axios.get(`${BASE_URL}${CART_URL}${cartId}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  });
  return resp.data;
};

const APPLY_COUPON_URL = "api/cart/coupon/";
const applyCoupon = async (coupon, token, cartId) => {
  const data = {
    coupon: coupon,
    cart: cartId,
  };
  const resp = await axios.post(`${BASE_URL}${APPLY_COUPON_URL}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  });
  return resp.data;
};

const cartServices = {
  fetchCart,
  applyCoupon,
  addItemToCart,
};

export default cartServices;
