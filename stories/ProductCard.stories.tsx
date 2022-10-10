import React from 'react';
import ProductCard from '../components/UI/molecules/ProductCard';
import productEntity from '../mock/product-entity';

export default {
    title: 'Components/Molecules/ProductCard',
    component: ProductCard,
    argTypes: { onClick: { action: 'clicked' } },
};

export const List = (args) => (
    <div >
        <ProductCard {...args} product={productEntity.item} />
    </div>
);





