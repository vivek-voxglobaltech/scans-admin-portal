import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const name = 'Hello World';
  return (
    <>
      <Navbar />
      <Home homeName={name} />
      <About />
      <Footer />
    </>
  );
}
export default App;
