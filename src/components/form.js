import React from 'react';
import { Link } from 'react-router-dom';

const PaymentForm = () => {
  const [isCardSelected, setIsCardSelected] = React.useState(true);

  return (
    <div className="relative flex flex-col items-center w-full  bg-theme min-h-screen">
    <div className="flex flex-col  justify-between flex- ">
        {/* <div className='flex flex-col  justify-between flex-  '> */}

          <div className='flex items-center w-full justify-between '>
            <div className='flex items-center p-4 space-x-4'>
              <img className='w-[16px] h-[16px]' src='/back.png' />
              <p style={{ lineHeight: '24px' }} 
                 className='text-[14px]   whitespace-nowrap font-semibold font-poppins text-gray-50'>
                return to ASA Vault
              </p>
            </div>
            <img className=' h-16 w-16 mx-6' src='/pwa.png' />
          </div>
  
          <h2 className="text-white font-semibold font-poppins mt-10 text-[20px] mb-4">Improve my score!</h2>
          
          <div className="flex bg-white/20 backdrop-blur-lg p-3 px-4 rounded-xl w-[85%] mx-auto justify-between items-center mb-4">
            <span className="text-white font-poppins font-medium">Purchase Summary</span>
            <span className="text-white font-poppins font-medium">
              {isCardSelected ? '$98' : '$95.98'} 
            </span>
          </div>
  
          <div className='font-poppins  flex flex-col items-center justify-center mt-4 mx-2 sm:mx-auto'>
            <div className="flex items-center font-semibold text-gray-300 text-sm p-2 space-x-2">
              <div className="bg-white/30 backdrop-blur-lg rounded-3xl overflow-hidden py-1">
                <span style={{ lineHeight: '1.5' }} className={`rounded-3xl px-6 py-2 cursor-pointer text-[12px] sm:text-base transition-all duration-500 ${isCardSelected ? 'bg-white/30 text-gray-50 transform z-10 text-[12px] relative' : 'bg-transparent text-gray-300'}`}     onClick={() => setIsCardSelected(true)}>
                  Credit card
                </span>
                <span className={`rounded-3xl px-6 py-2 cursor-pointer text-[12px] sm:text-base transition-all duration-500 ${!isCardSelected ? 'bg-white/30 text-gray-50 transform z-10 text-[12px] relative' : 'bg-transparent text-gray-300'}`}     onClick={() => setIsCardSelected(false)}>
                  Bank Account
                </span>
              </div>
            </div>
          </div>
  
          <div className="bg-  font-poppins rounded-lg p-4 w-full max-w-sm">
            <p className='text-[16px] font-poppins text-center text-white font-semibold'>Payment information not shared.</p>
  
            {isCardSelected ? (
              <div className='  mt-3 gap-4'>
                <input
                  className=" bg-transparent  border-2 my-2 placeholder-white  font-poppins   border-purple-400 text-white   font-semibold w-full mb-2 px-3 py-3 rounded-md"
                  placeholder="Card Number"
                />
                <div className="flex mb-2">
                  <input
                    className=" bg-transparent  border-2 my-2  placeholder-white  font-poppins  border-purple-400 text-white font-semibold w-1/2 mr-2 px-3 py-3 rounded-md"
                    placeholder="Expiration Date"
                  />
                  <input
                    className=" bg-transparent  border-2 my-2  placeholder-white  font-poppins  border-purple-400 text-white font-semibold w-1/2 px-3 py-3 rounded-md"
                    placeholder="CVV"
                  />
                </div>
                <input
                  className=" bg-transparent  border-2 my-2  placeholder-white  font-poppins  border-purple-400 text-white font-semibold w-full mb-2 px-3 py-3 rounded-md"
                  placeholder="Cardholder Name"
                />
              </div>
            ) : (
              <div className='  gap-4 mt-3'>
                <input
                  className=" bg-transparent  border-2 my-2  placeholder-white  font-poppins  border-purple-400 text-white   font-semibold w-full mb-2 px-3 py-3 rounded-md"
                  placeholder="Account Number"
                />
                <input
                  className=" bg-transparent  border-2 my-2  placeholder-white  font-poppins  border-purple-400 text-white   font-semibold w-full mb-2 px-3 py-3 rounded-md"
                  placeholder="Routing Number"
                />
              </div>
            )}
            <p className="text-white font-poppins text-[16px] mt-16 font-md mb-2">
              Type your name here to sign digitally.
            </p>
            <input
              className="bg-transparent border my-2 placeholder-white  border-purple-200 text-white font-semibold w-full mb-2 px-2 py-3 rounded"
              placeholder="Signature"
            />
          </div>
        {/* </div> */}
        <Link
  to="/credit-rent-boost"
  className="block text-center"
>
  <button
    style={{ borderRadius: '32.5px' }}
    className="font-semibold p-4 w-[85%] mx-auto bg-white text-theme sticky mt-20 bottom-0"
  >
    Submit
  </button>
</Link>
      </div>
    </div>
  );
            }

export default PaymentForm;