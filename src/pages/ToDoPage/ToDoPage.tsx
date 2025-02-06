import React, { useState } from 'react';
import { VStack, Flex, Text } from '@chakra-ui/react';
import Filter from '../../components/FIlter';
import { NewTodo } from '../../components/NewTodo';
import TodoList from '../../components/TodoList';
import LeftTodos from '../../components/LeftTodos';
import ClearCompleted from '../../components/ClearCompleted';
import { nanoid } from 'nanoid';
import { Todo } from '../../types';

const ToDoPage: React.FC = () => {
    const [filter, setFilter] = useState('all');
    const [todos, setTodos] = useState([{
        id: '1', title: 'Learn JS', completed: true
    }, {
        id: '2', title: 'Learn React', completed: false
    }]);

    const addToDo = (title: string) => {
        setTodos(prev => {
            const newTodo: Todo = { id: nanoid(), title, completed: false }

            return [...prev, newTodo]
        })
    }


    return (
        <VStack gap={8}>
            <Text fontSize='8xl'>todos</Text>
            <VStack borderRadius='4px' color='#696969' backgroundColor='#ffffff' gap={2} border='solid 1px #cccccc' shadow="#dddddd 0px 4px 6px, #ffffff 0px 6px 0px -2px, #cccccc 0px 6px 2px -2px, #dddddd 0px 6px 0px -2px, #ffffff 0 12px 0px -4px, #cccccc 0 12px 4px -4px, #dddddd 0 12px 0px -4px ">
                <NewTodo addToDo ={addToDo} />
                <TodoList filter={filter} todos={todos} setTodos={setTodos} />
                <Flex align={'center'} gap={'16'} padding={2}>
                    <LeftTodos todos={todos} />
                    <Filter filter={filter} setFilter={setFilter} />
                    <ClearCompleted setTodos={setTodos} />
                </Flex>
            </VStack>
        </VStack>

    )
}

export default ToDoPage;
