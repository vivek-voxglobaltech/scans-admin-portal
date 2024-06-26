import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyContext from './components/MyContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import FourNotFour from './components/FourNotFour';
import AddTodo from './components/AddTodo';

function App() {
  const [name, setName] = useState('Vivek');
  return (
    <Router>
      <Navbar />
      <MyContext.Provider value={name}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<FourNotFour />} />
          <Route path="/todos" element={<AddTodo />} />
          <Route path="/todos/edit/:id" />
        </Routes>
      </MyContext.Provider>
    </Router>
  );
}
export default App;
