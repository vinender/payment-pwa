import React from 'react'

export default function Card1() {
  return (
    <div className="w-[321px] relative mx-auto text-center flex flex-col backdrop-blur-lg bg-white/20 shadow-lg rounded-xl p-4">
      <img
        src="/close.png"
        className="absolute top-1 left-1  p-2 rounded-full  hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => {
          // Add your close button functionality here
        }}
      />
  
      <div className="flex flex-col space-y-4 pb-4">
        <div className="flex items-center mt-3 space-x-4 mx-auto">
          <img src="/clock.png" className="w-[34px] h-[34px] object-contain" />
          <p
            style={{ fontWeight: "" }}
            className="font-semibold whitespace-nowrap    h-[24px] text-[16px] font-poppins leading-8"
          >
            Past Rent Reporting
          </p>
        </div>
  
        <div className="flex   mx-auto space-x-1">
          <strong style={{ fontWeight: "700" }} className="text-[36px]">
            $49
          </strong>
          <div className="flex flex-col  ">
            <p className="h-[20px]"></p>
            <span className="text-gray-200 h-[3px] font-semibold text-[16px]">
              one-time
            </span>
          </div>
        </div>
  
        <div className="flex flex-col space-y-2">
          <div className="flex items-center mx-auto font-semibold text-sm text-gray-200 justify-center space-x-3">
            <span
              style={{ fontWeight: "500", lineHeight: "24px" }}
              className=" "
            >
              Past 12 months of rent reporting
            </span>
            <span className="rounded-full bg-green-600 border border-white h-4 w-4 "></span>
          </div>
  
          <div className="flex items-center mx-auto font-semibold text-sm text-gray-200 justify-center space-x-3">
            <span
              style={{
                fontWeight: "500",
                
                lineHeight: "24px",
              }}
              className=" "
            >
              Past 24 months of rent reporting
              <strong className="block text-white text-left">Best Value!</strong>
            </span>
            <span className="rounded-full bg-white h-4 w-4 "></span>
          </div>
        </div>
      </div>
    </div>
  );
}
