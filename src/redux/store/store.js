import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../slices/productSlice";

export const store = configureStore({
    reducer: {
        [productSlice.name]: productSlice.reducer,
    }
})

