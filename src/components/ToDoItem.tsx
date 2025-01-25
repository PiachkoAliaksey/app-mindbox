import { HStack, Text } from '@chakra-ui/react';
import { Checkbox } from './ui/checkbox';
import { useTodos } from '../store/store';
import { useShallow } from 'zustand/react/shallow'
import { Todo } from '../types';


const TodoItem = ({ id, title, completed }: Todo) => {
    const toggleTodo = useTodos(useShallow((state) => state.toggleTodo));

    return (
        <HStack gap={4} padding={2}>
            <Checkbox size={'lg'} variant={'outline'} checked={completed} onChange={() => toggleTodo(id)} />
            <Text textDecor={completed ? 'line-through' : ''} color={completed ? '#C0C0C0' : '#696969'} >{title}</Text>
        </HStack>
    );
};

export default TodoItem;