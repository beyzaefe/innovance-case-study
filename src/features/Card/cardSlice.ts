import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProducts } from "../../utils/types";

export interface cardState {
  card: CartProducts[];
}

const initialState: cardState = {
  card: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<any>) => {
      console.log("setCard", action.payload);
      state.card = [...state.card, action.payload];
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.card = state.card.filter(
        (item: CartProducts) => item.id !== action.payload
      );
    },
    changeProductCount: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      state.card = state.card.map((item: CartProducts) =>
        item.id === action.payload.id
          ? { ...item, count: action.payload.count }
          : item
      );
    },
  },
});

export const { setCard, removeCard, changeProductCount } = cardSlice.actions;

export default cardSlice.reducer;
