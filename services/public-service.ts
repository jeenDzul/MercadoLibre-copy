import { loadAbort } from "utilities/load-abort-axios.utility";
import { AxiosResponse } from 'axios';
import products from "mock/products";
import { AxiosCall } from "models/axios-call.model";
import ItemsIProps from "models/response/items.response.model";
import product from "mock/product";
import axios from 'axios';


export const fetchProducts = (query?: string): AxiosCall<ItemsIProps> => {
    const controller = loadAbort();
    return { call: axios.get<ItemsIProps>(`/api/items?q=${query}`), controller: controller };
    //return { call: Promise.resolve({ data: products } as AxiosResponse,), controller: controller };
}


export const fetchProductDetail = (ProductId?: string): AxiosCall<ItemsIProps> => {
    const controller = loadAbort();
    return { call: Promise.resolve({ data: product } as AxiosResponse,), controller: controller };
}