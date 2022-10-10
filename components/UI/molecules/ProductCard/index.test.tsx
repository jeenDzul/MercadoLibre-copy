import { render } from '@testing-library/react';
import React from 'react';
import ProductCard from '.';
import product from "../../../../mock/product";
import createProductAdapter from '../../../../adapters/fetch.product.detail.adapter';
import { AxiosResponse } from 'axios';

describe('Product Card information', () => {
    it('should render a card component', () => {
        const { getByTestId } = render(<ProductCard />);
        const card = getByTestId('card');
        expect(card).toBeDefined();
    });

    it('should render a card component with information', () => {
        const data = createProductAdapter({ data: product } as AxiosResponse);
        const { getByTestId } = render(<ProductCard product={data.product} />);
        const card = getByTestId('card');
        expect(card).toBeInTheDocument();
    });

    it('should render card component with title information', () => {
        const data = createProductAdapter({ data: product } as AxiosResponse);
        const { getByText } = render(<ProductCard product={data.product} />);
        getByText(product.item.title);
    });

    it('should render card component with product image', () => {
        const data = createProductAdapter({ data: product } as AxiosResponse);
        const controller = render(<ProductCard product={data.product} />);
        const img = controller.container.querySelector('img');
        expect(img).toHaveAttribute('src', data.product.picture);
    })
});


