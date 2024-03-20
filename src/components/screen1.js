import React, { useState } from 'react'
// import './App.css';
import Card1 from './cards.js'
import OverlappingButtons from './button.js';
import Card2 from './card2.js';
 

export default function Screen1() {
    const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prevIsMonthly) => !prevIsMonthly);
  };

  return (
   <div className='relative bg-theme text-white overflow-y-auto scrollbar-hidden  flex flex-col  max-w-3xl space-y-1 mx-2 lg:mx-auto '>
  <div className='flex items-center justify-between p-4'>
    <div className='flex items-center space-x-4'>
      <img className='w-[16px] h-[16px]' src='/back.png' alt='Back' />
      <p className='text-[14px] font-semibold font-poppins text-gray-50'>
        return to ASA Vault
      </p>
    </div>
    <img className='w-[64px] h-[64px]' src='/pwa.png' alt='PWA' />
  </div>

      <div className='mx-auto space-y-2  '>

        <div className='flex flex-col space-y-3 items-center justify-center '> 
            <p className='   text-center h-[24px] text-gray-100 font-semibold text-[20px] font-poppins'>
                Your service summary.</p>

            <div className='flex flex-col space-y-2 mx-auto w-full'>
                <div className='  flex flex-col   items-center'>
                    <strong className='text-3xl text-white font-poppins'>$55.95</strong>
                    <p style={{ lineHeight: ' ' }} className='font-semibold text-[16px]'>
                        due today</p>
                         
                </div>

                <div className='  flex flex-col items-center justify-center mt- mx-2 sm:mx-auto'>
                    <div className="flex items-center font-semibold text-gray-300 text-sm p-2 space-x-2">
                        <div className="bg-white/30 backdrop-blur-lg rounded-3xl overflow-hidden py-1">
                            <span style={{ lineHeight: '1.5' }} className={`rounded-3xl px-6 py-2 cursor-pointer text-[12px] sm:text-base transition-all duration-500 ${isMonthly ? 'bg-white/30 text-gray-50 transform z-10 text-[12px] relative' : 'bg-transparent text-gray-300'}`} onClick={handleToggle}>
                                Monthly
                            </span>
                            <span className={`rounded-3xl px-6 py-2 cursor-pointer text-[12px] sm:text-base transition-all duration-500 ${!isMonthly ? 'bg-white/30 text-gray-50 transform z-10 text-[12px] relative' : 'bg-transparent text-gray-300'}`} onClick={handleToggle}>
                                Annually
                            </span>
                            </div>
                    </div>
                </div>

                <div className='  mb-4 flex flex-col items-center'>
                    <strong className='text-3xl font-poppins'>$6.95</strong>
                    <p style={{ lineHeight: '28px' }} className='font-semibold text-[16px]'>due today</p>
                    <p className='font-semibold text-[16px]'>starting next month</p>
                </div>
            </div>
        </div>

      </div>

      <Card1 />
      <Card2/>

      {/* <div className='mx'> */}
        <p className='w-[70%] mx-auto text-center text-sm font-poppins'>
               The information provided will be shared with 
               Credit Rent Boost to help improve your credit score.
        </p>
       
             <button  style={{borderRadius: '32.5px'}} 
                 className='  font-semibold  p-4 mx-auto w-[80%] bg-white text-theme 
                            h-[58]'>
                        Continue
        </button>
       </div>
   );
  
  
}
