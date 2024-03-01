import React from 'react'

export default function Card1() {
  return (
    <div className='relative w-5/6 mx-auto text-center flex flex-col bg-white bg-opacity-20 space-y-6 shadow-lg rounded-xl p-4'>        <button
    className='absolute top-1 left-1   p-2 rounded-full text-white hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300'
    onClick={() => {
    // Add your close button functionality here
    }}
>
    X
</button>
    <div className='flex items-center space-x-4 mx-auto '>
        <img src='' className='w-10 h-10 border'/>
        <p className=' text-lg font-semibold'>Past Rent Reporting</p>
    </div>

    <div className='flex  mx-auto space-x-3'>
        <strong className='text-3xl'>$49</strong>
        <div className='flex flex-col'>
            <p className='h-3'></p>
            <span className='text-gray-200 font-semibold text-sm'>one-time</span>
        </div> 
    </div>

    <div className='flex items-center mx-2 font-semibold text-sm text-gray-200 justify-between space-x-3'>
        <p className=''>Past 12 months of rent reporting</p>
        <span className='rounded-full bg-green-600 h-4 w-4 border'></span>
    </div>

    <div className='flex items- mx-2 font-semibold text-sm text-gray-200 justify-between space-x-3'>
    <p className=''>
        Past 12 months of rent reporting
        <strong className='block text-white'>Best Value!</strong>
    </p>
         
        <span className='rounded-full bg-white h-4 w-4 border'></span>
    </div>

</div>
  )
}
