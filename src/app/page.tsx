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
    <div className='flex items-center px-10'>
      <h1 className='uppercase flex-1 font-bold text-[150px] leading-30'>Paon <br/> Dadong</h1>
      <img src="/nenk1.png" alt="" className='w-[600px] ' />
    </div>
    <div className="h-[400px] bg-cover bg-top mx-10 items-center flex"
    style={{ backgroundImage: "url('/1.jpeg')" }}>
      <h1 className='text-3xl text-white italic text-center mx-auto'>"Lebih dari sekadar tempat makan kami adalah rumah rasa dan cerita, dimana Bali hadir dalam setiap piring."</h1>
    </div>
    <div className='flex p-10 justify-between items-center'>
      <div className='max-w-[40%]'>
        <h1 className='font-semibold leading-7'>
          Paon Dadong adalah rumah makan yang kami bangun dari ingatan.<br/>
          Tentang Perempuan, Tentang Representasi Sosial, Tentang Rasa.
          <br/>
          <br/>
          Kini, kami hadir di Surabaya bukan sekedar menyajikan rasa, tapi menyambutmu ke dalam rumah kami, tempat dimana rasa dan cerita diracik bersamaan
          <br/>
          Di sini, setiap piring membawa pulang sebagian dari 
        </h1>
      </div>
      <div>
        <img src="/2.jpeg" alt="" className='w-[400px]' />
      </div>
    </div>
    <div className='flex px-10 justify-between gap-4'>
      <img src="/payung.png" alt="" className='absolute left-[-180px] h-[600px] top-280' />
      <img src="/payung.png" alt="" className='absolute right-[-180px] h-[600px] top-430 scale-x-[-1]' />
      <div>
        <img src="/3.jpeg" alt=""  className='w-[700px]'/>
      </div>
      <div className='grid'>
          <img src="/logo.png" alt="" className='mt-3' />
          <img src="/4.jpeg" alt="" className='w-full h-[300px] object-cover object-[center_45%]' />
        <div className='max-w-[500px]'>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus minus enim incidunt dicta pariatur neque cumque harum atque, eum optio.</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page