import { it, expect, describe, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { NewTodo } from '../../components/NewTodo';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";



describe('NewTodo Input', () => {
    const mockAddTodo = vi.fn();


    it('should render input field empty', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <NewTodo addToDo={()=>{}} />
            </ChakraProvider>
        );

        const inputElement: HTMLInputElement = screen.getByRole('searchbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toBe('');
    });

    it('imput focus', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <NewTodo addToDo={()=>{}}/>
            </ChakraProvider>
        );

        const inputElement: HTMLInputElement = screen.getByRole('searchbox');
        expect(inputElement).toHaveFocus();
    });


    it('allows user to type in the input field', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <NewTodo addToDo={()=>{}} />
            </ChakraProvider>);
        const inputElement: HTMLInputElement = screen.getByRole('searchbox');

        act(() => {
            fireEvent.change(inputElement, { target: { value: 'New Task' } });
        });

        expect(inputElement.value).toBe('New Task');
    });


    it('does not add a todo if the input is empty', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <NewTodo addToDo={()=>{}} />
            </ChakraProvider>);

        const inputElement: HTMLInputElement = screen.getByRole('searchbox');


        act(() => {
            fireEvent.keyDown(inputElement, { key: 'Enter' });
        });
       
        expect(mockAddTodo).not.toHaveBeenCalled();
    });
})