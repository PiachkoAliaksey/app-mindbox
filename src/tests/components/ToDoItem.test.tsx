import { render, screen, fireEvent, act } from '@testing-library/react';
import TodoItem from '../../components/ToDoItem';

import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";
import App from '../../App';


describe('TodoItem component', () => {

    it('default renders with correct title and checkbox', () => {
        render(
            <ChakraProvider value={defaultSystem} >
                <TodoItem setTodos={() => { }} id={`${1}`} title="Sample Todo" completed={false} />
            </ChakraProvider>
        );

        const todoText = screen.getByText(/Sample Todo/i);
        const checkbox = screen.getByTestId('1');

        expect(todoText).toBeInTheDocument();
        expect(todoText).not.toHaveStyle('text-decoration:none');
        expect(todoText).toHaveStyle('color: #696969');
        expect(checkbox).not.toBeChecked();
    });

    it('should to be checked when checkbox clicked', () => {

        render(
            <ChakraProvider value={defaultSystem} >
                <TodoItem setTodos={() => { }} id={`${1}`} title="Sample Todo" completed={true} />
            </ChakraProvider>
        );

        const todoText = screen.getByText(/Sample Todo/i);


        expect(todoText).toHaveStyle('text-decoration:line-through');
        expect(todoText).toHaveStyle('color: #C0C0C0');
    });

    it('should add new todo on list', () => {

        render(
            <ChakraProvider value={defaultSystem} >
                <App />
            </ChakraProvider>
        );

        const listTodos = screen.getAllByRole('listitem');
        expect(listTodos.length).toBe(2)
        const inputElement: HTMLInputElement = screen.getByRole('searchbox');

        act(() => {
            fireEvent.change(inputElement, { target: { value: 'New Task' } });
            fireEvent.keyDown(inputElement, { key: 'Enter' });
        });
        const newTodo = screen.getByText(/New Task/i);
        expect(newTodo).toBeInTheDocument()
        
    });
});