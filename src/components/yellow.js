import React, { useState, useRef, useEffect } from 'react';

const CustomSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleStart = (clientX) => {
    startXRef.current = clientX;
    setIsDragging(true);
    console.log('drag started');
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const diff = startXRef.current - clientX;
    dragOffsetRef.current = diff;
    console.log('Dragging, offset:', diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    console.log('is DRAGGING', isDragging);
    console.log('Drag ended, final offset:', dragOffsetRef.current);

    const threshold = sliderRef.current.offsetWidth / 3;
    console.log('threshold', threshold);
    console.log('dragOffset', dragOffsetRef.current);
    console.log('dragOffset > threshold', Math.abs(dragOffsetRef.current) > threshold);

    if (Math.abs(dragOffsetRef.current) > threshold) {
      if (dragOffsetRef.current > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
        console.log('Moving to next slide');
      } else if (dragOffsetRef.current < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
        console.log('Moving to previous slide');
      } else {
        console.log('At the end of slides, cannot move further');
      }
    } else {
      console.log('Drag distance not enough to change slide');
    }

    setIsDragging(false);
    dragOffsetRef.current = 0;
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    
    const touchStart = (e) => handleStart(e.touches[0].clientX);
    const touchMove = (e) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const mouseDown = (e) => handleStart(e.clientX);
    const mouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        handleMove(e.clientX);
      }
    };
    const mouseUp = handleEnd;

    slider.addEventListener('touchstart', touchStart, { passive: false });
    slider.addEventListener('touchmove', touchMove, { passive: false });
    slider.addEventListener('touchend', handleEnd);
    slider.addEventListener('mousedown', mouseDown);
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      slider.removeEventListener('touchstart', touchStart);
      slider.removeEventListener('touchmove', touchMove);
      slider.removeEventListener('touchend', handleEnd);
      slider.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, [isDragging, slides.length]);


  return (
    <div 
      ref={sliderRef}
      className="relative w-full bg-yellow-50 mt-12 border-4 border-yellow-400 rounded-lg overflow-hidden touch-none"
    >
      {/* Fixed GOLD button */}
      <div className="absolute top-2 left-2 z-10">
        <img src='./demo/gold.jpeg' className="object-contain w-20 h-20 mb-4"/>
      </div>

      {/* Sliding content */}
      <div 
        className="flex transition-transform relative -top-8 duration-300 w-full ease-out py-4"
        style={{ 
          transform: `translateX(calc(-${currentSlide * 100}% - ${isDragging ? dragOffset : 0}px))`,
          transition: isDragging ? 'none' : 'transform 300ms ease-out'
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center p-4">
            <img src={slide.icon} alt="" className="w-full h-42 bg-yellow-200 object-contain mb-4" />
            <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-2 text-black text-left">{slide.title}</h3>
            <p className="text-xs sm:text-sm text-gray-800 font-poppins text-left">{slide.description}</p>
          </div>
        ))}
      </div>

      {/* Fixed CONTINUE button */}
      <div className="p-2 bottom-2 left- mx-auto right-4 z-10">
        <button className="w-full mx-auto bg-yellow-500 text-white font-bold py-2 rounded-lg">
          CONTINUE
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};


const MobileSubscriptionScreen = () => {
  const slides = [
    {
      icon: './demo/mobile.jpeg',
      title: 'Move your money faster!',
      description: 'Withdraw funds from your Goals to Bank the same day for Free! Guac Gold includes 2 Free Rapid Withdrawals with absolutely no fees (normally 1.5%).',
    },
    {
      icon: './demo/slider2.jpeg',
      title: "It's hard to limit yourself to two savings goals!",
      description: 'Upgrade to Guac Gold & Save for Multiple Goals at the same time.',
    },
    {
      icon: './demo/slider2.jpeg',
      title: 'Monitor and Build Credit!',
      description: 'Stay on Track with access to real-time Credit Scores and Improve your Credit with Exclusive Access to Pre-Qualified Personal Loans and Offers!',
    },
  ];

  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="w-full h-screen overflow-y-auto bg-custom-gradient text-white relative z-20" 
      // style={{ background: 'linear-gradient(180deg, #3AB100 0%, #BAE101 100%)' }}
      >
        <div className="flex items-center justify-evenly space-x-3 p-4">
          <span className='bg-button-gradient rounded-lg h-7 shadow-2xl  text-center w-7'>
             <img alt='back' className='cursor-pointer p-2 shadow-2xl shadow-slate-700   rounded-lg w-7 h-7' src='/back.png' />
          </span>
          <h1 className="text-sm font-bold text-white">Achieve more with Guac Gold!</h1>
          <img alt='pwa' className=' h-16 w-16 mx-6' src='/pwa.png' />
        </div>
        
        <div className=" relative bg-white rounded-t-3xl mt-4 p-6 h-[calc(100%-6rem)]">
          <div className="flex items-center mb-6">
            <img alt='guac' src='./demo/guac.jpeg' className='absolute -top-4  bg-white opacity-90 left-5 z-50 w-20 h-20' />
            <span className="absolute left-24 font-semibold text-xl text-black ml-4">Guac</span>
          </div>
          
          {/* <div className='border-4 border-yellow-400 rounded-xl mt-12 overflow-hidden'>
            <div className='bg-yellow-100 p-4'>
              <img src='./demo/gold.jpeg' className="object-contain w-20 h-20 mb-4"/> */}
                
              <CustomSlider slides={slides} />
              {/* <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg mt-4">
                CONTINUE
              </button>
            </div>
          </div> */}
          
          <div className='mt-4 sm:mt-6 text-left space-y-3 shadow-2xl shadow-slate-500 p-5 rounded-xl'>
            <span className='inline-flex items-center rounded-full border   bg-green-100 px-2 py-1'>
              <img className='object-contain w-20  mr-1' src='./demo/green.jpeg' alt="Green" />
              {/* <p className='text-xs font-semibold text-black'>GREEN</p> */}
            </span>
            <p className="text-xs font-medium text-gray-500">
              You will be moved to Guac Green if you don't upgrade within 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSubscriptionScreen;