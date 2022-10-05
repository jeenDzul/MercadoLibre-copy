import { createSlice } from "@reduxjs/toolkit";
import { ProductsEntity } from "../../adapters";



const ProductsEmptyState: ProductsEntity = {
    products:[],
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

export const {createListProduct, resetListProduct} = productsSlice.actions;

export default productsSlice.reducer;

