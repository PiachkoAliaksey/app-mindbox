
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodosState {
    todos: Todo[];
    error: string | null;
    addTodo: (title: string) => void;
    toggleTodo: (todoId: string) => void;
    clearCompleted:()=>void
}

export interface TodosStateMock{
    todos: Todo[];
    toggleTodo: (todoId: string) => void;
}

export interface FilterState {
    filter: string;
    setFilter: (value: string) => void;
}