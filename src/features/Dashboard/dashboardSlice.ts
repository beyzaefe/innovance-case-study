import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../utils/types";

export const getCategories = createAsyncThunk(
  "dashboard/getCategories",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  }
);
export const getProducts = createAsyncThunk(
  "dashboard/getProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);
export const getCategoryProducts = createAsyncThunk(
  "dashboard/getCategoryProducts",
  async (categoryName: string) => {
    if (categoryName === "all") {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } else {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      return response.data;
    }
  }
);

export interface dashboardState {
  categories: string[];
  selectedCategory: string;
  products: Products[];
  productsOfTheCategory: Products[] | null;
}

const initialState: dashboardState = {
  categories: [],
  selectedCategory: "",
  products: [],
  productsOfTheCategory: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setSelectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.categories = action.payload.concat("all");
      }
    );
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.productsOfTheCategory = action.payload;
    });
  },
});

export const { setSelectCategory } = dashboardSlice.actions;

export default dashboardSlice.reducer;
