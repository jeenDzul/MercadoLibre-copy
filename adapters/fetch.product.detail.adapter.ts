import { AxiosResponse } from "axios";
import ProductDetailEntityProps from "models/entity/product.detail.entity.model";
import DataIProps from "models/response/item.response.model";

export interface ProductDetailInterface {
    product?: ProductDetailEntityProps,
    categories?: string[]
}

const createProductAdapter = (itemResponse: AxiosResponse<DataIProps>): ProductDetailInterface => {
    const { item, categories = [] } = itemResponse.data;


    const product: ProductDetailEntityProps = {
        cityName: item.city_name,
        freeShipping: item.free_shipping,
        id: item.id,
        picture: item.picture,
        priceAmount: item.price.amount,
        priceCurrency: item.price.currency,
        priceDecimals: item.price.decimal,
        title: item.title,
        condition: item.condition,
        soldQuantity: item.sold_quantity,
        description: item.description,
    };

    return {
        product: product,
        categories: categories
    }
};


export default createProductAdapter;