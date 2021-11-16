import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import ContactPage from './pages/contact';
import BioProduct from './pages/BioProduct';
import BioProductD from './pages/BioProductD';


function App() {
  return (
    <Router>
     
      <Routes> 
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/bioproduct" element={<BioProduct />} exact />
        <Route path="/bioproductd" element={<BioProductD />} exact />
      </Routes>

    </Router>
  );
}

export default App;
