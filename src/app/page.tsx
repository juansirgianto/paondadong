import React from 'react'

function page() {
  return (
    <div>
    <nav className='flex justify-center font-semibold text-white uppercase'>
        <div className='flex-1 text-center bg-[#AED5D4] p-[10px] cursor-pointer'>About</div>
        <div className='flex-1 text-center bg-[#D9372D] p-[10px] cursor-pointer'>Menu</div>
        <div className='flex-1 text-center bg-[#F0C23C] p-[10px] cursor-pointer'>Reserve</div>
        <div className='flex-1 text-center bg-[#4A2B71] p-[10px] cursor-pointer'>Merchendise</div>
    </nav>
    <div className='flex p-10'>
      <h1 className='uppercase flex-1 font-bold text-[80px] leading-15'>Paon <br/> Pantat 66</h1>
    </div>
    </div>
  )
}

export default page