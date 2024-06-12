import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <>
      <nav className='bg-sky-950 h-13'>
      <div className='space-x-4 text-white text-right p-6'>
        <a href="/logo"><img src="/tailwind.jpg" alt="rohith"></img></a>
        <a href='/docs'>Docs</a> 
        <a href='/components'>Components</a>
        <a href='/Blog'>Blog</a>
        <a href='/Showcase'>Showcase</a>
      </div>
      </nav>
    </>
  );
}

export default Navbar;
