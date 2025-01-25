import { Button } from '@chakra-ui/react';
import { useTodos } from '../store/store';
import { TodosState } from '../types';


const ClearCompleted = () => {
    const clearCompleted = useTodos((state: TodosState) => state.clearCompleted);

    return (
        <Button
            variant='plain'
            color='#696969'
            size={'sm'}
            fontWeight={'400'}
            onClick={() => clearCompleted()} >ClearCompleted</Button>
    )
}

export default ClearCompleted