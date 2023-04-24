import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "../services/getServices";

const initialState = {
  products: [],
  status: "loading",
  message: "",
  productDetails: {},
};

export const getAllProducts = createAsyncThunk(
  "get/products",
  async (thunkAPI) => {
    try {
      return await services.getAllProducts();
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.productDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.products = [];
        state.message = action.payload;
      });
  },
});

export const { setCurrentProduct } = productsSlice.actions;

export default productsSlice.reducer;
