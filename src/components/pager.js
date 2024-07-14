import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slider-custom.css'; // Import your custom CSS file

const ImageTextSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <button>
        <div className="dot-custom" />
      </button>
    ),
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="text- p-2 h-[250px] sm:h-[230px] md:h-[250px] lg:h-[300px] xl:h-[350px] relative ">
          <img src={slide.image} alt={slide.text} className=" mx-auto  w-[142px] h-[142px]" />
          <p className="text-[18px] h-[60px] p-2  w-full text-gray-900 font-poppins  absolute z-50 -bottom-2 sm:-bottom-2 md:-bottom-5 px-5   bg-white text-left ">{slide.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ImageTextSlider;
