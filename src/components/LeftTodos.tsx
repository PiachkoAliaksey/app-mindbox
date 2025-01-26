import { Text,Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { ILeftTodos } from '../types';

const LeftTodos = ({todos}:ILeftTodos) => {

  const countLeftTodos = useMemo(()=>todos.filter((item) => !item.completed).length,[todos]);
  const activeTodos = useMemo(()=>todos.filter((item) => item.completed).length,[todos]) ;

  return <Text position={'relative'}>{countLeftTodos} items left <Box position={'absolute'} role='cell' opacity={0} >{activeTodos}</Box> </Text>;
};

export default LeftTodos;