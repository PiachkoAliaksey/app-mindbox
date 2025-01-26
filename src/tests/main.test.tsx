import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";



describe('App', () => {

    it('should render title with text todos', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <App />
            </ChakraProvider>
        )
        expect(screen.getByText(/todos/i)).toBeInTheDocument()
    })
})