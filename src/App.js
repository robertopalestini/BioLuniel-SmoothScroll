import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import ContactPage from './pages/contact';
import BioProduct from './pages/BioProduct';
import BioProductD from './pages/BioProductD';
import BioDefensas from './pages/BioDefensas';
import BioApetito from './pages/BioApetito';
import BioAlergia from './pages/BioAlergia';
import BioColageno from './pages/BioColageno';
import BioResentimiento from './pages/BioResentimiento';
import BioPaz from './pages/BioPaz';
import BioRescate from './pages/BioRescate';
import BioResistencia from './pages/BioResistencia';
import BioInsomnio from './pages/BioInsomnio';
import BioMigrana from './pages/BioMigrana';

function App() {
  return (
    <Router>
     
      <Routes> 
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/bioproduct" element={<BioProduct />} exact />
        <Route path="/bioproductd" element={<BioProductD />} exact />
        <Route path="/biodefensas" element={<BioDefensas />} exact />
        <Route path="/bioapetito" element={<BioApetito />} exact />
        <Route path="/bioalergia" element={<BioAlergia />} exact />
        <Route path="/biocolageno" element={<BioColageno />} exact />
        <Route path="/bioresentimiento" element={<BioResentimiento />} exact />
        <Route path="/biopaz" element={<BioPaz />} exact />
        <Route path="/biorescate" element={<BioRescate />} exact />
        <Route path="/bioresistencia" element={<BioResistencia />} exact />
        <Route path="/bioinsomnio" element={<BioInsomnio />} exact />
        <Route path="/biomigrana" element={<BioMigrana />} exact />
      </Routes>

    </Router>
  );
}

export default App;
