import { AxiosResponse } from "axios";
import ProductIProps from "models/response/product.response.model";
import ItemsIProps from "models/response/items.response.model";
import ProductEntityProps from "models/entity/product.entity.model";

export interface ProductsInterface {
    products: ProductEntityProps[],
    categories: string[]
}

const createProductsAdapter = (itemsResponse: AxiosResponse<ItemsIProps>): ProductsInterface => {

    const { items = [], categories = [] } = itemsResponse.data;

    const products: ProductEntityProps[] = items.map((item) => ({
        cityName: item.city_name,
        condition: item.condition,
        freeShipping: item.free_shipping,
        id: item.id,
        picture: item.picture,
        priceAmount: item.price.amount,
        priceCurrency: item.price.currency,
        priceDecimals: item.price.decimal,
        title: item.title,
    }));

    return {
        products: products,
        categories: categories
    }
};


export default createProductsAdapter;