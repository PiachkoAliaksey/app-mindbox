import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";
import Filter from '../../components/FIlter';


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
                <Filter filter='all' setFilter={() => {}} />
            </ChakraProvider>
        );

        
        fireEvent.click(screen.getByText('All'));
        

        expect(screen.getByText('All')).toHaveStyle('border-width: 1px')
        expect(screen.getByText('All')).toHaveStyle('border-color: #e4e4e7')
    });
});