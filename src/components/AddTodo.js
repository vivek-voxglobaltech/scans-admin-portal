import React, { useState } from 'react';
import Todos from './Todos';
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/features/todo/todoSlice';

function AddTodo() {
  const [todoInput, setTodoInput] = useState('');

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoInput));
    setTodoInput('');
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-lg mt-4">AddTodo</h1>
        <form className="max-w-sm mx-auto" onSubmit={addTodoHandler}>
          <div className="mb-5">
            <input
              type="text"
              id="base-input"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Todo"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
          >
            Add Todo
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center mt-4 mb-4">
        <Todos />
      </div>
    </>
  );
}

export default AddTodo;
