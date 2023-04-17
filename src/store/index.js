import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import blogSlice from "./slices/blogSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    blog: blogSlice,
  },
});
export default store;
