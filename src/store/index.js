import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import blogSlice from "./slices/blogSlice";
import commonSlice from "./slices/commonSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    blog: blogSlice,
    common: commonSlice,
    cart: cartSlice,
  },
});
export default store;
