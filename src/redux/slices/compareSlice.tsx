import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompareState, Product } from "../../types";



const initialState: CompareState = {
    products: JSON.parse(localStorage.getItem("compare") || "[]"),
  };
  
  const compareSlice = createSlice({
    name: "compare",
    initialState,
    reducers: {
        addToCompare: (state, action: PayloadAction<Product>) => {
            const exists = state.products.find((item) => item.id === action.payload.id);
            if (!exists) {
              if (state.products.length === 2) {
                
                state.products.shift();
              }
              state.products.push(action.payload);
              localStorage.setItem("compare", JSON.stringify(state.products));
            }
          },
      removeFromCompare: (state, action: PayloadAction<number>) => {
        state.products = state.products.filter((item) => item.id !== action.payload);
        localStorage.setItem("compare", JSON.stringify(state.products));
      },
    },
  });
  
  export const { addToCompare, removeFromCompare } = compareSlice.actions;
  export default compareSlice.reducer;