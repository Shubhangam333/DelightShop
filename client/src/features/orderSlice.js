import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: "",
  order: null,
  message: "",
  orderItems: localStorage.getItem("orderItems")
    ? JSON.parse(localStorage.getItem("orderItems"))
    : [],
  UserOrders: localStorage.getItem("userorders")
    ? JSON.parse(localStorage.getItem("userorders"))
    : [],
};

export const createOrderAsync = createAsyncThunk(
  "/order/createOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/order/new", orderData);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);
export const getOrderDetailsAsync = createAsyncThunk(
  "/order/getOrderDetail",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/orders/me");
      localStorage.setItem("userorders", JSON.stringify(response.data.orders));
      return response.data.orders;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.msg);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrderItems: (state, action) => {
      let res = [];
      for (let i = 0; i < action.payload.length; i++) {
        console.log(i);
        var element = {};
        element.name = action.payload[i].name;
        element.price = action.payload[i].price;
        element.quantity = action.payload[i].quantity;
        element.product = action.payload[i]._id;

        res.push(element);
      }

      state.orderItems = res;

      localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(createOrderAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrderDetailsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetailsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.UserOrders = action.payload;
      })
      .addCase(getOrderDetailsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { createOrderItems } = orderSlice.actions;

export default orderSlice.reducer;
