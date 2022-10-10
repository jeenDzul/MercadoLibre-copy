import { render } from '@testing-library/react';
import React from 'react';
import ProductInformation from '.';
import product from "../../../../mock/product";
import createProductAdapter from '../../../../adapters/fetch.product.detail.adapter';
import { AxiosResponse } from 'axios';

describe('Product view information', () => {
    it('should render a view product detail', () => {
        const { getByTestId } = render(<ProductInformation />);
        const card = getByTestId('product-detail');
        expect(card).toBeDefined();
    });

    it('should render a product detail view', () => {
        const data = createProductAdapter({ data: product } as AxiosResponse);
        const { getByTestId } = render(<ProductInformation {...data} />);
        const card = getByTestId('product-detail');
        expect(card).toBeInTheDocument();
    });

    it('should render product view  with title', () => {
        const data = createProductAdapter({ data: product } as AxiosResponse);
        const { getByText } = render(<ProductInformation {...data} />);
        getByText(product.item.title);
    });

    it('should render a product view with product image', () => {
        const data = createProductAdapter({ data: product } as AxiosResponse);
        const controller = render(<ProductInformation {...data} />);
        const img = controller.container.querySelector('img');
        expect(img).toHaveAttribute('src', data.product.picture);
    })
});


