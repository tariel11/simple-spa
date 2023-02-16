import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
  likedList: []
})

const likedListSlices = createSlice({
  name: 'likedList',
  initialState,
  reducers: {
    addToLiked: (state, action) => {
       state.likedList.push(action.payload)
    },
    removeToLiked:  (state, action) => {
      const updateProducts = state.likedList.filter(item => item.title !== action.payload.title)
      state.likedList = updateProducts
    },
  }
})

export const { addToLiked, removeToLiked } = likedListSlices.actions;

export const likedListReducer =  likedListSlices.reducer