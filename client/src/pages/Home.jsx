import React from 'react';
import Navbar from '../components/common/Navbar';
import StickerCard from '../components/StickerCard';
import Logo from '../assets/img/sticky_logo.png'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto flex justify-between items-center  h-[500px] flex text-black'>{/*Hero section*/}
        <div className='header w-[700px] ml-10 w-1/2'>
          <h1 className='text-7xl mb-8'>Express, Impress, and <b className='text-red-800'>Stick</b></h1>
          <div className='tagline mb-8'>Transform your ideas into vibrant, custom <b className='text-red-800'>stickers</b> with <b className='text-red-800'>Sticky Stickers</b></div>
          <button className='bg-red-900 text-white hover:bg-black hover:text-white w-[300px] h-[48px] rounded-full'>Order Now</button>
        </div>
        <div className="company_info">
          <div className="stickers"></div>
          <div className="partners"></div>
          <div className="partners"></div>
        </div>
        <div className='hero_picture flex mr-10 w-1/2 items-center justify-center space-x-8 p-[15px] mr-[10px]'>
          <div className="column_1 relative w-[200px] h-[250px] rounded-full">
            <img className="absolute inset-0 w-full h-full object-cover rounded-full" src={Logo} alt="" />
          </div>
          <div className="column_2">
            <div className="row_1 relative w-[100px] h-[100px] rounded-full">
            <img className="absolute inset-0 w-full h-full object-cover rounded-full" src={Logo} alt="" />
            </div>
            <div className="row_2 relative w-[100px] h-[200px]">
            <img className="absolute insert-0 w-full h-full objet-cover rounded-full" src={Logo} alt="" />
            </div>
          </div>
          <div className="column_3">
            <div className="row_1 w-[200px]">
            <img src={Logo} alt="" />
            </div>
            <div className="row_2 w-[200px]">
            <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-center">Welcome to Sticker Shop</h1>
        <p className="text-center mt-2">Explore our unique collection of decorative stickers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {/* Example sticker card */}
          <StickerCard title="Cool Sticker" price="$5.00" />
          <StickerCard title="Awesome Sticker" price="$7.00" />
          <StickerCard title="Funky Sticker" price="$4.00" />
          <StickerCard title="Stylish Sticker" price="$6.00" />
        </div>
      </div>
    </div>
  );
};

export default Home;
