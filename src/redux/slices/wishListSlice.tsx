import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, WishlistState } from "../../types/index";


const initialState: WishlistState = {
  products: JSON.parse(localStorage.getItem("wishlist") || "[]"),
   
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.products.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.products.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.products));
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.products));
    },

  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;


