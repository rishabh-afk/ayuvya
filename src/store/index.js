import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import blogSlice from "./slices/blogSlice";
import commonSlice from "./slices/commonSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    blog: blogSlice,
    common: commonSlice,
  },
});
export default store;
