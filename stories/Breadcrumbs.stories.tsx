import React from 'react';
import Breadcrumbs from '../components/UI/molecules/Breadcrumbs';
import product from '../mock/product';


export default {
    title: 'Components/Molecules/Breadcrumbs',
    component: Breadcrumbs,

};

export const ThreeComponent = (args) => (
    <div>
        <Breadcrumbs categories={[...product.categories]} />
    </div>
);



