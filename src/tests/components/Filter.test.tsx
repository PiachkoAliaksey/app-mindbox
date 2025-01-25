import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";
import Filter from '../../components/FIlter';
import { useFilter } from '../../store/store';
import { FilterState } from '../../types';


vi.mock('../../store/store', () => ({
    useFilter: vi.fn<() => FilterState>(() => ({
        filter: '',
        setFilter: vi.fn()
    }))
}));


describe('Filter Component', () => {
    const mockSetFilter = vi.fn();


    beforeEach(() => {
        vi.clearAllMocks();
    });


    it('default renders buttons filter', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <Filter />
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
        (vi.mocked(useFilter)).mockReturnValueOnce({
            filter: 'all',
            setFilter: mockSetFilter,
        });

        render(
            <ChakraProvider value={defaultSystem}>
                <Filter />
            </ChakraProvider>
        );

        act(() => {
            fireEvent.click(screen.getByText('All'));
        });

        expect(mockSetFilter).toHaveBeenCalledWith('all');
    });

    it('calls setFilter with "uncompleted" on Active button click', () => {
        (vi.mocked(useFilter)).mockReturnValueOnce({
            filter: 'uncompleted',
            setFilter: mockSetFilter,
        });

        render(
            <ChakraProvider value={defaultSystem}>
                <Filter />
            </ChakraProvider>
        );

        act(() => {
            fireEvent.click(screen.getByText('Active'));
        });
       
        expect(mockSetFilter).toHaveBeenCalledWith('uncompleted');
    });

    it('calls setFilter with "completed" on Completed button click', () => {
        (vi.mocked(useFilter)).mockReturnValueOnce({
            filter: 'completed',
            setFilter: mockSetFilter,
        });

        render(
            <ChakraProvider value={defaultSystem}>
                <Filter />
            </ChakraProvider>
        );

        act(() => {
            fireEvent.click(screen.getByText('Completed'));
        });
       
        expect(mockSetFilter).toHaveBeenCalledWith('completed');
    });
});