import React from 'react';
import ListElements from '../components/UI/molecules/ListElements';
import products from '../mock/products';



export default {
    title: 'Components/Molecules/ListElements',
    component: ListElements,
    argTypes: { onClick: { action: 'clicked' } },
};

export const List = (args) => (
    <div >
        <ListElements products={products.items} {...args} />
    </div>
);





