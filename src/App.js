import React, { useState } from 'react';
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const newPageSelected = pageName => {
    if(pageName) {
      setCurrentPage(pageName);
    }
  }

  return (
    <Router>
      <Navbar currentPage={currentPage} newPageSelected={newPageSelected} />
      <div className="main">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
        </Routes>
      </div>
      <Footer currentPage={currentPage} newPageSelected={newPageSelected}/>
    </Router>
  );
}
  
export default App;
