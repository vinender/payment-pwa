import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";



const ZomatoBanner = () => {
  const bannerText = "Find the best restaurants, cafés and bars in India";
  const [text,setText] = useState(bannerText)

const checkTextInput = (text)=>{
    const newText = text.replace("restaurants", "resorts")
    return newText
}

  useEffect(()=>{
    const text = checkTextInput(bannerText)
    setText(text)
},[])

  return (
    <div className="relative text-white">
{/* <FaBars size={20} className="absolute left-4 top-4 text-white z-20 md:hidden" /> */}
      <nav className="md:w-5/12 absolute top-5 left-[58%] md:flex  items-center z-20 text-base hidden ">
        <span   className="mr-6">Add Restraunt</span>
        <span   className="mr-6">Login</span>
        <span   className="mr-6">SignUp</span>
        <button className="" onClick={()=>{}}> Click Me</button>
      </nav>
      <div className="relative">
        <div className=" bg-black opacity-40 h-full w-full absolute z-10"></div>

        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt="banner"
          className="absolute top-[33%]  left-[40%] h-[80px] w-[200px] z-20 object-fill"
        />
        <img
          src="/gallery-1.jpg"
          alt="banner"
          className="h-[550px] w-screen object-fill"
        />
        <h1 className="text-3xl absolute top-[55%]  left-[26%]  w-7/12 z-20 text-center">
          {text}
        </h1>
      </div>
      <h1 className="text-black text-4xl text-center md:py-10 ">Popular locations in India flag India</h1>
    </div>
  );
};

export default ZomatoBanner;