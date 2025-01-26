import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";
import ClearCompleted from '../../components/ClearCompleted';


describe('ClearCompleted component', () => {

    it('renders the button correctly', () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <ClearCompleted setTodos={()=>{}} />
            </ChakraProvider>
        );

        const button = screen.getByRole('button', { name: /ClearCompleted/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle('color: #696969');
        expect(button).toHaveTextContent('ClearCompleted');
    });
});