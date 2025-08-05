import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Layout';
import { Book } from './Components/Book';



function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="book" element={<Book />} />
        </Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
