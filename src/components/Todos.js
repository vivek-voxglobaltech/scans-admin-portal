import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../app/features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const removeTodoHandler = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const editTodoHandler = (todo) => {
    //dispatch(editTodo(todo));
  };

  return (
    <>
      <div>
        {todos && todos.length > 0 ? (
          <ul>
            {todos.map((todo) => (
              <div className="flex flex-row" key={todo.id}>
                <li>{todo.text}</li>
                <button
                  className="ml-4"
                  type="button"
                  onClick={() => editTodoHandler(todo)}
                >
                  Edit
                </button>
                <button
                  className="ml-4"
                  type="button"
                  onClick={() => removeTodoHandler(todo.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <p>Add some todos!</p>
        )}
      </div>
    </>
  );
}

export default Todos;
