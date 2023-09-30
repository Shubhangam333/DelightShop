import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    price: 0,
    rating: 0,
    discount: 0,
    category: 0,
    isCategorySelected: false,
    isPriceSelected: false,
  },
  reducers: {
    setPriceFilter: (state, action) => {
      state.price = Math.max(0, action.payload);
      state.isPriceSelected = true;
    },

    setRatingFilter: (state, action) => {
      state.rating = Math.max(0, action.payload);
    },

    setDiscountFilter: (state, action) => {
      state.discount = Math.max(0, action.payload);
    },

    setCategoryFilter: (state, action) => {
      state.category = action.payload;
      state.isCategorySelected = true;
    },
  },
});

export const {
  setPriceFilter,
  setRatingFilter,
  setDiscountFilter,
  setCategoryFilter,
  filterProducts,
} = filterSlice.actions;

export default filterSlice.reducer;
