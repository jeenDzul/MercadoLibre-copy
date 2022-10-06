import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import Main from './';

describe('Main page to search', () => {

    const useRouter = jest.spyOn(require('next/router'), 'useRouter');
    const mockPush = jest.fn();
    useRouter.mockImplementation(() => ({
        push: mockPush,
    }));

    it('should go to list products result', () => {
        const newText = 'Celular varato'
        const { getByTestId } = render(<Main searchValue={'Celular'} />);

        const inputText = getByTestId('input-search');
        fireEvent.change(inputText, { target: { value: newText } });
        const buttonSearch = getByTestId('handle-search');
        fireEvent.click(buttonSearch);
        expect(mockPush).toHaveBeenCalledTimes(1);
        expect(mockPush).toHaveBeenCalledWith(`/items?search=${newText}`);
    })
})