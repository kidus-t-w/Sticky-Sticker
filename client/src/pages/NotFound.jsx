import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold text-center">404 - Page Not Found</h1>
      <p className="text-center mt-2">
        The page you are looking for does not exist. Go back to the{' '}
        <Link to="/" className="text-blue-500 underline">Home Page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
