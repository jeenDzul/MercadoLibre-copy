interface ProductIProps {
    id: string;
    title?: string;
    thumbnail?: string;
    city_name?: string;
    price?: PriceIProps;
    free_shipping?: boolean;
}

interface PriceIProps {
    amount?: number;
    decimal?: number;
    currency?: string;
}

export default ProductIProps;