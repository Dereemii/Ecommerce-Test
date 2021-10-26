import { configureStore } from "@reduxjs/toolkit";
//reducer
import products from './slices/products'

export const store = configureStore({
    reducer: {
        products
    }
})