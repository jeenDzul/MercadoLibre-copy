import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '.';


describe('Button', () => {
    it('must display a button with custom text', () => {
        render(<Button>comprar</Button>);
        expect(screen.queryByText("comprar")).toBeInTheDocument();
    });
});