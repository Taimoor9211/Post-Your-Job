import React from 'react';
import Image21 from '../../assets/Images/image21.jpg';
import { Languages, MapPin } from 'lucide-react';

// Sub-component for displaying label-value pairs
const DetailItem = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <p className="font-medium text-sm text-gray-900">{label}</p>
    <p className="font-medium text-gray-900 text-sm text-right">{value}</p>
  </div>
);

const ViewDetails = ({ job }) => {
  return (
    <div className="w-full max-w-[804px] h-auto">
      <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{job?.title || "Plumber"}</h3>
            <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
              {job?.status || "COMPLETE"}
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{job?.jobId || "#JCD001"}</p>
          </div>
        </div>

        {/* Client Info */}
        <div className="flex items-start space-x-3 mt-4 mb-4">
          <img
            src={job?.image || Image21}
            alt={job?.client || "Michael John"}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          />
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-base">{job?.client || "Michael John"}</h4>
            <div className="flex items-center space-x-1 mt-1">
              <Languages className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{job?.languages ? `🇬🇧 ${job.languages}` : "🇬🇧 English"}</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">{job?.languages ? `🇮🇳 ${job.languages}` : "🇮🇳 Hindi"}</span>
              <MapPin className="h-4 w-4 text-gray-400 ml-2" />
              <span className="text-sm text-gray-600">{job?.location || "San Francisco"}</span>
            </div>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Job Details</h4>
          <div>
            <DetailItem label="Date" value={job?.date || "Wednesday - April 23, 2025"} />
            <DetailItem label="Time" value={job?.time || "11:30 PM"} />
            <DetailItem label="Job Type" value={job?.jobType || "Plumber"} />
          </div>
        </div>

        {/* Price Details Section */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Price Details</h4>
          <div>
            <DetailItem label="Hourly Rate" value={`$${job?.hourlyRate || "55.00"} / hr`} />
            <DetailItem label="Tax" value={`$${job?.tax || "5.00"}`} />
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-gray-900">Estimate Total</p>
              <p className="font-medium text-base text-gray-900">${job?.estimateTotal || "60.00"}</p>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Payment Method</h4>
          <div className="flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="h-5" 
            />
            <DetailItem value={job?.cardType || "**** **** **** 0000"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;