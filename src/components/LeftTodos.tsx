import { Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { ILeftTodos } from '../types';

const LeftTodos = ({todos}:ILeftTodos) => {

  const countLeftTodos = useMemo(()=>todos.filter((item) => !item.completed).length,[todos]) ;

  return <Text>{countLeftTodos} items left </Text>;
};

export default LeftTodos;