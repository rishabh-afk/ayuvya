import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import orderSlice from "./slices/orderSlice";
import commonSlice from "./slices/commonSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    blog: blogSlice,
    cart: cartSlice,
    auth: authSlice,
    order: orderSlice,
    common: commonSlice,
    product: productSlice,
  },
});
export default store;
