import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";
import Filter from '../../components/FIlter';
import App from '../../App';


describe('Filter Component', () => {


    it('default renders buttons filter', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <Filter filter='' setFilter={() => { }} />
            </ChakraProvider>
        );
        const buttonAll = screen.getByRole('button', { name: /All/i });
        const buttonActive = screen.getByRole('button', { name: /Active/i });
        const buttonCompleted = screen.getByRole('button', { name: /Completed/i });
        expect(buttonAll).toBeInTheDocument();
        expect(buttonActive).toBeInTheDocument();
        expect(buttonCompleted).toBeInTheDocument();
    });

    it('calls setFilter with "all" on All button click', () => {


        render(
            <ChakraProvider value={defaultSystem}>
                <Filter filter='all' setFilter={() => { }} />
            </ChakraProvider>
        );

        expect(screen.getByText('All')).toHaveStyle('border-width: 2px');
    });

    it('calls setFilter with "completed" on Completed button click', () => {


        render(
            <ChakraProvider value={defaultSystem}>
                <Filter filter='completed' setFilter={() => { }} />
            </ChakraProvider>
        );

        expect(screen.getByText('Completed')).toHaveStyle('border-width: 2px');
    });

    it('calls setFilter with "uncompleted" on Active button click', () => {


        render(
            <ChakraProvider value={defaultSystem}>
                <Filter filter='completed' setFilter={() => { }} />
            </ChakraProvider>
        );

        expect(screen.getByText('Active')).toHaveStyle('border-width: 2px');

    });

    it('should transfer uncompleted item to area completed items', () => {


        render(
            <ChakraProvider value={defaultSystem}>
                <App />
            </ChakraProvider>
        );

        const todoText = screen.getByText(/Learn React/i);
        const checkbox = screen.getByTestId('2');
        const completedButton = screen.getByText('Completed');


        act(() => {
            fireEvent.click(checkbox);
            fireEvent.click(completedButton);
        });

        expect(todoText).toBeInTheDocument();
    });
});