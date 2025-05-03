import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlicer'
import wishlistReducer from "./slices/wishListSlice"; 
import compareReducer from "./slices/compareSlice";

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
        user:userReducer,
        wishlist: wishlistReducer,
        compare: compareReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;