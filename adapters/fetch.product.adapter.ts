import { AxiosResponse } from "axios";
import ProductIProps from "../models/response/product.response.model";
import ItemsIProps from "../models/response/items.response.model";

export interface ProductsInterface {
    products: ProductIProps[],
    categories: String[]
}

const createProductsAdapter = (itemsResponse: AxiosResponse<ItemsIProps>): ProductsInterface => {

    const { items = [], categories = [] } = itemsResponse.data;

    const products: ProductIProps[] = items.map((item) => ({
        'id': item.id,
        'title': item.title,
        'image': item.thumbnail,
        'cityName': item.city_name,
        'amount': item.price.amount,
        'decimal': item.price.decimal,
        'currency': item.price.currency,
        'freeShipping': item.free_shipping,
    }));

    return {
        products: products,
        categories: categories
    }
};


export default createProductsAdapter;