import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  category: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsCategory: (state) => {
      // Use Map for better performance with large datasets
      const categoryMap = new Map();

      // Single pass through products
      state.products.forEach((product) => {
        if (!categoryMap.has(product.category)) {
          categoryMap.set(product.category, []);
        }
        categoryMap.get(product.category).push(product);
      });

      // Convert Map to desired array format
      state.category = Array.from(categoryMap, ([name, products]) => ({
        name,
        products,
      }));
    },
  },
});

export const { setProductsCategory, setProducts } = productSlice.actions;
