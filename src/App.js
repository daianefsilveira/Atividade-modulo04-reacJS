import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Destinos from './components/pages/Destinos';
import Passagens from './components/pages/Passagens';
import Cadastro from './components/pages/Cadastro';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/destinos' element={<Destinos />} />
            <Route path='/passagens' element={<Passagens />} />
            <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
