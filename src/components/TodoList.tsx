import { Stack, Separator } from '@chakra-ui/react';
import TodoItem from './ToDoItem';
import { useMemo} from 'react';
import { ITodoList } from '../types';



const TodoList = ({ todos, filter, setTodos }: ITodoList) => {

  const filterTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
  const filteredTodos = useMemo(() => filterTodos(), [todos, filter]);


  return (
    <Stack role='list' width='100%' minH="200px">
      {filteredTodos.map((todo) => {
        return (
          <>
            <TodoItem setTodos={setTodos} key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} />
            <Separator />
          </>
        )
      })}
    </Stack>
  );
};

export default TodoList;