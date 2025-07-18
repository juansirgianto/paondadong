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
      <h1 className='uppercase flex-1 font-bold sm:text-[150px] text-4xl sm:leading-30'>Paon <br/> Dadong</h1>
      {/* <img src="/nenk1.png" alt="" className='sm:w-[600px] w-[200px]' /> */}
      <img src="/paondadong/nenk1.png" alt="" className='sm:w-[600px] w-[200px]' />
    </div>
    <div className="sm:h-[400px] h-[100px] bg-cover bg-top mx-10 items-center flex"
    // style={{ backgroundImage: "url('/1.jpeg')" }}>
    style={{ backgroundImage: "url('/paondadong/1.jpeg')" }}>
      <h1 className='sm:text-3xl text-white italic text-center mx-auto'>&quot;Lebih dari sekadar tempat makan kami adalah rumah rasa dan cerita, dimana Bali hadir dalam setiap piring.&quot;</h1>
    </div>
    <div className='flex p-10 justify-between items-center'>
      <div className='max-w-[40%]'>
        <h1 className='font-semibold sm:leading-7 sm:text-base text-[8px]'>
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
        {/* <img src="/2.jpeg" alt="" className='sm:w-[400px] w-[150px]' /> */}
        <img src="/paondadong/2.jpeg" alt="" className='sm:w-[400px] w-[150px]' />
      </div>
    </div>
    <div className='flex px-10 justify-between gap-4'>
      {/* <img src="/payung.png" alt="" className='absolute sm:left-[-180px] sm:h-[600px] sm:top-280 h-[200px] left-[-50px] top-115' />
      <img src="/payung.png" alt="" className='absolute sm:right-0 sm:h-[450px] sm:top-460 h-[150px] right-0 top-150 scale-x-[-1]' /> */}
      <img src="/paondadong/payung.png" alt="" className='absolute sm:left-[-180px] sm:h-[600px] sm:top-280 h-[200px] left-[-50px] top-115' />
      <img src="/paondadong/payung.png" alt="" className='absolute sm:right-0 sm:h-[450px] sm:top-460 h-[150px] right-0 top-150 scale-x-[-1]' />
      <div>
        {/* <img src="/7.jpeg" alt=""  className='w-full'/> */}
        <img src="/paondadong/7.jpeg" alt=""  className='w-full'/>
      </div>
      <div className='grid'>
        {/* <img src="/logo.png" alt="" className='mt-3' />
        <img src="/4.jpeg" alt="" className='w-full sm:h-[300px] h-[50px] object-cover object-[center_45%]' /> */}
        <img src="/paondadong/logo.png" alt="" className='mt-3' />
        <img src="/paondadong/4.jpeg" alt="" className='w-full sm:h-[300px] h-[50px] object-cover object-[center_45%]' />
        <div className='sm:max-w-[400px] max-w-[100px]'>
          <h1 className='sm:text-base text-[8px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus minus enim incidunt dicta pariatur neque cumque harum atque, eum optio.</h1>
        </div>
      </div>
    </div>
    <div className='flex justify-between sm:px-30 px-10'>
      {/* <img src="/5.png" alt="" className='sm:h-[600px] h-[200px]' />
      <img src="/6.png" alt="" className='sm:h-[600px] h-[200px]' /> */}
      <img src="/paondadong/5.png" alt="" className='sm:h-[600px] h-[200px]' />
      <img src="/paondadong/6.png" alt="" className='sm:h-[600px] h-[200px]' />
    </div>
    <div className='sm:mx-20 mx-10 sm:p-10'>
      <h1 className='text-center sm:text-xl text-[10px] font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim eveniet aliquid optio quia, omnis minima exercitationem tempora. Eligendi, corrupti.
      </h1>
    </div>
    <div className='grid grid-cols-3 p-10 place-items-center gap-10'>
      {/* <img src="/food/food1.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] m-auto' />
      <img src="/food/food2.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] m-auto'/>
      <img src="/food/food3.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] m-auto'/>
      <img src="/food/food4.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/food/food5.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/food/food6.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/food/food7.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/food/food8.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/food/food9.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/> */}
      <img src="/paondadong/food/food1.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] m-auto' />
      <img src="/paondadong/food/food2.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] m-auto'/>
      <img src="/paondadong/food/food3.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] m-auto'/>
      <img src="/paondadong/food/food4.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/paondadong/food/food5.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/paondadong/food/food6.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/paondadong/food/food7.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/paondadong/food/food8.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
      <img src="/paondadong/food/food9.jpeg" alt="" className='object-cover sm:w-[450px] sm:h-[450px] w-[100px] h-[100px] mx-auto'/>
    </div>
    <div className='sm:mx-20 mx-10 sm:p-10 mb-5'>
      <h1 className='text-center sm:text-xl text-[10px] font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim eveniet aliquid optio quia, omnis minima exercitationem tempora. Eligendi, corrupti.
      </h1>
    </div>
    <div className='grid sm:grid-cols-3 grid-cols-2 px-10 gap-5 place-items-center mb-10'>
      <div className='flex flex-col'>
        {/* <img src="/tshirt.jpeg" alt="" className='object-cover object-top sm:w-[400px] sm:h-[500px] h-[200px] rounded-2xl m-auto' /> */}
        <img src="/paondadong/tshirt.jpeg" alt="" className='object-cover object-top sm:w-[400px] sm:h-[500px] h-[200px] rounded-2xl m-auto' />
        <h1 className='text-center font-semibold sm:text-4xl text-xl sm:py-5'>TSHIRT</h1>
        <h1 className='text-center sm:text-xl text-[10px] mx-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, doloribus!</h1>
      </div>
      <div className='flex flex-col'>
        {/* <img src="/totebag.jpeg" alt="" className='object-cover object-top sm:w-[400px] sm:h-[500px] h-[200px] rounded-2xl m-auto' /> */}
        <img src="/paondadong/totebag.jpeg" alt="" className='object-cover object-top sm:w-[400px] sm:h-[500px] h-[200px] rounded-2xl m-auto' />
        <h1 className='text-center font-semibold sm:text-4xl text-xl sm:py-5'>TOTEBAG</h1>
        <h1 className='text-center sm:text-xl text-[10px] mx-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, doloribus!</h1>
      </div>
      <div className='flex flex-col'>
        {/* <img src="/shirt.jpeg" alt="" className='object-cover object-top sm:w-[400px] sm:h-[500px] h-[200px] rounded-2xl m-auto' /> */}
        <img src="/paondadong/shirt.jpeg" alt="" className='object-cover object-top sm:w-[400px] sm:h-[500px] h-[200px] rounded-2xl m-auto' />
        <h1 className='text-center font-semibold sm:text-4xl text-xl sm:py-5'>SHIRT</h1>
        <h1 className='text-center sm:text-xl text-[10px] mx-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, doloribus!</h1>
      </div>
    </div>
      <div className='sm:flex bg-[#4A2B71] p-10 gap-5'>
        <div>
          {/* <img src="/loc.png" alt="" className='sm:w-[50vw]' /> */}
          <img src="/paondadong/loc.png" alt="" className='sm:w-[50vw]' />
        </div>
        <div className='flex-col flex justify-between'>
          <div className='flex'>
          <h1 className='text-white sm:text-4xl text-2xl font-semibold'>FIND US</h1>
          </div>
        <div className='sm:flex sm:flex-col grid grid-cols-2 justify-between'>
          <h1 className='text-white sm:text-xl text-[15px]'>Tentang</h1>
          <h1 className='text-white sm:text-xl text-[15px]'>Produk</h1>
          <h1 className='text-white sm:text-xl text-[15px]'>Lokasi Toko</h1>
          <h1 className='text-white sm:text-xl text-[15px]'>Surat Kabar</h1>
          <h1 className='text-white mb-5 sm:text-xl text-[15px]'>Galeri</h1>
        </div>
          <h1 className='text-white sm:text-xl text-[15px] sm:text-left text-center'>Jl. Ngagel Jaya Selatan III No.8, Pucang Sewu, Kec. Gubeng, Surabaya</h1>
        </div>
      </div>
    </div>
  )
}

export default page