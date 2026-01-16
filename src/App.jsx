import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './index.css';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;