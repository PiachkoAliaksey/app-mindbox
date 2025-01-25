import { Stack, Separator } from '@chakra-ui/react';
import { useTodos, useFilter } from '../store/store';
import { useShallow } from 'zustand/react/shallow'
import TodoItem from './ToDoItem';


const TodoList = () => {
  const filter = useFilter(useShallow((state) => state.filter));
  const todos = useTodos(useShallow((state) => {
    switch (filter) {
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  }));


  return (
    <Stack width='100%' minH="200px">
      {todos.map((todo) => {
        return (
          <>
            <TodoItem key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} />
            <Separator />
          </>
        )
      })}
    </Stack>
  );
};

export { TodoList };