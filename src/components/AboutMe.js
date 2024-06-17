import React, { useContext } from 'react';
import MyContext from './MyContext';

function AboutMe() {
  const name = useContext(MyContext);
  return (
    <>
      <h1 className="text-green-600">Hi,again! {name}</h1>
    </>
  );
}

export default AboutMe;
