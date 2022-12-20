import './App.css';
import React, {useState,useEffect} from 'react';
import Home from './pages/home'
import About from './pages/about'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
 
  return (
  <div>
    <Router>
    <ul>
      <li><Link to ='/' >Home</Link></li>
      <li><Link to ='/about' >About</Link></li>
     </ul>
        <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/about" element={<About/>} />  
      </Routes>
    </Router>

  </div>



  );
  
}

export default App;
