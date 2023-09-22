import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../utils/customFetch";

const initialState = {
  isLoading: false,
  categories: localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories"))
    : null,
  error: null,
};

export const getAllCategoriesAsync = createAsyncThunk(
  "/category/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await customFetch.get("/category");
      localStorage.setItem(
        "categories",
        JSON.stringify(response.data.categories)
      );
      return response.data.categories;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.msg || error);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoriesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategoriesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
