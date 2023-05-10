import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderServices from "../services/orderServices";

const initialorderState = {
  status: "",
  message: "",
  orderDetails: {},
  payment_status: "",
};

export const createOrder = createAsyncThunk(
  "order/createNewOrder",
  async (customerDetail, thunkAPI) => {
    try {
      const token = localStorage.getItem("ayuvya-cart-token");
      const cartId = localStorage.getItem("ayuvya-cart-cartId");
      const data = {
        ...customerDetail,
        cart: "4b922503-302a-4f13-ae33-28eb97f01f4d" || cartId,
      };
      return await orderServices.createOrder(data, token);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const verifyPaymentStatus = createAsyncThunk(
  "order/verifyPayment",
  async (data, thunkAPI) => {
    try {
      return await orderServices.verifyPaymentStatus(data);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: initialorderState,
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "success";
        state.orderDetails = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(verifyPaymentStatus.pending, (state) => {
        state.status = "pending";
      })
      .addCase(verifyPaymentStatus.fulfilled, (state, action) => {
        state.status = "success";
        state.payment_status = action.payload.payment_status;
      })
      .addCase(verifyPaymentStatus.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default orderSlice.reducer;
