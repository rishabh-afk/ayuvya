import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "../services/getServices";

const initialState = {
  blogs: [],
  status: "loading",
  message: "",
};

export const getAllBlogs = createAsyncThunk("get/blogs", async (thunkAPI) => {
  try {
    return await services.getAllBlogs();
  } catch (e) {
    const msg =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    return thunkAPI.rejectWithValue(msg);
  }
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.status = "success";
        state.blogs = action.payload.results;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.status = "rejected";
        state.blogs = [];
        state.message = action.payload;
      });
  },
});

export default blogsSlice.reducer;
