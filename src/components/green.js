import React from 'react';
import ImageTextSlider from './pager';
 
const LightningIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="120" height="120" rx="20" fill="#5ACBA1"/>
    <path d="M60 25L30 55H50L40 75L70 45H50L60 25Z" fill="white"/>
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="100" height="100" rx="20" fill="#5ACBA1"/>
    <rect x="20" y="20" width="20" height="20" fill="white"/>
    <rect x="60" y="20" width="20" height="20" fill="white"/>
    <rect x="20" y="50" width="20" height="20" fill="white"/>
    <rect x="60" y="50" width="20" height="20" fill="white"/>
    <rect x="40" y="50" width="20" height="50" fill="white"/>
  </svg>
);

const ThumbsUpIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="50" fill="#5ACBA1"/>
    <path d="M30 50V80H45L55 50V30H35C30 30 25 35 25 40C25 45 30 50 35 50H30Z" fill="white"/>
  </svg>
);

const QuestionIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="50" fill="#5ACBA1"/>
    <path d="M45 65V70H55V65H45ZM55 60V55C55 50 60 45 60 40C60 30 50 25 45 25C40 25 35 30 35 35H45C45 32.5 47.5 30 50 30C52.5 30 55 32.5 55 35C55 37.5 52.5 40 50 40C47.5 40 45 42.5 45 45V60H55Z" fill="white"/>
  </svg>
);

const RefreshIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="50" fill="#5ACBA1"/>
    <path d="M70 50C70 60.5 61.5 69 51 69C40.5 69 32 60.5 32 50C32 39.5 40.5 31 51 31V41L71 31L51 21V31C35.5 31 23 43.5 23 59C23 74.5 35.5 87 51 87C66.5 87 79 74.5 79 59H70Z" fill="white"/>
  </svg>
);

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
          <img className=' cursor-pointer w-[16px] h-[16px]' src='/back.png' alt='Back' />
           {/* </div> */}
          
          <h1 className="text-[15px] xs:text-[18px] sm:text-[22px] font-bold text-emerald-50 font-poppins w-full">Love & Money, Finally in Sync.</h1>
          <img className=' h-16 w-16 mx-6' src='/pwa.png' />

        </div>

        <img src='./demo/flash.png' className='relative -top-2 left-5 z-50 w-[80px] h-[80px]' />
        
        <div className=" bg-emerald-100 text-gray-800 mx-auto rounded-t-[2rem]  absolute  bottom-0 left-0 right-0 h-[calc(100%-120px)] overflow-y-auto">
          <div className="bg-white  h-full p-6  shadow-lg">
            <div className="flex items-center mb-6">
            <img src='./demo/flash.png' className='relative -top-2 hidden left-5 z-50 w-[80px] h-[80px]' />
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