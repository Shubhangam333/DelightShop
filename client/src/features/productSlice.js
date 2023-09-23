import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import customFetch from "../utils/customFetch";

const initialState = {
  isLoading: false,
  error: "",
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : null,
  product: null,
  message: "",
};

export const createProductAsync = createAsyncThunk(
  "/product/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/v1/createProduct`, productData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);
export const getAllProductsAsync = createAsyncThunk(
  "/product/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await customFetch.get("/getAllProducts");

      localStorage.setItem("products", JSON.stringify(response.data.products));
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);
export const getProductByIdAsync = createAsyncThunk(
  "/product/getProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await customFetch.get(`/product/${productId}`);

      return response.data.product;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);
export const createProductReviewAsync = createAsyncThunk(
  "/product/createProductReview",
  async (reviewData, { rejectWithValue }) => {
    try {
      const response = await customFetch.put(`/review`, reviewData);
      console.log(response.data.msg);
      return response.data.msg;
    } catch (error) {
      console.log(error.response?.data?.msg);
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProductAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllProductsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getAllProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getProductByIdAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductByIdAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createProductReviewAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProductReviewAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(createProductReviewAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
