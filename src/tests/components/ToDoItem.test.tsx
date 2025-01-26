import { render, screen, fireEvent, act } from '@testing-library/react';
import TodoItem from '../../components/ToDoItem';

import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";


describe('TodoItem component', () => {

    it('default renders with correct title and checkbox', () => {
        render(
            <ChakraProvider value={defaultSystem} >
                <TodoItem setTodos={()=>{}} id={`${1}`} title="Sample Todo" completed={false} />
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
                <TodoItem setTodos={()=>{}} id={`${1}`} title="Sample Todo" completed={true} />
            </ChakraProvider>
        );

        const checkbox = screen.getByRole('checkbox');
        const todoText = screen.getByText(/Sample Todo/i);


        expect(todoText).toHaveStyle('text-decoration:line-through');
        expect(todoText).toHaveStyle('color: #C0C0C0');

        expect(checkbox).toBeChecked();
    });
});