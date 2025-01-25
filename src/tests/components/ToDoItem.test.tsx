import { render, screen, fireEvent, act } from '@testing-library/react';
import TodoItem from '../../components/ToDoItem';

import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";


describe('TodoItem component', () => {

    it('default renders with correct title and checkbox', () => {
        render(
            <ChakraProvider value={defaultSystem} >
                <TodoItem id={`${1}`} title="Sample Todo" completed={false} />
            </ChakraProvider>
        );

        const todoText = screen.getByText(/Sample Todo/i);
        const checkbox = screen.getByRole('checkbox');

        expect(todoText).toBeInTheDocument();
        expect(todoText).not.toHaveStyle('text-decoration:none');
        expect(todoText).toHaveStyle('color: #696969');
        expect(checkbox).not.toBeChecked();
    });

    it('should to be checked when checkbox clicked', async () => {

        render(
            <ChakraProvider value={defaultSystem} >
                <TodoItem id={`${1}`} title="Sample Todo" completed={false} />
            </ChakraProvider>
        );

        const checkbox = screen.getByRole('checkbox');
        act(() => {
            fireEvent.click(checkbox);
        });

        expect(checkbox).toBeChecked();
    });
});