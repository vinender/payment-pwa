import React from 'react'

export default function Card1() {


  return (
    <div className='relative w-[321px] h-[245px] mx-auto text-center flex flex-col bg-white bg-opacity-20 space-y-4 shadow-lg rounded-xl p-'>        <button
    className='absolute top-1 left-1  font-poppins p-2 rounded-full text-white hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300'
    onClick={() => {
    // Add your close button functionality here
    }}
>
    X
</button>
    <div className='flex items-center space-x-4 mx-auto '>
        <img src='/clock.png' className='w-[34px] h-[34px] '/>
        <p className='font-semibold text-base font-poppins leading-8 '>
            Past Rent Reporting</p>
    </div>

    <div className='flex w-[164px] h-[24px] mx-auto space-x-1'>
        <strong style={{fontWeight: '700'}} className='text-[36px]'>$49</strong>
        <div className='flex flex-col h-[24px]'>
            <p className='h-[20px]'></p>
            <span className='text-gray-200 h-[3px] font-semibold text-[16px]'>one-time</span>
        </div> 
    </div>

    <div className='flex items-center mx-2 font-semibold text-sm text-gray-200 justify-between space-x-3'>
        <p style={{fontWeight: '500', width:'222px' ,height: '24px', lineHeight:'24px'}} 
           className=''>
            Past 12 months of rent reporting
        </p>
        <span className='rounded-full bg-green-600 h-4 w-4 border'></span>
    </div>

    <div className='flex items- mx-2 font-semibold text-sm text-gray-200 justify-between space-x-3'>
        <p style={{fontWeight: '500', width:'222px' ,height: '24px', lineHeight:'24px'}} className=''>
             Past 12 months of rent reporting
            <strong className='block text-white'>Best Value!</strong>
        </p>
        <span className='rounded-full bg-white h-4 w-4 border'></span>
    </div>

</div>
  )
}
