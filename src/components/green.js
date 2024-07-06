import React from 'react';
import ImageTextSlider from './pager';
 

const MobileSubscriptionScreen = () => {
    const slides = [
        {
          image: '/demo/building.png',
          text: 'Sell all your accounts in one place!'
        },
        {
          image: '/demo/refresh.png',
          text: 'Account balances sync with your bank automatically'
        },
        {
          image: '/demo/like.png',
          text: 'Drag and drop to categorize transactions'
        },
        {
            image: '/demo/question.png',
            text: 'Get Priority Support'
          }
      ];


  return (
    <div className="  bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="bg-[#1B9C83] w-full  h-screen overflow-y-auto text-white relative z-20">
        
        <div className="flex items-center justify-evenly space-x-8 pt-8 p-3 ">

          {/* <div className="mb-"> */}
          <img alt='back' className=' cursor-pointer w-[16px] h-[16px]' src='/back.png'  />
           {/* </div> */}
          
          <h1 className="text-[15px] xs:text-[18px] sm:text-[22px] font-bold text-emerald-50 font-poppins w-full">Love & Money, Finally in Sync.</h1>
          <img alt='pwa' className=' h-16 w-16 mx-6' src='/pwa.png' />

        </div>

        <img alt='flash' src='./demo/flash.png' className='relative -top-2 left-5 z-50 w-[80px] h-[80px]' />
        
        <div className=" bg-emerald-100 text-gray-800 mx-auto rounded-t-[2rem]  absolute  bottom-0 left-0 right-0 h-[calc(100%-120px)] overflow-y-auto">
          <div className="bg-white  h-screen p-6  shadow-lg">
            <div className="flex items-center mb-6">
            <img alt='flash' src='./demo/flash.png' className='relative -top-2 hidden bg-white opacity-90 left-5 z-50 w-[80px] h-[80px]' />
              <span className="font-semibold relative -top-4 font-poppins left-20 text-xl">One Goal</span>
            </div>

            <div className='  border-[3.91px]   border-[#1B9C83] rounded-xl'>
                <div className='rounded-xl bg-emerald-100 p'> 
                    <button className="bg-emerald-100 border text-black border-green-800  relative top-5 left-5 px-4 py-2 rounded-full border-b-4 text-sm font-bold mb-6">
                    SUBSCRIBE
                    </button>

                    {/* <div className="bg-emerald-1200 p-6   mb-6 overflow-x-auto"> */}
                    <ImageTextSlider slides={slides} />
                    {/* </div> */}
            

            </div>
             
            <div className="space-y-3 mt-6 p-2 bg-white rounded-xl">
                <button className="w-full bg-gradient-to-r from-[#1B9C83] to-emerald-400 text-white p-4 rounded-xl text-left flex justify-between items-center">
                    <div>
                    <div className="font-poppins font-semibold text-lg">$12 / month</div>
                    <div className="text-xs font-poppins font-semibold ">Billed $12 every month, starting today</div>
                    </div>
                    <div className="w-6 h-6">
                    <img src='./demo/like.jpeg' className=' ' alt='>' />
                    </div>
                </button>
                
                <button className="w-full bg-gradient-to-r from-[#1B9C83] to-emerald-400 text-white p-4 rounded-xl text-left flex justify-between items-center">
                    <div>
                    <div className="font-poppins font-semibold text-lg">$120 / year</div>
                    <div className="text-xs font-poppins font-semibold ">Billed $120 every year, starting today</div>
                    </div>
                    <div className="w-6 h-6">
                    <img src='./demo/like.jpeg' className=' ' alt='>' />
                    </div>
                </button>
                </div>


            </div>
            <p className="text-[13px] w-full h-[40px] font-semibold text-left mt-6 mb-4 text-gray-900 px-6">
            By continuing, you are indicating that you accept our <span className='underline'>Terms of Service</span>  and <span className='underline'>Privacy Policy</span> .
          </p>
          </div>
          
          {/* <p className="text-xs text-center mt-6 mb-4 text-gray-500 px-6">
            By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default MobileSubscriptionScreen;