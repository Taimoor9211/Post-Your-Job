import React, { useState } from "react";
import Image25 from "../../assets/Images/Image25.jpg";
import {
  Clock,
  Mail,
  Lock,
  Shield,
  HelpCircle,
  Edit,
  Camera,
  ChevronDown,
  Eye,
  EyeOff,
} from "lucide-react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const renderGeneralTab = () => (
    <div className="w-full">
      <h1 className="text-xl font-semibold mb-2">General Profile Details</h1>
      <p className="text-gray-700 mb-6">
        Your information helps us verify your identity and maintain a safe,
        reliable service <br /> community. Update your details whenever you
        need.
      </p>
      <form className="space-y-6 max-w-md">
        <div className="relative">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Profile Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Micheal John"
            className="border border-[#F7F7F7] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Edit className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative">
          <label
            htmlFor="UserName"
            className="block text-gray-700 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="UserName"
            placeholder="Micheal John"
            className="border border-[#F7F7F7] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Edit className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="michealjohn@gmail.com"
            className="border border-[#F7F7F7] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Edit className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex justify-end">
          <button className="bg-[#515DEF] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );

  // Add this with your other useState declarations at the top of your component
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // Update your renderPasswordTab function to use the top-level state
  const renderPasswordTab = () => {
    const togglePasswordVisibility = (field) => {
      setShowPassword((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    };

    return (
      <div className="w-full">
        <h1 className="text-xl font-semibold mb-2">Update Password</h1>
        <p className="text-gray-700 mb-6">
          Keep your account safe by updating your password. You can change it
          whenever <br /> you need.
        </p>
        <form className="space-y-6 max-w-md">
          <div className="relative">
            <label
              htmlFor="currentPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Current Password
            </label>
            <input
              type={showPassword.currentPassword ? "text" : "password"}
              id="currentPassword"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              placeholder="Enter your current password"
              className="border border-[#F7F7F7] rounded-lg p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("currentPassword")}
              className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword.currentPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
          <div className="relative">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              New Password
            </label>
            <input
              type={showPassword.newPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              className="border border-[#F7F7F7] rounded-lg p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("newPassword")}
              className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword.newPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Re-enter New Password
            </label>
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm new password"
              className="border border-[#F7F7F7] rounded-lg p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword.confirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
          <div className="flex justify-end gap-5">
            <button
              type="button"
              className="border border-[#F7F7F7] px-6 py-3 rounded-lg font-medium"
            >
              Forget Password
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Add at the top of your component with other state declarations
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Update your renderSupportLegalTab function to remove the useState inside it
  const renderSupportLegalTab = () => {
    const faqItems = [
      {
        question: "How do I post a task?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "Is there any charges for using Jobs can do?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "How to join as a service provider?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "How to create an invoice?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ];

    const toggleAnswer = (index) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
      <div className="w-full max-w-[704px]">
        <h1 className="text-xl font-semibold mb-2">Support & Legal</h1>
        <p className="text-gray-700 mb-8">
          Find help and legal information related to your account and our
          services.
        </p>

        <h3 className="font-semibold mt-4">1. Terms</h3>
        <p className="text-gray-600 mb-4">
          By accessing this website, you are agreeing to be bound by these
          website Terms and Conditions of Use, applicable laws and regulations
          and their compliance. If you disagree with any of the stated terms and
          conditions, you are prohibited from using or accessing this site. The
          materials contained in this site are secured by relevant copyright and
          trademark law.
        </p>

        <h3 className="font-semibold mt-4">2. Use Licence</h3>
        <p className="text-gray-600 mb-8">
          Permission is allowed to temporarily download one duplicate of the
          materials (data or programming) on Company's site for individual and
          non-business use only. This is just a permit of license and not an
          exchange of title, and under this permit, you may not: • modify or
          copy the materials; • use the materials for any commercial use, or for
          any public presentation (business or non-business); • attempt to dec
        </p>

        <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
        <p className="text-gray-700 mb-8">
          Our Customer Support is here to assist you with any questions, issues,
          or feedback to ensure a smooth experience.
        </p>

        <div>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-6 border border-[#F7F7F7] rounded-lg p-2 w-full"
            >
              <h4
                className="font-medium mb-2 flex items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
                <ChevronDown
                  className={`ml-auto transition-transform ${
                    openFaqIndex === index ? "rotate-180" : ""
                  }`}
                />
              </h4>
              {openFaqIndex === index && (
                <p className="text-gray-600 ml-7">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: "general", label: "General", icon: Mail },
    { id: "password", label: "Passwords", icon: Lock },
    { id: "support", label: "Support & Legal", icon: Shield },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 pt-12 pb-96 bg-white">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-12 relative">
        {/* Camera Icon */}
        <div className="absolute top-0 left-0 sm:top-1 sm:left-1 bg-gray-200 rounded-full p-1 sm:p-1.5 z-10">
          <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        </div>

        {/* Profile Image */}
        <div className="relative mb-4 sm:mb-0 sm:mr-6">
          <img
            src={Image25}
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-[116px] md:h-[116px] rounded-full"
          />
          {/* Online Status Dot */}
          <div className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
        </div>

        {/* User Info */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
            Micheal John
          </h1>
          <div className="flex items-center text-gray-600 mb-1">
            <Mail className="inline-block mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <p className="text-xs sm:text-sm md:text-base">
              michealjohn@gmail.com
            </p>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="inline-block mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <p className="text-xs sm:text-sm md:text-base">Joined Since 2026</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-2 sm:space-x-4 md:space-x-8 border-b">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-3 text-sm sm:text-base border-b-2 transition-all duration-200 ${
                  isActive
                    ? "border-blue-600 text-blue-600 font-semibold"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === "general" && renderGeneralTab()}
        {activeTab === "password" && renderPasswordTab()}
        {activeTab === "support" && renderSupportLegalTab()}
      </div>
    </div>
  );
};

export default ProfileSettings;
