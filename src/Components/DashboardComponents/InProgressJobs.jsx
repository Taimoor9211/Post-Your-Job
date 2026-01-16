import React from 'react';
import Image21 from '../../assets/Images/image21.jpg';
import Image22 from '../../assets/Images/image22.jpg';
import { Languages, MapPin } from 'lucide-react';

const InProgressJobs = () => {
  const jobCards = [
    {
      id: 1,
      title: "Plumber",
      jobId: "#JCD001",
      status: "In progress",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image21,
      statusColor: "bg-blue-500",
      statusBg: "bg-blue-50",
      statusText: "text-blue-700"
    },
    {
      id: 2,
      title: "Electrician",
      jobId: "#JCD002",
      status: "In progress",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image21,
      statusColor: "bg-blue-500",
      statusBg: "bg-blue-50",
      statusText: "text-blue-700"
    },
    {
      id: 3,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "In progress",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      image: Image21,
      statusColor: "bg-blue-500",
      statusBg: "bg-blue-50",
      statusText: "text-blue-700"
    },
    {
      id: 4,
      title: "Painter",
      jobId: "#JCD004",
      status: "In progress",
      client: "Emma Thompson",
      languages: "English, German",
      location: "Los Angeles",
      date: "Monday - April 28, 2025",
      time: "09:15 AM",
      jobType: "Painter",
      image: Image21,
      statusColor: "bg-blue-500",
      statusBg: "bg-blue-50",
      statusText: "text-blue-700"
    },
  ];

  const ScheduledCard = [
    {
      id: 1,
      title: "Plumber",
      jobId: "#JCD001",
      status: "Scheduled",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image22,
      statusColor: "bg-[#FBBB00]",
      statusBg: "bg-[#FBBB0026]",
      statusText: "text-[#FBBB00]"
    },
    {
      id: 2,
      title: "Electrician",
      jobId: "#JCD002",
      status: "Scheduled",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image22,
      statusColor: "bg-[#FBBB00]",
      statusBg: "bg-[#FBBB0026]",
      statusText: "text-[#FBBB00]"
    },
    {
      id: 3,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "Scheduled",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      image: Image22,
      statusColor: "bg-[#FBBB00]",
      statusBg: "bg-[#FBBB0026]",
      statusText: "text-[#FBBB00]"
    },
    {
      id: 4,
      title: "Painter",
      jobId: "#JCD004",
      status: "Scheduled",
      client: "Emma Thompson",
      languages: "English, German",
      location: "Los Angeles",
      date: "Monday - April 28, 2025",
      time: "09:15 AM",
      jobType: "Painter",
      image: Image22,
      statusColor: "bg-[#FBBB00]",
      statusBg: "bg-[#FBBB0026]",
      statusText: "text-[#FBBB00]"
    },
  ];

  const JobCard = ({ job }) => (
    <div className='bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col'>
      {/* Card Header */}
      <div className='p-4 sm:p-5 lg:p-6 flex-grow'>
        <div className='flex justify-between items-start mb-3 sm:mb-4'>
          <div className='flex-1'>
            <h3 className='text-base sm:text-lg font-bold text-gray-900 line-clamp-1'>{job.title}</h3>
            <span className={`px-2 sm:px-3 py-1 ${job.statusBg} ${job.statusText} text-xs font-semibold rounded-full flex items-center w-fit mt-1`}>
              <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${job.statusColor} rounded-full mr-1.5 sm:mr-2`}></span>
              {job.status}
            </span>
          </div>
          <p className='text-xs sm:text-sm text-gray-500 ml-2 whitespace-nowrap'>{job.jobId}</p>
        </div>

        {/* Client Info */}
        <div className='flex items-start space-x-3 sm:space-x-4 mt-4'>
          <img 
            src={job.image} 
            alt={job.client}
            className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-gray-100 flex-shrink-0'
          />
          <div className='flex-1 min-w-0'>
            <h4 className='font-bold text-gray-900 text-sm sm:text-base truncate'>{job.client}</h4>
            <div className='flex flex-col sm:flex-row sm:justify-between gap-2 mt-2'>
              <div className='flex items-center space-x-1.5 sm:space-x-2'>
                <Languages className='h-2 w-2 sm:h-3 sm:w-3 text-gray-400 flex-shrink-0' />
                <span className='text-xs sm:text-[8px] text-gray-600 truncate'>{job.languages}</span>
              </div>
              <div className='flex items-center space-x-1.5 sm:space-x-2'>
                <MapPin className='h-2 w-2 sm:h-3 sm:w-3 text-gray-400 flex-shrink-0' />
                <span className='text-xs sm:text-[8px] text-gray-600 truncate'>{job.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='px-4 sm:px-5 lg:px-6'>
        <hr className='border-gray-200' />
      </div>

      {/* Job Details */}
      <div className='p-4 sm:p-5 lg:p-6 space-y-2.5 sm:space-y-3'>
        <div className='flex justify-between items-center'>
          <p className='text-xs text-gray-500'>Date</p>
          <p className='font-medium text-gray-900 text-xs sm:text-sm text-right'>{job.date}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-xs text-gray-500'>Time</p>
          <p className='font-medium text-gray-900 text-xs sm:text-sm'>{job.time}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-xs text-gray-500'>Job Type</p>
          <p className='font-medium text-gray-900 text-xs sm:text-sm'>{job.jobType}</p>
        </div>
      </div>

      {/* Button */}
      <div className='px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 mt-auto'>
        <button className='w-full bg-[#515DEF] text-white font-medium py-2.5 sm:py-3 px-4 rounded-full hover:bg-[#3F4BDA] transition-colors duration-200 flex items-center justify-center text-sm sm:text-base'>
          View Job Details
        </button>
      </div>
    </div>
  );

  return (
    <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8'>
      {/* In Progress Jobs */}
      <div className='mb-8 sm:mb-10 lg:mb-12'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900'>In Progress Jobs</h2>
          <button className='text-[#515DEF] font-medium hover:text-[#3F4BDA] transition-colors duration-200 text-sm sm:text-base'>
            View All
          </button>
        </div>

        {/* Job Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6'>
          {jobCards.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Scheduled Jobs */}
      <div>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900'>Scheduled Jobs</h2>
          <button className='text-[#515DEF] font-medium hover:text-[#3F4BDA] transition-colors duration-200 text-sm sm:text-base'>
            View All
          </button>
        </div>

        {/* Job Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6'>
          {ScheduledCard.map((job) => (
            <JobCard key={`scheduled-${job.id}`} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InProgressJobs;