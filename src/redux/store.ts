import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cardSlice from "../features/Card/cardSlice";
import dashboardSlice from "../features/Dashboard/dashboardSlice";
import favoritesSlice from "../features/Favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    card: cardSlice,
    dashboard: dashboardSlice,
    favorites: favoritesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
