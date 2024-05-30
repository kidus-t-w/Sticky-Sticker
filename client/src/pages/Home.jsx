import React from 'react';
import Navbar from '../components/common/Navbar';
import StickerCard from '../components/StickerCard';

const Home = () => {
  return (
    <div>
      <Navbar />
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
