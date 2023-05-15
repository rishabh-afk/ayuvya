import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "../services/cartServices";
import { toast } from "react-toastify";

const initialState = {
  status: "loading",
  message: "",
  coupon: "", // coupon code
  final_amount: 0, //final cart amount
  items: [], // fetch cart items using apis
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
      if (localData) {
        state.items = localData?.items;
        state.total_amount = localData?.total_amount;
        state.related_product_Id = localData?.related_product_Id;
        state.number_of_items = localData?.number_of_items;
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
        state.status = "loading";
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(applyCoupon.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const { addCartItem, removeCartItem, fetchCart, updateCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
