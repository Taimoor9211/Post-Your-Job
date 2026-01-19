import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './index.css';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import MyJobs from './Pages/MyJobs';
import Messages from './Pages/Messages';
import Payments from './Pages/Payments';
import DashboardNavbar from './Components/DashboardComponents/DashboardNavbar';
import Navbar from './Components/Navbar';
import PayNow from './Components/PaymentsComponents/PayNow';
import Review from './Components/PaymentsComponents/Review';
import ProfileSettings from './Components/DashboardComponents/ProfileSettings';
import ImageDetailPage from './Components/DashboardComponents/ImageDetailPage';

const App = () => {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/paynow" element={<PayNow />} />
        <Route path="/review" element={<Review />} />
        <Route path='/profile-settings' element={<ProfileSettings />} />
        <Route path='/service-details'  element={<ImageDetailPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

// Component to conditionally render the appropriate navbar
const ConditionalNavbar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <Navbar />
      ) : (
        <DashboardNavbar />
      )}
    </>
  );
};

export default App;