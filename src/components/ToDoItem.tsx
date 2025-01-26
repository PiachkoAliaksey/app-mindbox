import { HStack, Text } from '@chakra-ui/react';
import { Checkbox } from './ui/checkbox';
import { Todo } from '../types';
import { ITodoItem } from '../types';


const TodoItem = ({ id, title, completed,setTodos }: ITodoItem) => {

const handlerToggleTodo = (todoId:string)=>{
    setTodos(prev=>prev.map((item: Todo) => todoId === item.id ? { ...item, completed: !item.completed } : item))
}

    return (
        <HStack gap={4} padding={2}>
            <Checkbox size={'lg'} variant={'outline'} checked={completed} onChange={() => handlerToggleTodo(id)} />
            <Text textDecor={completed ? 'line-through' : ''} color={completed ? '#C0C0C0' : '#696969'} >{title}</Text>
        </HStack>
    );
};

export default TodoItem;