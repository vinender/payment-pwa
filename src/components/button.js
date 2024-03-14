import React, { useState } from 'react';

const OverlappingButtons = () => {
  const [activeButton, setActiveButton] = useState('monthly');

  const toggleBg = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="inline-flex bg-gray-200 rounded-full w-[168px] px-2 py-1">
      <button
        className={`${
          activeButton === 'monthly'
            ? 'bg-gray-200 text-white w-[82px] h-[24px]'
            : 'bg-gray-100 text-gray-800'
        } py-2 px-4 rounded-full font-semibold text-xs transition-colors duration-300 relative z-10`}
        onClick={() => toggleBg('monthly')}
      >
        Monthly
      </button>
      <button
        className={`${
          activeButton === 'annually'
            ? 'bg-gray-200 text-white'
            : 'bg-gray-100 text-gray-800'
        } py-2 px-4 rounded-full font-semibold transition-colors text-xs duration-300 relative -ml-12 z-0`}
        onClick={() => toggleBg('annually')}
      >
        Annually
      </button>
    </div>
  );
};

export default OverlappingButtons;