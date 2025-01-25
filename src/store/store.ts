import { create } from 'zustand';
import { nanoid } from 'nanoid';

import { persist, devtools } from 'zustand/middleware';
import { type StateCreator } from 'zustand'

import { Todo, TodosState, FilterState } from '../types';


const counterStoreCreator:StateCreator<TodosState>  = (set, get) => ({
    todos: [{
        id: '1', title: 'Learn JS', completed: true
    }, {
        id: '2', title: 'Learn React', completed: false
    }],
    error: null,
    addTodo: (title: string) => {
        const newTodo: Todo = { id: nanoid(), title, completed: false }

        set({ todos: [...get().todos, newTodo] })
    },
    clearCompleted: () => set({ todos: get().todos.filter((item: Todo) => !item.completed) }),
    toggleTodo: (todoId: string) => set({ todos: get().todos.map((item: Todo) => todoId === item.id ? { ...item, completed: !item.completed } : item) }),
})


export const useTodos = create<TodosState>()(devtools(persist(counterStoreCreator,
    {
        name: 'todos-storage',
    }
)))



export const useFilter = create<FilterState>()((set) => ({
    filter: 'all',
    setFilter: (value) => set({ filter: value })
}))
