import React from 'react';

const CreditRentBoost = () => {
  return (
    <div className="relative flex flex-col items-center max-w-3xl mx-auto justify-  min-h-screen bg-theme p-4">
  <div className="bg- rounded-full p-4">
    <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
  <h2 className="text-white font-poppins font-bold text-2xl mt-6">Credit Rent Boost</h2>
  <p className="text-white font-poppins text-center mt-2">Has been added to your ASA profile.</p>
  <div className="bg-white rounded-full p-2 mt-6">
    <div className="bg-theme rounded-full w-8 h-8 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-theme"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.472-1.333 2.667-3.333 3.333.67.917 2.042 1.667 3.333 1.667C18.647 15 20 13.764 20 12c0-1.903-1.552-3.412-3.522-3.719C15.436 7.55 14.069 7 12.5 7c-1.67 0-3.134.644-4.301 1.621-1.176.978-1.944 2.338-1.944 3.924 0 1.298.489 2.483 1.289 3.394-.146.322-.25.658-.314.999-.109.571-.088 1.156.033 1.722.12.493.472.997 1.028 1.383 1.015.703 2.491.569 3.68-.243 1.188-.812 1.958-2.094 2.083-3.58.084-.991-.145-1.92-.612-2.685-.402-.657-.962-1.137-1.635-1.414zM12 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
        />
      </svg>
    </div>
  </div>
  <p className="text-white font-poppins text-center mt-4">
    There may be additional <br /> questions to ensure the <br /> best results for you.
  </p>
  <div className="bg-white rounded-full p-2 mt-6">
    <div className="bg-theme rounded-full w-8 h-8 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        />
      </svg>
    </div>
  </div>
  <p className="text-white font-poppins text-center mt-4">
    We will also provide a <br /> portal for you to log into <br /> and see real time updates.
  </p>
  <button className="sticky bottom-0 text-white font-bold py-2 px-4 rounded-full mt-8">
    Close
  </button>
</div>
  );
};

export default CreditRentBoost;