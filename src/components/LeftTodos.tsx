import { Text } from '@chakra-ui/react';
import { useTodos } from '../store/store';
import { useShallow } from 'zustand/react/shallow';
import { TodosState } from '../types';

const LeftTodos = () => {
  const count = useTodos(useShallow((state: TodosState) => state.todos.filter((item) => !item.completed).length));

  return <Text>{count} items left </Text>;
};

export default LeftTodos;