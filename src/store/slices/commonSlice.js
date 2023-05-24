import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "../services/getServices";

const initialState = {
  message: "",
  categories: [],
  instaPosts: [],
  accessToken: "",
  isOTPVerified: "",
  status: "loading",
  relatedProducts: [],
};

export const getAllCategories = createAsyncThunk(
  "get/categories",
  async (thunkAPI) => {
    try {
      return await services.getAllCategories();
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getAllRelatedProducts = createAsyncThunk(
  "post/related-products",
  async (data, thunkAPI) => {
    try {
      return await services.getAllRelatedProducts(data);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getInstaPosts = createAsyncThunk(
  "get/getInstaPost",
  async (thunkAPI) => {
    try {
      return await services.getInstaPosts();
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const sendOTP = createAsyncThunk(
  "post/sendOTP",
  async (data, thunkAPI) => {
    try {
      return await services.sendOTP(data);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const commonSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = action.payload.results;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.status = "rejected";
        state.categories = [];
        state.message = action.payload;
      })
      .addCase(getAllRelatedProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllRelatedProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.relatedProducts = action.payload;
      })
      .addCase(getAllRelatedProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.relatedProducts = [];
        state.message = action.payload;
      })
      .addCase(sendOTP.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendOTP.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(sendOTP.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(getInstaPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getInstaPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.instaPosts = action.payload;
      })
      .addCase(getInstaPosts.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default commonSlice.reducer;
