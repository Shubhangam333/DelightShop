import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const isItemexist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (isItemexist) {
        isItemexist.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action) => {
      const Item = state.cartItems.find(
        (item) => item._id == action.payload._id
      );
      Item.quantity--;
    },
    increaseQuantity: (state, action) => {
      const Item = state.cartItems.find(
        (item) => item._id == action.payload._id
      );
      Item.quantity++;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
      localStorage.setItem("shippingInfo", JSON.stringify(action.payload));
    },
  },
});

export const {
  addtoCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  cartTotal,
  saveShippingInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
