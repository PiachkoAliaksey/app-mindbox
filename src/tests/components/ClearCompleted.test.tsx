import { render, screen, act, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";
import ClearCompleted from '../../components/ClearCompleted';
import App from '../../App';


describe('default render ClearCompleted component', () => {

    it('renders the button correctly', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <ClearCompleted setTodos={() => { }} />
            </ChakraProvider>
        );

        const button = screen.getByRole('button', { name: /ClearCompleted/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle('color: #696969');
    });

    it('should remove all active', () => {
        render(
            <ChakraProvider value={defaultSystem}>
               <App/>
            </ChakraProvider>
        );

        const button = screen.getByRole('button', { name: /ClearCompleted/i });
        const boxCounter = screen.getByRole('cell');

        act(() => {
            fireEvent.click(button);
        });

        expect(boxCounter).toHaveTextContent('0');
    });
});