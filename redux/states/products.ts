import { createSlice } from "@reduxjs/toolkit";
import { ProductsInterface } from "../../adapters";

const ProductsEmptyState: ProductsInterface = {
    products: [],
    categories: []
};

export const productsSlice = createSlice({
    name: "products",
    initialState: ProductsEmptyState,
    reducers: {
        createListProduct: (state, action) => {
            return action.payload;
        },
        resetListProduct: () => ProductsEmptyState
    }
});

export const { createListProduct, resetListProduct } = productsSlice.actions;

export default productsSlice.reducer;

