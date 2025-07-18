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
      <h1 className='text-3xl text-white italic text-center mx-auto'>&quot;Lebih dari sekadar tempat makan kami adalah rumah rasa dan cerita, dimana Bali hadir dalam setiap piring.&quot;</h1>
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
        <img src="/7.jpeg" alt=""  className='w-auto'/>
      </div>
      <div className='grid'>
        <img src="/logo.png" alt="" className='mt-3' />
        <img src="/4.jpeg" alt="" className='w-full h-[300px] object-cover object-[center_45%]' />
        <div className='max-w-[500px]'>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus minus enim incidunt dicta pariatur neque cumque harum atque, eum optio.</h1>
        </div>
      </div>
    </div>
    <div className='flex justify-between px-30'>
      <img src="/5.png" alt="" className='h-[600px]' />
      <img src="/6.png" alt="" className='h-[600px]' />
    </div>
    <div className='px-80 py-10'>
      <h1 className='text-center text-xl font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim eveniet aliquid optio quia, omnis minima exercitationem tempora. Eligendi, corrupti.
      </h1>
    </div>
    <div className='grid grid-cols-3 p-10 place-items-center gap-10'>
      <img src="/food/food1.jpeg" alt="" className='object-cover w-[450px] h-[450px] m-auto' />
      <img src="/food/food2.jpeg" alt="" className='object-cover w-[450px] h-[450px] m-auto'/>
      <img src="/food/food3.jpeg" alt="" className='object-cover w-[450px] h-[450px] m-auto'/>
      <img src="/food/food4.jpeg" alt="" className='object-cover w-[450px] h-[450px] mx-auto'/>
      <img src="/food/food5.jpeg" alt="" className='object-cover w-[450px] h-[450px] mx-auto'/>
      <img src="/food/food6.jpeg" alt="" className='object-cover w-[450px] h-[450px] mx-auto'/>
      <img src="/food/food7.jpeg" alt="" className='object-cover w-[450px] h-[450px] mx-auto'/>
      <img src="/food/food8.jpeg" alt="" className='object-cover w-[450px] h-[450px] mx-auto'/>
      <img src="/food/food9.jpeg" alt="" className='object-cover w-[450px] h-[450px] mx-auto'/>
    </div>
    <div className='px-80 mb-10'>
      <h1 className='text-center text-xl font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim eveniet aliquid optio quia, omnis minima exercitationem tempora. Eligendi, corrupti.
      </h1>
    </div>
    <div className='grid grid-cols-3 px-10 place-items-center mb-10'>
      <div className='flex flex-col'>
        <img src="/tshirt.jpeg" alt="" className='object-cover object-top w-[400px] h-[500px] rounded-2xl m-auto' />
        <h1 className='text-center font-semibold text-4xl py-5'>TSHIRT</h1>
        <h1 className='text-center text-xl mx-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, doloribus!</h1>
      </div>
      <div className='flex flex-col'>
        <img src="/totebag.jpeg" alt="" className='object-cover object-center w-[400px] h-[500px] rounded-2xl m-auto' />
        <h1 className='text-center font-semibold text-4xl py-5'>TOTEBAG</h1>
        <h1 className='text-center text-xl mx-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, doloribus!</h1>
      </div>
      <div className='flex flex-col'>
        <img src="/shirt.jpeg" alt="" className='object-cover object-top w-[400px] h-[500px] rounded-2xl m-auto' />
        <h1 className='text-center font-semibold text-4xl py-5'>SHIRT</h1>
        <h1 className='text-center text-xl mx-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, doloribus!</h1>
      </div>
    </div>
      <div className='flex bg-[#4A2B71] p-10 gap-5'>
        <div>
          <img src="/loc.png" alt="" className='w-[50vw]' />
        </div>
        <div className='flex flex-col justify-between'>
          <h1 className='text-white text-4xl font-semibold'>FIND US</h1>
          <h1 className='text-white text-xl'>Tentang</h1>
          <h1 className='text-white text-xl'>Produk</h1>
          <h1 className='text-white text-xl'>Lokasi Toko</h1>
          <h1 className='text-white text-xl'>Surat Kabar</h1>
          <h1 className='text-white text-xl'>Galeri</h1>
          <h1 className='text-white text-xl '>Jl. Ngagel Jaya Selatan III No.8, Pucang Sewu, Kec. Gubeng, Surabaya</h1>
        </div>
      </div>
    </div>
  )
}

export default page