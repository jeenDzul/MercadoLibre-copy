import ProductIProps from "./product.response.model";

export default interface ProductDetailIProps extends ProductIProps {
    condition?: string;
    sold_quantity?: number;
    description?: string;
}
