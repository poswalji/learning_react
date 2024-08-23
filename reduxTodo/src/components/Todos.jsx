import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo, loadTodos } from '../features/Todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editTodo, setEditTodo] = useState({ id: null, text: '' });

    // Load todos from localStorage on component mount
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos && storedTodos.length > 0) {
            dispatch(loadTodos(storedTodos));
        }
    }, [dispatch]);

    // Save todos to localStorage whenever todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleEdit = (id, currentText) => {
        setEditTodo({ id, text: currentText });
    };

    const handleUpdate = (id) => {
        if (editTodo.text.trim() !== '') {
            dispatch(updateTodo({ id, text: editTodo.text }));
            setEditTodo({ id: null, text: '' });
        }
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>
                            {editTodo.id === todo.id ? (
                                <input
                                    type="text"
                                    value={editTodo.text}
                                    onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
                                    className="text-black"
                                />
                            ) : (
                                todo.text
                            )}
                        </div>
                        <button
                            className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                            onClick={() => {
                                if (editTodo.id === todo.id) {
                                    handleUpdate(todo.id);
                                } else {
                                    handleEdit(todo.id, todo.text);
                                }
                            }}
                        >
                            {editTodo.id === todo.id ? 'Save' : 'Edit'}
                        </button>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
