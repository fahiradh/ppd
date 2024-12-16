/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between p-3 bg-white shadow-md">
      {/* Logo */}
      <div>
        <img src="./logo.png" alt="Dormify Logo" className="h-10" />
      </div>

      {/* Navbar dan Login Button */}
      <div className="flex items-center space-x-6 text-base font-medium font-['Poppins']">
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Features</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a>
        </nav>
        <button className="bg-[#05A3F4] text-white px-4 py-2 rounded-lg">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
