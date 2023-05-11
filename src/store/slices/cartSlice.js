import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "../services/cartServices";
import { toast } from "react-toastify";

const initialState = {
  status: "loading",
  message: "",
  items: [], // fetch cart items using apis
  totalAmount: 0, // total amount of cart items
  numberOfItems: 0, // number of items present in cart
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
        cart: "" || cartId,
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

export const updateCartAuth = createAsyncThunk(
  "update/updateCart",
  async (data, thunkAPI) => {
    try {
      return await cartServices.updateCartItem(data, data.product);
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
          cart.totalAmount += action.payload.price;
          localStorage.setItem("AYUVYA_CART", JSON.stringify(cart));
        } else {
          state.items.push(action.payload);
          state.numberOfItems += 1;
          state.related_product_Id.push(action.payload.id);
          state.totalAmount += action.payload.price;
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
      state.numberOfItems -= 1;
      state.totalAmount -= total_item_price;
      localStorage.setItem("AYUVYA_CART", JSON.stringify(state));
    },
    fetchCart: (state, action) => {
      const localData = JSON.parse(localStorage.getItem("AYUVYA_CART"));
      if (localData) {
        state.items = localData?.items;
        state.totalAmount = localData?.totalAmount;
        state.related_product_Id = localData?.related_product_Id;
        state.numberOfItems = localData?.numberOfItems;
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
          cart.totalAmount -= action.payload.price;
        } else {
          cart.totalAmount += action.payload.price;
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
        const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
        state.items = action.payload.items;
        localStorage.setItem("AYUVYA_CART-CARTID", action.payload.cart);
        state.totalAmount = action.payload.totalAmount;
        state.numberOfItems = action.payload.items.length;
        state.related_product_Id = cart.related_product_Id;
        localStorage.setItem("AYUVYA_CART", JSON.stringify(state));
      })
      .addCase(addToCartAuth.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(updateCartAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAuth.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
      })
      .addCase(updateCartAuth.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(fetchCartAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartAuth.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload?.cart) {
          localStorage.setItem("AYUVYA_CART-CARTID", action.payload.cart);
          const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
          state.items = action.payload.items;
          state.numberOfItems = cart.numberOfItems;
          state.related_product_Id = cart.related_product_Id;
          state.totalAmount = action.payload.totalAmount;
          localStorage.setItem("AYUVYA_CART", JSON.stringify(state));
        }
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
