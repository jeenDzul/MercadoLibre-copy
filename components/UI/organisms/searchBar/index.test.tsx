import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './';

describe('SearchBar Component', () => {

    it('should show defaultValue text on input', () => {
        const mockProps = {
            value: 'Celulares',
        }
        const { getByTestId } = render(<SearchBar value={mockProps.value} />);
        const textInput = getByTestId('input-search');
        expect((textInput as HTMLInputElement).value).toBe(mockProps.value);

    });


    it('should submit data input when press enter', () => {
        const mockClick = jest.fn()
        const mockProps = {
            onSubmit: mockClick,
            value: 'Ropita de bebé',
        }
        const { getByTestId } = render(<SearchBar value={mockProps.value} onSubmit={mockProps.onSubmit} />);
        const textInput = getByTestId('input-search');
        fireEvent.keyDown(textInput, { key: "Enter", code: 13, charCode: 13 });
        expect(mockClick).toHaveBeenCalledTimes(1);
    });



    it('should send word when select icon search', () => {
        const mockClick = jest.fn()
        const mockProps = {
            value: 'Ropa',
            onSubmit: mockClick,

        }
        const component = render(<SearchBar value={mockProps.value} onSubmit={mockProps.onSubmit} />);
        const handleButton = component.getByTestId('handle-search');
        fireEvent.click(handleButton);
        expect(mockClick).toHaveBeenCalledTimes(1);
    });


})