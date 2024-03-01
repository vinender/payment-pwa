import React, { useState } from 'react'
// import './App.css';
import Card1 from './cards.js'
export default function Screen1() {
    const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prevIsMonthly) => !prevIsMonthly);
  };


  return (

    <div className='bg-theme flex overflow-y-scroll py-10 text-gray-100 flex-col max-w-3xl mx-auto border space-y-5 h-screen '>

        <div className='flex p-4'>
            <p className='text-xl-200 font-semibold text-gray-50'> - return to ASA Vault </p>
        </div>

        <div className='mx-auto space-y-2 '>
            <p className='text-gray-100 font-semibold text-xl'>
                  Your service summary.
            </p>

            <div className='text-center flex space-y-3 flex-col'>
                <strong className='text-3xl'>
                      $98 
                </strong>
                <p className='font-semibold text-lg'>
                   due today
                </p>

                <div className='flex items-center font-semibold bg-theme text-gray-300 text-sm p-2 space-x-2 mx-auto'>
                <span
                    className={`rounded-3xl p-1 px-4 cursor-pointer ${
                    isMonthly ? 'opacity-90 bg-light transform text-white scale-105' : ''
                    } transition-all duration-500`}
                    onClick={handleToggle}
                >
                    Monthly
                </span>
                <span
                    className={`rounded-3xl p-1 px-4 cursor-pointer ${
                    !isMonthly ? 'opacity-90 bg-light text-white transform scale-105' : ''
                    } transition-all duration-500`}
                    onClick={handleToggle}
                >
                    Annually
                </span>
                </div>

            </div>
        </div>

        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>

    </div>
  )
}
