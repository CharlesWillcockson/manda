import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/navbar';
import Gallery from './pages/Gallery';
import Quote from './pages/Quote';
import About from './pages/About';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='gallery' exact element={<Gallery />} />
        <Route path='quotes' exact element={<Quote />} />
        <Route path='about' exact element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
