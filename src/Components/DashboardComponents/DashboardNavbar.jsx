import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MessageCircle, Bell } from 'lucide-react';
import Logo from '../../assets/Images/Logo.png';
import Image20 from '../../assets/Images/image20.jpg';

const DashboardNavbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/services', label: 'Services' },
    { path: '/my-jobs', label: 'My Jobs' },
    { path: '/messages', label: 'Messages' },
    { path: '/payments', label: 'Payments' },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="w-full h-20 bg-white backdrop-blur-3xl border-b border-gray-200">
      <div className="flex items-center justify-between w-full h-full max-w-[1440px] mx-auto px-14">
        {/* Left - Brand/Home */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-16" />
        </div>

        {/* Center - Navigation Links */}
        <div className="flex space-x-10">
          {links.map(({ path, label }) => (
            <div key={path} className="relative h-full flex items-center">
              <Link
                to={path}
                className={`text-black font-medium text-base uppercase tracking-wide hover:text-gray-600 transition-colors duration-300 ${
                  location.pathname === path ? 'text-blue-500' : ''
                }`}
              >
                {label}
              </Link>
              {/* Bottom Border for Active Link */}
              {location.pathname === path && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
              )}
            </div>
          ))}
        </div>

        {/* Right - Profile and Notifications */}
        <div className="relative flex items-center space-x-4">
          <img 
            src={Image20} 
            alt="Profile" 
            className="w-8 h-8 rounded-full cursor-pointer" 
            onClick={toggleDropdown} 
          />
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-12 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
              <Link 
                to="/view-profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                View Profile
              </Link>
              <Link 
                to="/profile-settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                Profile Settings
              </Link>
            </div>
          )}

          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MessageCircle size={20} className="text-gray-700 hover:text-blue-500" />
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={20} className="text-gray-700 hover:text-blue-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;