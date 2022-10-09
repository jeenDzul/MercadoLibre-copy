import ProductEntityProps from "./product.entity.model";

interface ProductDetailEntityProps extends ProductEntityProps {
    condition?: string;
    soldQuantity?: number;
    description?: string;
}

export default ProductDetailEntityProps;