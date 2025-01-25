import {
    Input,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useTodos } from '../store/store';
import { TodosState } from '../types';

const NewTodo = () => {
    const [value, setValue] = useState('');

    const addTodo = useTodos((state: TodosState) => state.addTodo);

    const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>, text: string) => {
        const trimmedValue = text.trim();
        if (e.key === 'Enter' && trimmedValue) {
            addTodo(trimmedValue);
            setValue('');
        }
    };

    return (
        <Input
            role='searchbox'
            variant='flushed'
            height='60px'
            fontSize='2xl'
            padding='2'
            fontStyle='italic'
            placeholder="What needs to be done..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => handleAddTodo(e, value)}
            autoFocus
        />
    );
};

export { NewTodo };