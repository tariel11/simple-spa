import { configureStore } from "@reduxjs/toolkit";
import { likedListReducer } from "./slices/likedList";
import { productsReducer } from "./slices/products";

const store = configureStore({
  reducer: {
    products: productsReducer,
    likedList: likedListReducer
  }
})

export default store