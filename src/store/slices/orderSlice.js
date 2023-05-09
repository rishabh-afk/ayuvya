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
  async (data, thunkAPI) => {
    try {
      return await orderServices.createOrder(data);
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
