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
    style={{
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
      }}
      className="relative w-full bg-[#EBECF0] border-[3.5px] border-yellow-500 rounded-2xl overflow-hidden touch-none flex flex-col h-auto mt-8" // Added mt-8 for top margin
    >
      {/* Fixed GOLD button */}
      <div className="absolute top-2 left-2 z-10">
        <img src='./demo/gold.png' className="object-contain w-16 h-16"/>
      </div>

      {/* Image container */}
      <div className="w-full bg-[#FBEFCF]   p-4 flex-shrink-0" style={{ height: '193px' }} >
        <div 
          className="flex transition-transform duration-300 ease-out h-full"
          style={{ 
            transform: `translateX(calc(-${currentSlide * 100}% - ${isDragging ? dragOffset : 0}px))`,
            transition: isDragging ? 'none' : 'transform 300ms ease-out'
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex  p-4 justify-center items-center">
              <img src={slide.icon} alt="" className="w-full h-44 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Text and button container */}
      <div className=" flex flex-col overflow-y-hidden h-60 sm:h-60  bg-yellow-50 justify-between p-4">
        <div className='overflow-y-auto ' >
          <h3 className="text-lg font-bold mb-2 text-black">
            {slides[currentSlide].title}
          </h3>
          <p className="text-sm text-gray-700  ">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 my-4">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === currentSlide ? 'bg-[#EBAE11]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* CONTINUE button */}
        <button className="w-full bg-[#EBAE11] text-white font-bold py-3 rounded-lg shadow-md" style={{
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
        }}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};


const MobileSubscriptionScreen = () => {
  const slides = [
    {
      icon: './demo/mobile.png',
      title: 'Move your money faster!',
      description: 'Withdraw funds from your Goals to Bank the same day for Free! Guac Gold includes 2 Free Rapid Withdrawals with absolutely no fees (normally 1.5%).',
    },
    {
      icon: './demo/slider2.jpeg',
      title: "It's hard to limit yourself to two savings goals!",
      description: 'Upgrade to Guac Gold & Save for Multiple Goals at the same time.',
    },
    {
      icon: './demo/slider1.jpeg',
      title: 'Monitor and Build Credit!',
      description: 'Stay on Track with access to real-time Credit Scores and Improve your Credit with Exclusive Access to Pre-Qualified Personal Loans and Offers!',
    },
  ];      

  return (
    <div className="bg-[#1837b3] flex justify-center items-center overflo h-screen">
    <div className="w-full h-full flex flex-col bg-custom-gradient text-white relative z-20">
        <div className="flex items-center justify-between p-4">
          <span className='bg-[#5ece26] rounded-lg h-8 shadow-2xl  text-center w-8'>
             <img alt='back' className='cursor-pointer p-2 shadow-2xl   rounded-lg w-7 h-7' src='/back.png' />
          </span>
          <h1 className="text-sm font-bold text-white">Achieve more with Guac Gold!</h1>
          <img alt='pwa' className='h-16 w-16' src='/pwa.png' />
        </div>
        
        <div className="flex-grow relative bg-[#EBECF0] rounded-t-3xl mt-6 p-6 flex flex-col">
          <div className="relative mb-2">
            <img alt='guac' src='./demo/guac.png' className='absolute -top-10 opacity-90 left-0 z-50 w-20 h-20' />
            <span className="absolute left-24 -top-4 font-semibold text-xl text-black">Guac</span>
          </div>
          
          <div className=" flex flex-col justify- ">
            <div className="flex-grow">
              <CustomSlider slides={slides} />
            </div>
            
            <div className=' text-left mt-6 space-y-4 shadow-2xl shadow-slate-500 p-5 rounded-xl'>
              <span className='inline-flex items-center rounded-full border bg-green-100 px-2 py-1'>
                <img className='object-contain w-16 mr-1' src='./demo/green.png' alt="Green" />
              </span>
              <p className="text-xs font-medium text-gray-500">
                You will be moved to Guac Green if you don't upgrade within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSubscriptionScreen;