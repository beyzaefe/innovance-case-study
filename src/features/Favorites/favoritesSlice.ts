import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../utils/types";

export interface favoritesState {
  favorites: Products[];
}

const initialState: favoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteProduct: (state, action: PayloadAction<Products>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavoriteProduct: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item: Products) => item.id !== action.payload
      );
    },
  },
});

export const { addFavoriteProduct, removeFavoriteProduct } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
