import { createSlice } from "@reduxjs/toolkit";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartServices from "../services/cartServices";

const initialState = {
  status: "loading",
  message: "",
  items: [],
  totalAmount: 0,
  numberOfItems: 0,
  related_product_Id: [],
};

// export const addCartItem = createAsyncThunk(
//   "add/cartItem",
//   async (data, thunkAPI) => {
//     try {
//       return await cartServices.addItemToCart(data);
//     } catch (e) {
//       const msg =
//         (e.response && e.response.data && e.response.data.message) ||
//         e.message ||
//         e.toString();
//       return thunkAPI.rejectWithValue(msg);
//     }
//   }
// );

// export const updateCartItem = createAsyncThunk(
//   "update/cartItem",
//   async (data, thunkAPI) => {
//     try {
//       return await cartServices.updateCartItem(data, data.product);
//     } catch (e) {
//       const msg =
//         (e.response && e.response.data && e.response.data.message) ||
//         e.message ||
//         e.toString();
//       return thunkAPI.rejectWithValue(msg);
//     }
//   }
// );

// export const removeCartItem = createAsyncThunk(
//   "remove/cartItem",
//   async (data, thunkAPI) => {
//     try {
//       return await cartServices.deleteCartItem(data, data.product);
//     } catch (e) {
//       const msg =
//         (e.response && e.response.data && e.response.data.message) ||
//         e.message ||
//         e.toString();
//       return thunkAPI.rejectWithValue(msg);
//     }
//   }
// );

// export const fetchCartItems = createAsyncThunk("get/cart", async (thunkAPI) => {
//   try {
//     return await cartServices.fetchCart();
//   } catch (e) {
//     const msg =
//       (e.response && e.response.data && e.response.data.message) ||
//       e.message ||
//       e.toString();
//     return thunkAPI.rejectWithValue(msg);
//   }
// });

const cartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      if (action.payload) {
        let cart = JSON.parse(localStorage.getItem("ayuvya-cart"));
        let itemExists = cart?.items?.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (itemExists) {
          itemExists.total_item_price += action.payload.price;
          itemExists.qty += action.payload.qty;
          // cart?.items.map((cartItem) => {
          //   if (cartItem.id === itemExists.id) {
          //     return (cartItem = itemExists);
          //   }
          // });
          cart.totalAmount += action.payload.price;
          localStorage.setItem("ayuvya-cart", JSON.stringify(cart));
        } else {
          state.items.push(action.payload);
          state.numberOfItems += 1;
          state.related_product_Id.push(action.payload.id);
          state.totalAmount += action.payload.price;
          localStorage.setItem("ayuvya-cart", JSON.stringify(state));
        }
      }
    },
    removeCartItem: (state, action) => {
      let cart = JSON.parse(localStorage.getItem("ayuvya-cart"));
      let itemExists = cart?.items?.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      const total_item_price = itemExists.qty * itemExists.price;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.related_product_Id = state.related_product_Id.filter(
        (item) => item !== action.payload.id
      );
      state.numberOfItems -= 1;
      state.totalAmount -= total_item_price;
      localStorage.setItem("ayuvya-cart", JSON.stringify(state));
    },
    fetchCart: (state, action) => {
      const localData = JSON.parse(localStorage.getItem("ayuvya-cart"));
      if (localData) {
        state.items = localData?.items;
        state.totalAmount = localData?.totalAmount;
        state.related_product_Id = localData?.related_product_Id;
        state.numberOfItems = localData?.numberOfItems;
      }
    },
    updateCartItem: (state, action) => {
      if (action.payload) {
        let cart = JSON.parse(localStorage.getItem("ayuvya-cart"));
        const itemExists = cart?.items?.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        const totalitemAmount = action.payload.qty * action.payload.price;
        itemExists.total_item_price = totalitemAmount;
        itemExists.qty = action.payload.qty;
        // cart?.items?.map((cartItem) => {
        //   if (cartItem.id === itemExists.id) {
        //     return (cartItem = itemExists);
        //   }
        // });
        if (action.payload.type === "remove") {
          cart.totalAmount -= action.payload.price;
        } else {
          cart.totalAmount += action.payload.price;
        }
        localStorage.setItem("ayuvya-cart", JSON.stringify(cart));
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder;
  // .addCase(addCartItem.pending, (state) => {
  //   state.status = "loading";
  // })
  // .addCase(addCartItem.fulfilled, (state, action) => {
  //   state.status = "success";
  //   localStorage.setItem("sessionId", action.payload.session_id);
  //   state.message = action.payload.message;
  // })
  // .addCase(addCartItem.rejected, (state, action) => {
  //   state.status = "rejected";
  // })
  // .addCase(updateCartItem.pending, (state) => {
  //   state.status = "loading";
  // })
  // .addCase(updateCartItem.fulfilled, (state, action) => {
  //   state.status = "success";
  //   state.message = action.payload.message;
  // })
  // .addCase(updateCartItem.rejected, (state, action) => {
  //   state.status = "rejected";
  // })
  // .addCase(removeCartItem.pending, (state) => {
  //   state.status = "loading";
  // })
  // .addCase(removeCartItem.fulfilled, (state, action) => {
  //   state.status = "success";
  //   state.message = action.payload.message;
  // })
  // .addCase(removeCartItem.rejected, (state, action) => {
  //   state.status = "rejected";
  // })
  // .addCase(fetchCartItems.pending, (state) => {
  //   state.status = "loading";
  // })
  // .addCase(fetchCartItems.fulfilled, (state, action) => {
  //   state.status = "success";
  //   state.message = action.payload.message;
  //   state.cartData = action.payload;
  // })
  // .addCase(fetchCartItems.rejected, (state, action) => {
  //   state.status = "rejected";
  // });
  // },
});

export const { addCartItem, removeCartItem, fetchCart, updateCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
