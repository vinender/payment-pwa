import React, { useState } from 'react'
// import './App.css';
import Card1 from './cards.js'
import OverlappingButtons from './button.js';
export default function Screen1() {
    const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prevIsMonthly) => !prevIsMonthly);
  };


  return (

    <div className='bg-theme flex overflow-y-scroll py-10 text-gray-100 flex-col max-w-3xl mx-auto border space-y-5 h-screen '>
         
         <div className='flex items-center justify-between mx-2'> 
            <div className='flex items-center p-4 space-x-4'>
                <img className='w-[16px] h-[16px]' src='/back.png'/>
                <p style={{ lineHeight: '24px' }} className='text-[14px] w-[154px] h-[24px] font-semibold font-poppins  text-gray-50'>  return to ASA Vault </p>
            </div>

            <img className='w-[64px] h-[64px]' src='/pwa.png'/>
        </div>

        <div className='mx-auto space-y-2'>
            <p className='text-gray-100  font-semibold text-[20px] font-poppins'>
                  Your service summary.
            </p>

            <div className='flex flex-col  items-center'>  
               <strong className='text-3xl font-poppins'>
                      $98 
                </strong>
                <p style={{lineHeight:'28px'}} className='font-semibold text-[16px]'>
                   due today
                </p>

                </div>

            <div className='text-center flex space-y-3 flex-col'>

                <div className="flex items-center font-semibold text-gray-300 text-sm p-2 space-x- mx-auto">
                 <div className="bg-white/30 backdrop-blur-lg rounded-3xl overflow-hidden  py-1">
                    <span style={{ lineHeight: '1.5' }}
                    className={`rounded-3xl px-6 py-2 cursor-pointer text-[12px] mr-[-6px] transition-all duration-500 ${
                        isMonthly
                        ? 'bg-white/30 text-gray-50 transform z-10 text-[12px] relative'
                        : 'bg-transparent text-gray-300'
                    }`}
                    onClick={handleToggle}
                    >
                    Monthly
                    </span>
                    <span
                    className={`rounded-3xl px-6 text-[12px] py-2 mr-[-6px] cursor-pointer transition-all duration-500 ${
                        !isMonthly
                        ? 'bg-white/30 text-gray-50 transform z-10 text-[12px] relative'
                        : 'bg-transparent text-gray-300  '
                    }`}
                    onClick={handleToggle}
                    >
                    Annually
                    </span>
                </div>
            </div>

            </div>
        </div>

        <Card1/>
        {/* <Card1/>
        <Card1/>
        <Card1/> */}

    </div>
  )
}
