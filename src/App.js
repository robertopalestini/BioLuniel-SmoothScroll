import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import ContactPage from './pages/contact';


function App() {
  return (
    <Router>
     
      <Routes> 
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
      </Routes>

    </Router>
  );
}

export default App;
