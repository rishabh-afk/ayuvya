import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ADD_ITEM_TO_CART_URL = "api/cart/item/";
const addItemToCart = async (data) => {
  const resp = await axios.post(`${BASE_URL}${ADD_ITEM_TO_CART_URL}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return resp.data;
};

const UPDATE_CART_ITEM_URL = "api/cart/item/";
const updateCartItem = async (data, id) => {
  const resp = await axios.put(
    `${BASE_URL}${UPDATE_CART_ITEM_URL}${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return resp.data;
};

const DELETE_CART_ITEM_URL = "api/cart/item/";
const deleteCartItem = async (data, id) => {
  const resp = await axios.put(
    `${BASE_URL}${DELETE_CART_ITEM_URL}${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return resp.data;
};

const FETCH_CART_ITEMS_URL = "api/cart/";
const fetchCart = async (cartId) => {
  const resp = await axios.get(`${BASE_URL}${FETCH_CART_ITEMS_URL}/${cartId}`);
  return resp.data;
};

const cartServices = {
  addItemToCart,
  updateCartItem,
  deleteCartItem,
  fetchCart,
};

export default cartServices;
