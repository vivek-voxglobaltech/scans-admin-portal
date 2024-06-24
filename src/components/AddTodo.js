import React from 'react';
import Todos from './Todos';

function AddTodo() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-lg mt-4">AddTodo</h1>
      </div>
      <Todos />
    </>
  );
}

export default AddTodo;
