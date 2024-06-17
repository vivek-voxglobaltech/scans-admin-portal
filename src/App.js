import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import MyContext from './components/MyContext';

function App() {
  const [name, setName] = useState('Vivek');
  return (
    <MyContext.Provider value={name}>
      <Home />
      <About />
    </MyContext.Provider>
  );
}
export default App;
