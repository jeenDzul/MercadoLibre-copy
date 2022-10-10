import React from 'react';
import ListElements from '../components/UI/molecules/ListElements';
import productsEntity from '../mock/products-entity';

export default {
    title: 'Components/Molecules/ListElements',
    component: ListElements,
    argTypes: { onClick: { action: 'clicked' } },
};
export const List = (args) => (
    <div >
        <ListElements products={productsEntity.items} {...args} />
    </div>
);





