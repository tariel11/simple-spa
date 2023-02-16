import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (category) => {
  const {data} = await axios.get(`https://mern-stroystore-server-teriel11.onrender.com/api/products/category`, {params: {category}});
  return data
})

const initialState = {
  products: {
    items: localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [],
    status: 'loading'
  }
}

const productsSlices = createSlice({
  name: 'products',
  initialState,
  reducers: {
      removeToProduct:  (state, action) => {
        const updateItems = state.products.items.filter(item => item.title !== action.payload.title)
        state.products.items = updateItems
        localStorage.setItem('items', JSON.stringify(state.products.items));
      },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products.items = [];
      state.products.status = 'loading'
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = 'loaded'
    },
    [fetchProducts.rejected]: (state) => {
      state.products.items = [];
      state.products.status = 'error'
    },
  }
})

export const { removeToProduct } = productsSlices.actions;

export const productsReducer = productsSlices.reducer