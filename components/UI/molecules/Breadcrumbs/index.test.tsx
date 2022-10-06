import { render } from '@testing-library/react';
import React from 'react';
import Breadcrumbs from '.';



describe('Breadcrumbs three component', () => {
    it('should render a list of 4 categories', () => {
        const categories = ["Celular", "Apple", "Iphone", "Iphone 14 pro max"];
        const component = render(<Breadcrumbs categories={categories} />);

        const ul = component.container.querySelector('ul');
        expect(ul.childNodes.length).toBe(categories.length)
    });


    it('soul render list of categories in a order', () => {
        const categories = ["Celular", "Apple", "Iphone", "Iphone 14 pro max"];
        const component = render(<Breadcrumbs categories={categories} />);

        const listItemTextContent = Array.from(component.container.querySelectorAll("li")).map((item) => item.textContent);
        expect(listItemTextContent).toEqual(categories);
    });
});


