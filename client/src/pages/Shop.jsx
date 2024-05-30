import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import StickerCard from '../components/StickerCard';
import axios from 'axios';

const Shop = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    // Fetch stickers from the API
    axios.get('/api/stickers')
      .then(response => setStickers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-center">Shop Stickers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {stickers.map(sticker => (
            <StickerCard key={sticker.id} title={sticker.title} price={`$${sticker.price}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
