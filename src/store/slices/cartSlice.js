import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "../services/cartServices";
import { toast } from "react-toastify";

const initialState = {
  status: "loading",
  couponStatus: false,
  message: "",
  coupon: "", // coupon code
  final_amount: 0, //final cart amount
  items: [], // fetch cart items using apis
  payment_type: "Prepaid", // type of payment
  number_of_items: 0, // number of items present in cart
  online_discount: 0, // cart amount for online discount
  coupon_discount: 0, // cart amount for coupon discount
  total_amount: 0, // total cart amount without discounts
  related_product_Id: [], // related product based on product present in cart
};

export const addToCartAuth = createAsyncThunk(
  "add/addToCart",
  async (data, thunkAPI) => {
    try {
      let token = localStorage.getItem("AYUVYA_TOKEN_USER");
      const cartId = localStorage.getItem("AYUVYA_CART-CARTID");
      const cartdata = {
        items: data,
        cart: cartId,
      };
      return await cartServices.addItemToCart(cartdata, token);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const fetchCartAuth = createAsyncThunk(
  "get/getcart",
  async (thunkAPI) => {
    try {
      let token = localStorage.getItem("AYUVYA_TOKEN_USER");
      const cartId = localStorage.getItem("AYUVYA_CART-CARTID");
      return await cartServices.fetchCart(token, cartId);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const applyCoupon = createAsyncThunk(
  "get/applyCoupon",
  async (data, thunkAPI) => {
    try {
      let token = localStorage.getItem("AYUVYA_TOKEN_USER");
      const cartId = localStorage.getItem("AYUVYA_CART-CARTID");
      return await cartServices.applyCoupon(data, token, cartId);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const cartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      if (action.payload) {
        let cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
        let itemExists = cart?.items?.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (itemExists) {
          itemExists.total_item_price += action.payload.price;
          itemExists.quantity += action.payload.quantity;
          cart.total_amount += action.payload.price;
          localStorage.setItem("AYUVYA_CART", JSON.stringify(cart));
        } else {
          state.items.push(action.payload);
          state.number_of_items += 1;
          state.related_product_Id.push(action.payload.id);
          state.total_amount += action.payload.price;
          localStorage.setItem("AYUVYA_CART", JSON.stringify(state));
        }
        toast.success("Item is added successfully", {
          position: "bottom-left",
        });
      }
    },
    removeCartItem: (state, action) => {
      let cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
      let itemExists = cart?.items?.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      const total_item_price = itemExists.quantity * itemExists.price;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.related_product_Id = state.related_product_Id.filter(
        (item) => item !== action.payload.id
      );
      state.number_of_items -= 1;
      state.total_amount -= total_item_price;
      localStorage.setItem("AYUVYA_CART", JSON.stringify(state));
    },
    fetchCart: (state, action) => {
      const localData = JSON.parse(localStorage.getItem("AYUVYA_CART"));
      const paymentType = localStorage.getItem("AYUVYA_PAYMENT_METHOD");
      state.status = "success";
      if (localData) {
        state.items = localData?.items;
        state.coupon = localData?.coupon;
        state.total_amount = localData?.total_amount;
        state.couponStatus = localData?.couponStatus ? true : false;
        state.final_amount =
          paymentType === "Prepaid"
            ? localData?.total_amount - (10 * localData?.total_amount) / 100
            : localData?.total_amount;
        state.number_of_items = localData?.number_of_items;
        state.coupon_discount = localData?.couponStatus
          ? localData?.coupon_discount
          : 0;
        state.online_discount =
          paymentType === "Prepaid" ? (10 * localData?.total_amount) / 100 : 0;
        state.related_product_Id = localData?.related_product_Id;
        localStorage.setItem("AYUVYA_CART", JSON.stringify(state));
      }
      if (paymentType === "Prepaid") {
        localStorage.setItem("AYUVYA_PAYMENT_METHOD", "COD");
      } else {
        localStorage.setItem("AYUVYA_PAYMENT_METHOD", "Prepaid");
      }
    },
    updateCartItem: (state, action) => {
      if (action.payload) {
        let cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
        const itemExists = cart?.items?.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        const totalitemAmount = action.payload.quantity * action.payload.price;
        itemExists.total_item_price = totalitemAmount;
        itemExists.quantity = action.payload.quantity;
        if (action.payload.type === "remove") {
          cart.total_amount -= action.payload.price;
        } else {
          cart.total_amount += action.payload.price;
        }
        localStorage.setItem("AYUVYA_CART", JSON.stringify(cart));
      }
    },
    selectPaymentMode: (state, action) => {
      state.payment_type = action.payload;
      localStorage.setItem("AYUVYA_PAYMENT_METHOD", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAuth.fulfilled, (state, action) => {
        state.status = "success";
        localStorage.setItem("AYUVYA_CART-CARTID", action.payload.cart);
      })
      .addCase(addToCartAuth.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(fetchCartAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartAuth.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload.items;
        state.coupon =
          action.payload.coupon === null ? "none" : action.payload.coupon;
        state.total_amount = action.payload.total_amount;
        state.final_amount = action.payload.final_amount;
        state.number_of_items = action.payload.items.length;
        state.coupon_discount = action.payload.coupon_discount;
        state.online_discount = action.payload.online_discount;
        state.related_product_Id = action.payload?.items.map((item) => {
          return item.id;
        });
      })
      .addCase(fetchCartAuth.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(applyCoupon.pending, (state) => {
        state.couponStatus = "loading";
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.couponStatus = "success";
      })
      .addCase(applyCoupon.rejected, (state, action) => {
        if (action.payload === "Request failed with status code 404") {
          state.couponStatus = "404";
          toast.warn("Coupon doesn't exist");
        }
        if (action.payload === "Request failed with status code 500") {
          state.couponStatus = "500";
          toast.warn("Invalid Coupon");
        }
      });
  },
});

export const {
  addCartItem,
  removeCartItem,
  fetchCart,
  updateCartItem,
  selectPaymentMode,
} = cartSlice.actions;

export default cartSlice.reducer;
