import React from 'react';
import Navbar from '../components/common/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <p className="mt-4">
          Welcome to Sticker Shop! We are passionate about creating unique and decorative stickers that add personality to your belongings. Our mission is to provide high-quality stickers that bring joy and creativity to your everyday life.
        </p>
        <p className="mt-4">
          Our team is dedicated to designing and producing stickers that cater to various tastes and preferences. Whether you're looking for something fun, inspirational, or stylish, we have something for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
