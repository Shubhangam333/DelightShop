import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authSlice.js";
import categoryReducer from "../categorySlice.js";
import productReducer from "../productSlice.js";
import cartReducer from "../cartSlice.js";
import filterReducer from "../filterSlice.js";
import adminReducer from "../adminSlice.js";
import orderReducer from "../orderSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    filter: filterReducer,
    admin: adminReducer,
    order: orderReducer,
  },
});
