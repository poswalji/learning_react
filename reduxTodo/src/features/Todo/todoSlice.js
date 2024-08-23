import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), text: "hello malu" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos.forEach((todo) => {
                if (todo.id === id) {
                    todo.text = text;
                }
            });
        },
        loadTodos: (state, action) => {
            state.todos = action.payload;
        }
    }
});

export const { addTodo, removeTodo, updateTodo, loadTodos } = todoSlice.actions;
export default todoSlice.reducer;
