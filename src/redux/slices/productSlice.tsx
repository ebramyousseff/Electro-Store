import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState, Product } from "../../types";

const initialState: ProductState = {
  product: [],
  searchTerm: "",
  selectedCategory: "",
  filterData: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.product = action.payload;
      state.filterData = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.filterData = state.product.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    }, setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;

      state.filterData = state.product.filter((product) =>
        product.category === action.payload &&
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
