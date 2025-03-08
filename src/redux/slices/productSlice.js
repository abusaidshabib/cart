import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    category: {}
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProductsCategory: (state, action) => {
            
        }
    }
})