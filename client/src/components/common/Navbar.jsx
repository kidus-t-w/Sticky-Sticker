// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/sticky_logo.png'

const Navbar = () => {
  return (
    <div>  
      <nav className="bg-orange-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex'>
            <div className='w-8 h-8 mr-5'>
              <img src={logo} alt="Logo" />
            </div>
            <Link to="/" className="text-white text-lg font-bold">Sticky Sticker</Link>
          </div>
          <div className='bg-gray-800 w-[600px] h-[50px] content-center rounded-full'>
            <ul className='flex justify-center'>
              <li className='w-[80px] hover:bg-white rounded-full text-center'>
              <Link to="/shop" className="text-gray-300 hover:text-black mx-2 w-16 h-6">Home</Link>
              </li>
              <li className='w-[80px] hover:bg-white rounded-full text-center'>
              <Link to="/about" className="text-gray-300 hover:text-black mx-2 w-16 h-6">Shop</Link>
              </li>
              <li className='w-[80px] hover:bg-white rounded-full text-center'>
              <Link to="/about" className="text-gray-300 hover:text-black mx-2 w-16 h-6">About</Link>
              </li>
              <li className='w-[120px] hover:bg-white rounded-full text-center'>
              <Link to="/about" className="text-gray-300 hover:text-black mx-2 w-16 h-6">How to Order</Link>
              </li>
              <li className='w-[80px] hover:bg-white rounded-full text-center'>
              <Link to="/about" className="text-gray-300 hover:text-black mx-2 w-16 h-6">Contact</Link>
              </li>
            </ul>
          </div>
          <div className='cart'>
            <Link to="/about" className="text-gray-300 hover:text-white mx-2">Cart</Link>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
