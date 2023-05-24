import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../services/authServices";

const initialAuthState = {
  isLoggedIn: false,
  status: "",
  message: "",
  userToken: "",
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

export const verifyOTP = createAsyncThunk(
  "post/verifyOtp",
  async (data, thunkAPI) => {
    try {
      return await authServices.verifyOTP(data);
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
      localStorage.removeItem("AYUVYA-AYURVEDA-252D-4E76-9B06");
    },
    login: (state) => {
      let token = localStorage.getItem("AYUVYA_TOKEN_USER");
      if (token) {
        state.isLoggedIn = true;
        state.userToken = token;
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
      })
      .addCase(verifyOTP.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.status = "success";
        state.isLoggedIn = true;
        state.userToken = action.payload.token;
        localStorage.setItem("AYUVYA_TOKEN_USER", action.payload.token);
        // localStorage.setItem("AYUVYA_CART_ID_8932_6754", action.payload.cart);
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
