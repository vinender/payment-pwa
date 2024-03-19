import React from 'react';

export default function Card1() {
  return (
    <div className="w-full max-w-[321px] sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 relative mx-auto text-center flex flex-col backdrop-blur-lg bg-white/20 shadow-lg rounded-xl p-4">
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%23FFFFFF' d='M18.4 5.6L12 12 5.6 5.6 4.2 7 10.6 13.4 4.2 19.8 5.6 21.2 12 14.8 18.4 21.2 19.8 19.8 13.4 13.4 19.8 7 18.4 5.6z'/%3E%3C/svg%3E"
        alt="Close Button"
        className="absolute top-4 left-4 h-[18px] w-[18px] cursor-pointer rounded-full focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => {
          // Add your close button functionality here
        }}
      />

      <div className="flex flex-col space-y-4 pb-4">
        <div className="flex items-center mt-3 space-x-4 mx-auto">
          <p
            style={{ fontWeight: "" }}
            className="font-semibold whitespace-nowrap    h-[24px] text-[16px] font-poppins leading-8"
          >
            Past Rent Reporting
          </p>
        </div>

        <div className="flex mx-auto space-x-1">
          <strong style={{ fontWeight: "700" }} className="text-[36px]">
            $49
          </strong>
          <div className="flex flex-col">
            <p className="h-[20px]"></p>
            <span className="text-gray-200 h-[3px] font-semibold text-[16px]">
              one-time
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center mx-auto font-semibold text-sm text-gray-200 justify-center space-x-3">
            <span style={{ fontWeight: "500", lineHeight: "24px" }}>
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
