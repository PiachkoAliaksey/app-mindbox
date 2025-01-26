import { Button } from '@chakra-ui/react';
import { Todo } from '../types';
import { IClearCompleted } from '../types';

const ClearCompleted = ({setTodos}:IClearCompleted) => {

    const handlerClearCompleted = () => {
        setTodos(prev=>[...prev.filter((item: Todo) => !item.completed)])
    }

    return (
        <Button
            variant='plain'
            color='#696969'
            size={'sm'}
            fontWeight={'400'}
            onClick={() => handlerClearCompleted()} >ClearCompleted</Button>
    )
}

export default ClearCompleted