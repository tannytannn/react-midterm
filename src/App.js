import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './mycomponent/about';
import Home from './mycomponent/home';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">หน้าแรก</Link></li>
            <li><Link to="/about">เกี่ยวกับ</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
