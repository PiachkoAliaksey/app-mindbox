import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useTodos } from '../../store/store';
import LeftTodos from '../../components/LeftTodos';
import { TodosState } from '../../types';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";

vi.mock('../../store/store', () => ({
    useTodos: vi.fn<() => TodosState>(() => ({
        todos: [],
        error: null,
        addTodo: vi.fn(),
        clearCompleted: vi.fn(),
        toggleTodo: vi.fn(),
    })),
}));

describe('LeftTodos Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('displays the correct count of left todos', () => {
    
        vi.mocked(useTodos).mockReturnValue(1);

        render(
            <ChakraProvider value={defaultSystem}>
                <LeftTodos />
            </ChakraProvider>
        );

        const textElement = screen.getByText(/items left/i);
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent('1 items left');
    });

    it('displays zero when there are no remaining todos', () => {
        vi.mocked(useTodos).mockReturnValue(0);

        render(<ChakraProvider value={defaultSystem}>
            <LeftTodos />
        </ChakraProvider>);

        const textElement = screen.getByText(/items left/i);
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent('0 items left');
    });

    it('displays the correct count with multiple remaining todos', () => {
        vi.mocked(useTodos).mockReturnValue(3);

        render(<ChakraProvider value={defaultSystem}>
            <LeftTodos />
        </ChakraProvider>);

        const textElement = screen.getByText(/items left/i);
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent('3 items left');
    });
});

