import { render } from '@testing-library/react';
import React from 'react';
import ListElements from '.';
import products from "../../../../mock/products";



describe('ListElements component', () => {
    it('should render a list of products', () => {
        const component = render(<ListElements products={products.items} />);
        const items = component.container.querySelector('div');
        expect(items.childNodes.length).toBe(products.items.length)
    });

});


