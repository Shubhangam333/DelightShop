import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import customFetch from "../utils/customFetch";

const initialState = {
  Adminproducts: null,
  AdminUsers: null,
  AdminCategory: null,
  AdminOrders: null,
  isLoading: false,
  AdminUser: null,
  error: null,
  message: "",
};

export const getAllAdminProductsAsync = createAsyncThunk(
  "/admin/getAllAdminProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await customFetch.get("/products");
      return response.data.products;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);
export const getAllAdminUsersAsync = createAsyncThunk(
  "/admin/getAllAdminUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await customFetch.get("/admin/users");
      return response.data.users;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);

export const getAllAdminOrdersAsync = createAsyncThunk(
  "/admin/getAllAdminOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await customFetch.get("/admin/orders");
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);

export const deleteAdminProductsAsync = createAsyncThunk(
  "/admin/deleteAdminProductsAsync",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await customFetch.delete(`/product/${productId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);
export const getAdminUserByIdAsync = createAsyncThunk(
  "/admin/getAdminUserByIdAsync",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await customFetch.get(`/user/${userId}`);
      return response.data.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);
export const deleteAdminUsersAsync = createAsyncThunk(
  "/admin/deleteAdminUsersAsync",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await customFetch.delete(`/delete-user/${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdminProductsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAdminProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Adminproducts = action.payload;
      })
      .addCase(getAllAdminProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteAdminProductsAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteAdminProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteAdminProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllAdminUsersAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllAdminUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.AdminUsers = action.payload;
      })
      .addCase(getAllAdminUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteAdminUsersAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteAdminUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteAdminUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAdminUserByIdAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAdminUserByIdAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.AdminUser = action.payload;
      })
      .addCase(getAdminUserByIdAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllAdminOrdersAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllAdminOrdersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.AdminOrders = action.payload;
      })
      .addCase(getAllAdminOrdersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
