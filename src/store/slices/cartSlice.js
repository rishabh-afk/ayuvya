import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "../services/cartServices";

const initialState = {
  status: "loading",
  message: "",
  cartData: {},
};

export const addCartItem = createAsyncThunk(
  "add/cartItem",
  async (data, thunkAPI) => {
    try {
      return await cartServices.addItemToCart(data);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "update/cartItem",
  async (data, thunkAPI) => {
    try {
      return await cartServices.updateCartItem(data, data.id);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "remove/cartItem",
  async (data, thunkAPI) => {
    try {
      return await cartServices.deleteCartItem(data, data.id);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const fetchCartItems = createAsyncThunk("get/cart", async (thunkAPI) => {
  try {
    return await cartServices.fetchCart();
  } catch (e) {
    const msg =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    return thunkAPI.rejectWithValue(msg);
  }
});

const cartSlice = createSlice({
  name: "myCart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.status = "success";
        localStorage.setItem("sessionId", action.payload.sessionId);
        state.message = action.payload.message;
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(updateCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(removeCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
        state.cartData = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;
