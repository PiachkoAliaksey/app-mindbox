import React from 'react'
import { VStack, Flex, Text } from '@chakra-ui/react';
import Filter from '../../components/FIlter';
import { NewTodo } from '../../components/NewTodo';
import { TodoList } from '../../components/TodoList';
import TotalTodos from '../../components/LeftTodos';
import ClearCompleted from '../../components/ClearCompleted';

const ToDoPage: React.FC = () => {
    return (
        <VStack gap={8}>
            <Text fontSize='8xl'>todos</Text>
            <VStack borderRadius='4px' color='#696969' backgroundColor='#ffffff' gap={2} border='solid 1px #cccccc' shadow="#dddddd 0px 4px 6px, #ffffff 0px 6px 0px -2px, #cccccc 0px 6px 2px -2px, #dddddd 0px 6px 0px -2px, #ffffff 0 12px 0px -4px, #cccccc 0 12px 4px -4px, #dddddd 0 12px 0px -4px ">
                <NewTodo />
                <TodoList />
                <Flex align={'center'} gap={'16'} padding={2}>
                    <TotalTodos />
                    <Filter />
                    <ClearCompleted />
                </Flex>
            </VStack>
        </VStack>

    )
}

export default ToDoPage;
