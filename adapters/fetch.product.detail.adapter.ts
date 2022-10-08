import { AxiosResponse } from "axios";
import ProductDetailIProps from "models/entity/product.detail.entity.model";
import DataIProps from "models/response/item.response.model";
import ItemIProps from "models/response/item.response.model";

export interface ProductDetailInterface {
    product?: ProductDetailIProps,
    categories?: string[]
}

const createProductAdapter = (itemResponse: AxiosResponse<DataIProps>): ProductDetailInterface => {

    const { item, categories = [] } = itemResponse.data;

    const product: ProductDetailIProps = {
        id: item.id,
        title: item.title,
        image: item.thumbnail,
        cityName: item.city_name,
        amount: item.price.amount,
        decimal: item.price.decimal,
        currency: item.price.currency,
        freeShipping: item.free_shipping,
        description: item.description,
        soldQuantity: item.sold_quantity

    };

    return {
        product: product,
        categories: categories
    }
};


export default createProductAdapter;