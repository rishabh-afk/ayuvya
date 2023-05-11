import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../services/authServices";

const initialAuthState = {
  isLoggedIn: false,
  status: "",
  message: "",
  userToken: null,
  userData: [],
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      return await authServices.loginUser(data);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (token, thunkAPI) => {
    try {
      return await authServices.getUser(token);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
      Object.assign(state, initialAuthState);
      localStorage.removeItem("AYUVYA-AYURVEDA-252d-4e76-9b06");
    },
    login: (state) => {
      let token = localStorage.getItem("AYUVYA_TOKEN_USER");
      if (token) {
        state.isLoggedIn = true;
        state.accessToken = token;
        state.status = "success";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoggedIn = false;
        state.message = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.message = action.payload.message;
        state.userToken = action.payload.result.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.message = action.payload.message;
      })
      .addCase(getUser.pending, (state) => {
        state.message = "pending";
        state.isLoggedIn = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.message = action.payload.message;
        state.userToken = action.payload.result.accesstoken;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.message = action.payload;
      });
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
