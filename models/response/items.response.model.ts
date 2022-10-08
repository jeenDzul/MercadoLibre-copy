import ProductIProps from "./product.response.model";

interface ItemsIProps {
    items: ProductIProps[],
    categories: string[],
}

export default ItemsIProps;