
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

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
    clearCompleted: () => void
}

export interface TodosStateMock {
    todos: Todo[];
    toggleTodo: (todoId: string) => void;
}

export interface FilterState {
    filter: string;
    setFilter: (value: string) => void;
}

export interface IClearCompleted {
    setTodos: React.Dispatch<React.SetStateAction<{
        id: string;
        title: string;
        completed: boolean;
    }[]>>
}

export interface IFilter {
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    filter: string
}

export interface ILeftTodos {
    todos: Todo[]
}

export interface INewToDo {
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

export interface ITodoItem {
    id: string;
    title: string;
    completed: boolean;
    setTodos:Dispatch<SetStateAction<Todo[]>>;
}

export interface ITodoList {
    todos: Todo[],
    filter: string,
    setTodos: Dispatch<SetStateAction<Todo[]>>
  }