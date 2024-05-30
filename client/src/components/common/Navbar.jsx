// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Sticker Shop</Link>
        <div>
          <Link to="/shop" className="text-gray-300 hover:text-white mx-2">Shop</Link>
          <Link to="/about" className="text-gray-300 hover:text-white mx-2">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
