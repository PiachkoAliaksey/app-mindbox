import { Button, Stack } from '@chakra-ui/react';
import { useFilter } from '../store/store';

const Filter = () => {
    const { filter, setFilter } = useFilter();

    return (
        <Stack gap={2} direction="row">
            <Button
                color='#696969'
                size={'sm'}
                fontWeight={'400'}
                variant={filter === 'all' ? 'outline' : 'plain'}

                onClick={() => setFilter('all')}
            >
                All
            </Button>
            <Button
                color='#696969'
                size={'sm'}
                fontWeight={'400'}
                variant={filter === 'uncompleted' ? 'outline' : 'plain'}

                onClick={() => setFilter('uncompleted')}

            >
                Active
            </Button>
            <Button
                color='#696969'
                size={'sm'}
                fontWeight={'400'}
                variant={filter === 'completed' ? 'outline' : 'plain'}

                onClick={() => setFilter('completed')}
            >
                Completed
            </Button>
        </Stack>
    );
};

export default  Filter ;