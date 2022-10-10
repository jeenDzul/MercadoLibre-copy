import { loadAbort } from "utilities/load-abort-axios.utility";
import { AxiosCall } from "models/axios-call.model";
import ItemsIProps from "models/response/items.response.model";
import axios from 'axios';
import ItemIProps from "models/response/item.response.model";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_WEB

export const fetchProducts = (query?: string): AxiosCall<ItemsIProps> => {
    const controller = loadAbort();
    return { call: axios.get<ItemsIProps>(`${baseUrl}/api/items?q=${query}`), controller: controller };
}
export const fetchProductDetail = (productId?: string): AxiosCall<ItemIProps> => {
    const controller = loadAbort();
    return { call: axios.get<ItemIProps>(`${baseUrl}/api/items/${productId}`), controller: controller };

}