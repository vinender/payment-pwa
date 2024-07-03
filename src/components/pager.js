import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageTextSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="text- p-2 h-[300px] relative ">
          <button className="bg-emerald-200 border text-black border-green-800   px-4 py-2 rounded-full border-b-4 text-sm font-bold mb-6">
          SUBSCRIBE
          </button>
          <img src={slide.image} alt={slide.text} className=" mx-auto  w-[142px] h-[142px]" />
          <p className="text-[18px] h-[60px] p-2 w-full text-gray-900 font-poppins  absolute z-50 bottom-0 px-5   bg-white text-left ">{slide.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ImageTextSlider;
