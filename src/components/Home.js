import React, { useContext } from 'react';
import MyContext from './MyContext';

const Home = () => {
  const name = useContext(MyContext);
  return (
    <>
      <h1>Hi, {name}</h1>
    </>
  );
};

export default Home;
