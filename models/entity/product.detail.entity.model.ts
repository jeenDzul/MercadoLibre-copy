import ProductIProps from "./product.entity.model";

interface ProductDetailIProps extends ProductIProps {
    condition?: string;
    soldQuantity?: number;
    description?: string;
}

export default ProductDetailIProps;