import {
    Input,
} from '@chakra-ui/react';

import { useState } from 'react';
import { Todo } from '../types';
import { nanoid } from 'nanoid';
import { INewToDo } from '../types';


const NewTodo = ({ setTodos }: INewToDo) => {
    const [value, setValue] = useState('');

    const addToDo = (title: string) => {
        setTodos(prev => {
            const newTodo: Todo = { id: nanoid(), title, completed: false }

            return [...prev, newTodo]
        })
    }

    const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>, text: string) => {
        const trimmedValue = text.trim();
        if (e.key === 'Enter' && trimmedValue) {
            addToDo(trimmedValue)
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