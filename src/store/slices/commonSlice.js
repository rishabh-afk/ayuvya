import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "../services/getServices";

const initialState = {
  message: "",
  concerns: [],
  categories: [],
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

export const getAllConcerns = createAsyncThunk(
  "get/concerns",
  async (thunkAPI) => {
    try {
      return await services.getAllConcerns();
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

export const verifyOTP = createAsyncThunk(
  "post/verifyOtp",
  async (data, thunkAPI) => {
    try {
      return await services.verifyOTP(data);
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
      .addCase(getAllConcerns.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllConcerns.fulfilled, (state, action) => {
        state.status = "success";
        state.concerns = action.payload.results;
      })
      .addCase(getAllConcerns.rejected, (state, action) => {
        state.status = "rejected";
        state.concerns = [];
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
      .addCase(verifyOTP.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        localStorage.setItem("ayuvya-cart-token", action.payload.token);
        state.isOTPVerified = "success";
        state.accessToken = action.payload.token;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(sendOTP.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendOTP.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(sendOTP.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default commonSlice.reducer;
