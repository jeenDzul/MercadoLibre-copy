
import { configureStore } from "@reduxjs/toolkit";
import { ProductsInterface } from "adapters";
import { productsSlice } from "./states/products";

export interface AppStoreInterface {
    products: ProductsInterface;
}

export default configureStore<AppStoreInterface>({
    reducer: {
        products: productsSlice.reducer,
    }

});
