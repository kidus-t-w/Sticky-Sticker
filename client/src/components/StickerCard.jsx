import React from 'react';
import catagory from '../assets/img/catagory.png'
const StickerCard = ({ title, price }) => {
  return (
    <div className="border p-4 rounded shadow-md h-[250px] w-[300px] mr-[20px] ml-[20px]">
      <div className="img-catagory ">
        <img className="w-full h-full" src={ catagory } alt="" />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{price}</p>
    </div>
  );
};

export default StickerCard;
