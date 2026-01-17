import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const MessagesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Chat 01' },
    { id: 1, label: 'Chat 02' },
    { id: 2, label: 'Chat 03' },
    { id: 3, label: 'Chat 04' },
    { id: 4, label: 'Chat 05' },
    { id: 5, label: 'Chat 06' },
  ];

  return (
    <div className='w-full max-w-screen-xl mx-auto'>
      {/* Tab Container with Background Color */}
      <div className='flex border-b border-gray-300 bg-[#515DEF26] flex-wrap'>
        {tabs.map(tab => (
          <div 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center cursor-pointer p-2 transition-colors duration-200 
              flex-1 xs:flex-auto text-center
              ${activeTab === tab.id ? 'bg-[#515DEF] text-white' : 'hover:bg-gray-100'} 
              rounded-t-lg`}
          >
            <MessageCircle className='h-5 w-5 mr-2' />
            <p className='truncate'>{tab.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesTabs;