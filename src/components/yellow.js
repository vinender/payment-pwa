import React, { useState, useRef, useEffect } from 'react';

const CustomSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  const handleStart = (clientX) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const diff = startX - clientX;
    setDragOffset(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    const threshold = sliderRef.current.offsetWidth / 4;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (dragOffset < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    
    const touchStart = (e) => handleStart(e.touches[0].clientX);
    const touchMove = (e) => {
      e.preventDefault(); // Prevent scrolling while dragging
      handleMove(e.touches[0].clientX);
    };
    const mouseDown = (e) => handleStart(e.clientX);
    const mouseMove = (e) => {
      if (isDragging) {
        e.preventDefault(); // Prevent selecting text while dragging
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
      className="relative w-full h-64 text-black overflow-hidden touch-none"
    >
      <div 
        className="flex h-full transition-transform duration-300 ease-out"
        style={{ 
          transform: `translateX(calc(-${currentSlide * 100}% - ${dragOffset}px))`,
          transition: isDragging ? 'none' : 'transform 300ms ease-out'
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center p-4">
            <img src={slide.icon} alt="" className="object-contain mb-4 h-[50%] w-[50%] " />
            <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
            <p className="text-sm">{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
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
            <img alt='guac' src='./demo/guac.jpeg' className='absolute -top-4  bg-white opacity-90 left-5 z-50 w-16 h-16' />
            <span className="absolute left-20 font-semibold text-xl text-black ml-4">Guac</span>
          </div>
          
          <div className='border-4 border-yellow-400 rounded-xl mt-10 overflow-hidden'>
            <div className='bg-yellow-100 p-4'>
              <img src='./demo/gold.jpeg' className="object-contain w-20 h-20 mb-4"/>
                
              <CustomSlider slides={slides} />
              <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg mt-4">
                CONTINUE
              </button>
            </div>
          </div>
          
          <div className='mt-6 text-left space-y-3 shadow-2xl shadow-slate-500 p-5 rounded-xl'>
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