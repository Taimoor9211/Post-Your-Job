import React from "react";
import Image21 from "../../assets/Images/image21.jpg";
import {
  Languages,
  MapPin,
  MessageCircle,
  CreditCard,
  Landmark,
} from "lucide-react";
import { FaApple, FaGoogle, FaGooglePay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PayNow = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full max-w-[1300px] mx-auto gap-8 py-10 px-20">
      {/* Left Side - Checkout Form */}
      <div className="w-[696px] bg-white p-6">
        <h2 className="text-2xl font-bold mb-2">Checkout</h2>
        <p className="text-gray-600 mb-6">
          Review your details and complete your Payment.
        </p>

        {/* Payment Method */}
        <div className="w-full mb-8">
          <h2 className="text-lg font-bold mb-4">Payment Method</h2>
          <div className="space-y-2">
            <div className="flex items-center p-3 bg-[#C5C5C526] rounded-lg">
              <FaApple className="w-6 h-6 text-black mr-3" />
              <span className="font-medium">Apple Pay</span>
            </div>
            <div className="flex items-center p-3 bg-[#C5C5C526] rounded-lg">
              <FaGoogle className="w-6 h-6 text-black mr-3" />
              <span className="font-medium">Google Pay</span>
            </div>
            <div className="flex items-center p-3 bg-[#C5C5C526] rounded-lg">
              <Landmark className="w-6 h-6 text-blue-600 mr-3" />
              <span className="font-medium">Bank Transfer</span>
            </div>
          </div>
        </div>

        {/* Card Payment */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6"
            />
          </div>

          <div className="relative mb-4">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              className="w-full pl-10 pr-4 py-3 bg-[#C5C5C526] rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-900 mb-2">
              Account Holder Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
            />
          </div>

          <div className="flex justify-between gap-4 mb-8">
            <div className="flex-1">
              <label className="block font-medium text-gray-900 mb-2">
                Expiration Date
              </label>
              <input
                type="text"
                placeholder="MM / DD / YY"
                className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-900 mb-2">
                CVV
              </label>
              <input
                type="text"
                placeholder="000"
                className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => navigate("/review")}
            className="w-[170px] bg-blue-600 text-white font-medium py-3 rounded-lg"
          >
            Check Out
          </button>
        </div>
      </div>

      {/* Right Side - Job Details */}
      <div className="w-[505px] bg-white rounded-lg">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumber</h3>
              <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                COMPLETE
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">#JCD001</p>
            </div>
          </div>

          {/* Client Info */}
          <div className="flex items-start space-x-3 mt-6 mb-6">
            <img
              src={Image21}
              alt="Michael John"
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
            />
            <div className="flex-1 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Michael John
                </h4>
                <div className="flex items-center space-x-1 mt-1">
                  <Languages className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-600">🇬🇧 English</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs text-gray-600">🇮🇳 Hindi</span>
                  <MapPin className="h-3 w-3 text-gray-400 ml-2" />
                  <span className="text-xs text-gray-600">San Francisco</span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-[#F2F2F2] w-12 h-12 rounded-lg">
                <MessageCircle className="h-5 w-5 text-gray-600" />
              </div>
            </div>
          </div>

          <hr className="border-gray-200 my-6" />

          <div className="mb-8">
            <h4 className="text-base font-bold text-gray-900 mb-4">
              Job Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-900">Date</p>
                <p className="font-medium text-gray-900 text-sm text-right">
                  Wednesday - April 23, 2025
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-900">Time</p>
                <p className="font-medium text-gray-900 text-sm">11:30 PM</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-900">Job Type</p>
                <p className="font-medium text-gray-900 text-sm">Plumber</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-bold text-gray-900 mb-4">
              Price Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-900">Hourly Rate</p>
                <p className="font-medium text-gray-900 text-sm text-right">
                  $55 / hr
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-900">Tax</p>
                <p className="font-medium text-gray-900 text-sm">$5.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-900">
                  Estimate Total
                </p>
                <p className="font-medium text-gray-900 text-sm">$60.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
