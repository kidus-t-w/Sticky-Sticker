import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="bg-white p-3 rounded-md w-full">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <li key={index} className="text-gray-500">
            <Link to={item.href} className="text-blue-600 hover:underline">
              {item.label}
            </Link>
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
