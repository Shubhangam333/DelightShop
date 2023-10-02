import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../utils/customFetch";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  isAuthenticated: localStorage.getItem("user") ? true : false,
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const registerUserAsync = createAsyncThunk(
  "/user/register",
  async (userData, { rejectWithValue }) => {
    try {
      // const config = { headers: { "Content-Type": "multipart/form-data" } };
      const response = await axios.post(`/api/v1/register`, userData);
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.msg);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "/user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await customFetch.post("/login", userData);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);
export const logoutUserAsync = createAsyncThunk(
  "/user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await customFetch.get("/logout");

      localStorage.setItem("user", null);
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);

export const loadUserAsync = createAsyncThunk(
  "/user/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await customFetch.get("/profile/me");

      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      localStorage.setItem("user", null);
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loadUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userInfo = action.payload.user;
      })
      .addCase(loadUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.userInfo = null;
      });
  },
});

export default authSlice.reducer;
