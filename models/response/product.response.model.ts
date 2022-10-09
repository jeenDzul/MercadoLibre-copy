interface ProductIProps {
    id: string;
    title?: string;
    picture?: string;
    city_name?: string;
    condition?: string;
    price?: PriceIProps;
    free_shipping?: boolean;
}

interface PriceIProps {
    amount?: number;
    decimal?: number;
    currency?: string;
}

export default ProductIProps;