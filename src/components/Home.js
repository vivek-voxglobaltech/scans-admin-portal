import React, { useContext } from 'react';
import MyContext from './MyContext';
import { useSelector } from 'react-redux';

const Home = () => {
  const name = useContext(MyContext);
  const todos = useSelector((state) => state.todos);
  return (
    <div className="flex flex-col justify-center items-center mt-4 mb-2">
      <h1 className="text-3xl">Hi, {name}</h1>
      <p className="text-2xl">
        The number of todos present here are {todos.length}
      </p>
    </div>
  );
};

export default Home;
