import ListElements from '../components/UI/molecules/ListElements';
import React from 'react';
import Main from '../components/UI/organisms/Main';
import products from '../mock/products';
import Breadcrumbs from '../components/UI/molecules/Breadcrumbs';

import product from '../mock/product';


export default {
    title: 'Components/Organisms/MainView',
    component: Main,
    argTypes: { onClick: { action: 'clicked' } },
};

export const View = (args) => (
    <div >
        <Main searchValue="Iphone">
            <div>
                <Breadcrumbs categories={[...product.categories]} />
                <ListElements products={products.items} {...args} />
            </div>
        </Main>
    </div>
);





