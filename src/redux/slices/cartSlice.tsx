import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  CartState, CartProduct } from "../../types";


const saveCartToLocalStorage = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const loadCartFromLocalStorage = (): CartState => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart
      ? JSON.parse(storedCart)
      : { products: [], totalQuantity: 0, totalPrice: 0 };
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
    return { products: [], totalQuantity: 0, totalPrice: 0 };
  }
};


const initialState: CartState = loadCartFromLocalStorage();


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProduct>) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
      saveCartToLocalStorage(state);
    },

    removeItem(state, action: PayloadAction<string | number>) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        state.totalPrice -= item.totalPrice;
        state.totalQuantity -= item.quantity;
        state.products = state.products.filter((item) => item.id !== id);
        saveCartToLocalStorage(state);
      }
    },

    increaseQuantity(state, action: PayloadAction<string | number>) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalQuantity++;
        state.totalPrice += item.price;
        saveCartToLocalStorage(state);
      }
    },

    decreaseQuantity(state, action: PayloadAction<string | number>) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.totalQuantity--;
        state.totalPrice -= item.price;
        saveCartToLocalStorage(state);
      }
    },
  },
});

export const {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
