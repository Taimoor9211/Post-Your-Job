import React, { useState } from "react";
import { Phone, MoreVertical, Plus, Smile, SendHorizonal } from "lucide-react";
import Imag24 from "../../assets/Images/image24.jpg";

const MessagesChat = () => {
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDotMenuOpen, setIsDotMenuOpen] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log(message);
      setMessage("");
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDotMenu = () => setIsDotMenuOpen(!isDotMenuOpen);

  const menuItems = [
    "Upload Document",
    "Upload Photo",
    "Upload Video",
    "Upload Audio",
    "Job History"
  ];

  const dotMenuItems = [
    "Pay Now",
    "Complete Job",
    "Cancel Job",
    "Dispute Job",
    "Job History"
  ];

  return (
    <div className="w-full max-w-[1440px] min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Area */}
      <div className="h-16 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img 
            src={Imag24} 
            alt="Profile" 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-base sm:text-lg font-semibold">David Moore</h2>
            <p className="text-xs sm:text-sm text-gray-600">last seen 5 mins ago</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="w-20 sm:w-[118px] h-8 sm:h-10 bg-white border border-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors">
            #JCD001
          </button>
          
          <button className="flex items-center bg-[#515DEF] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full">
            <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Request a Call</span>
            <span className="sm:hidden">Call</span>
          </button>
          
          <div className="relative">
            <button 
              onClick={toggleDotMenu}
              className="p-1 sm:p-2 hover:bg-gray-100 rounded-full"
            >
              <MoreVertical className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>
            
            {isDotMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-36 sm:w-48 z-20 border border-gray-200">
                {dotMenuItems.map((item) => (
                  <div 
                    key={item}
                    className="text-sm text-gray-900 cursor-pointer hover:bg-gray-50 p-2 sm:p-3 rounded"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Background Area */}
      <div className="bg-[#5488CD] h-[calc(100vh-12rem)] sm:h-[1300px] w-full flex flex-col">
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 flex flex-col-reverse">
          {/* Today Section */}
          <div className="flex flex-col items-center my-3 sm:my-4">
            <div className="bg-gray-800 bg-opacity-20 text-white text-xs font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
              Today
            </div>
          </div>

          {/* My First Message */}
          <div className="flex justify-end mb-3 sm:mb-4">
            <div className="max-w-[85%] sm:max-w-[70%]">
              <div className="bg-[#515DEF] text-white rounded-2xl rounded-br-none px-3 sm:px-4 py-2 sm:py-3">
                <p className="text-sm sm:text-base">no haha</p>
              </div>
              <div className="text-right mt-1">
                <span className="text-white text-xs opacity-80">18:16</span>
              </div>
            </div>
          </div>

          {/* My Second Message */}
          <div className="flex justify-end mb-3 sm:mb-4">
            <div className="max-w-[85%] sm:max-w-[70%]">
              <div className="bg-[#515DEF] text-white rounded-2xl rounded-br-none px-3 sm:px-4 py-2 sm:py-3">
                <p className="text-sm sm:text-base">I don't remember anything 😅</p>
              </div>
              <div className="text-right mt-1">
                <span className="text-white text-xs opacity-80">18:16</span>
              </div>
            </div>
          </div>

          {/* Yesterday Section */}
          <div className="flex flex-col items-center my-3 sm:my-4">
            <div className="bg-gray-800 bg-opacity-20 text-white text-xs font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
              Yesterday
            </div>
          </div>

          {/* David's Message */}
          <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-bold">
                D
              </div>
            </div>

            <div className="max-w-[85%] sm:max-w-[70%]">
              <div className="bg-white rounded-2xl rounded-tl-none px-3 sm:px-4 py-2 sm:py-3">
                <p className="text-sm sm:text-base text-gray-900">
                  OMG 😭 do you remember what you did last night at the work night out?
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-1 ml-1">
                <span className="text-white text-xs">❤️</span>
                <span className="text-white text-xs opacity-80">18:12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="flex items-center border-t p-3 sm:p-4 relative">
        <div className="relative">
          <button 
            onClick={toggleMenu}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full mr-1 sm:mr-2"
          >
            <Plus className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
          </button>
          
          {isMenuOpen && (
            <div className="absolute bottom-12 sm:bottom-14 left-0 bg-white shadow-lg rounded-lg p-3 w-40 sm:w-[207px] h-48 sm:h-[228px] z-10 border border-gray-200">
              {menuItems.map((item) => (
                <div 
                  key={item}
                  className="text-sm text-gray-900 cursor-pointer hover:bg-gray-50 p-2 sm:p-3 rounded"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <Smile className="mr-1 sm:mr-2 h-5 w-5 sm:h-6 sm:w-6 text-gray-600 cursor-pointer" />
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 sm:p-3 mr-1 sm:mr-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          placeholder="Message"
        />
        
        <button 
          onClick={handleSend}
          className="p-2 sm:p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          <SendHorizonal className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default MessagesChat;