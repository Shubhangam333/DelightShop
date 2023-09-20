import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authSlice.js";
import categoryReducer from "../categorySlice.js";
import productReducer from "../productSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
  },
});
