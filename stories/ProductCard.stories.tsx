import React from 'react';
import ProductCard from '../components/UI/molecules/ProductCard';
import products from '../mock/products';



export default {
    title: 'Components/Molecules/ProductCard',
    component: ProductCard,
    argTypes: { onClick: { action: 'clicked' } },
};

export const List = (args) => (
    <div >
        <ProductCard {...{ ...(products.items[0]), ...args }} />
    </div>
);





