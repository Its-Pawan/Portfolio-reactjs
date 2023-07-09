import './App.css';
import Navbar from './component/navbar/Navbar';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Footer from './component/footer/Footer';
import GoTop from './component/gotop/GoTop';




function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error/>} />
        </Routes>
        <GoTop/>
        <Footer/>
      </Router>




    </div>
  );
}

export default App;
