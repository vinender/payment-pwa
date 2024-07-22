import React, { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden relative h-64">
        <div
          className="whitespace-nowrap transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="inline-block w-full h-20 object-contain bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">{slides[currentIndex].heading}</h2>
        <p className="text-sm">{slides[currentIndex].paragraph}</p>
      </div>
    </div>
  );
};

export default Slider;
