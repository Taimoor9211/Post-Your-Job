import React, { useState } from 'react';
import { MessageCircle, Bell } from 'lucide-react';
import Logo from '../../assets/Images/Logo.png';
import Image20 from '../../assets/Images/image20.jpg';

const DashboardNavbar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('Dashboard');

  // Handler for clicking a link
  const handleLinkClick = (link) => {
    setActiveLink(link);
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
          {['Dashboard', 'Servics', 'My jobs', 'Messages', 'Payments'].map((link) => (
            <div key={link} className="relative">
              <a
                href="#"
                onClick={() => handleLinkClick(link)}
                className={`text-black font-medium text-base uppercase tracking-wide
                  hover:text-gray-600 transition-colors duration-300
                  ${activeLink === link ? "text-blue-500" : ""}`} // Active link color
              >
                {link}
              </a>
              {/* Bottom border for active link */}
              {activeLink === link && (
                <div className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-blue-500" />
              )}
            </div>
          ))}
        </div>

        {/* Right - Sign In */}
        <div className="flex items-center space-x-4">
          <img src={Image20} alt="Profile" className="w-8 h-8 rounded-full" />
          <button className="relative">
            <MessageCircle size={24} className="text-gray-700 hover:text-blue-500" />
          </button>
          <button className="relative">
            <Bell size={24} className="text-gray-700 hover:text-blue-500" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;