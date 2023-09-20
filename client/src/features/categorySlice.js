import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../utils/customFetch";

const initialState = {
  isLoading: false,
  categories: [],
  error: null,
};

export const getAllCategoriesAsync = createAsyncThunk(
  "/category/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await customFetch.get("/category");

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
