import React from 'react';

const StickerCard = ({ title, price }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{price}</p>
    </div>
  );
};

export default StickerCard;
