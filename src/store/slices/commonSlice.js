import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "../services/getServices";

const initialState = {
  categories: [],
  concerns: [],
  status: "loading",
  message: "",
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
      });
  },
});

export default commonSlice.reducer;
