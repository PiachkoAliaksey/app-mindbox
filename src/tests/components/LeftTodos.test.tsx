import { render, screen,act,fireEvent } from '@testing-library/react';
import LeftTodos from '../../components/LeftTodos';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";
import App from '../../App';


describe('LeftTodos Component', () => {


    it('displays the correct count of left todos', () => {
        const todos = [{
            id: '1', title: 'Learn JS', completed: true
        },
        {
            id: '2', title: 'Learn React', completed: false
        }]


        render(
            <ChakraProvider value={defaultSystem}>
                <LeftTodos todos={todos} />
            </ChakraProvider>
        );

        const textElement = screen.getByText(/items left/i);
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent('1 items left');
    });

    it('should increase item left', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <App />
            </ChakraProvider>
        )
        const inputElement: HTMLInputElement = screen.getByRole('searchbox');
        const textElement = screen.getByText(/items left/i);

        act(() => {
            fireEvent.change(inputElement, { target: { value: 'New Task' } });
            fireEvent.keyDown(inputElement, { key: 'Enter' });
        });


        expect(textElement).toHaveTextContent('2 items left');
    })
});

