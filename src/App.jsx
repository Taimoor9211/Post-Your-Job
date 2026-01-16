import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './index.css';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import MyJobs from './Pages/MyJobs';
import Messages from './Pages/Messages';
import Payments from './Pages/Payments';
import DashboardNavbar from './Components/DashboardComponents/DashboardNavbar';

const App = () => {
  return (
    <Router>
      <DashboardNavbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;