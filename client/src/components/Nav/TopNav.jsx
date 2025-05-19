import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const TopNav = () => {
  return (
    <div className="bg-white border-b border-gray-100 px-4 md:px-12 xl:px-32 shadow-sm text-gray-700">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div className="text-2xl font-bold uppercase tracking-wide text-gray-900">
          Online Store
        </div>

        {/* User & Cart */}
        <div className="flex items-center space-x-8">
          {/* User */}
          <div className="flex items-center space-x-3 hover:text-blue-600 transition">
            <FaRegUser className="text-xl" />
            <div>
              <p className="text-sm text-gray-600">Welcome</p>
              <div className="flex items-center text-sm space-x-1">
                <a href="#" className="hover:underline text-blue-500">Sign In</a>
                <span className="text-gray-400">/</span>
                <a href="#" className="hover:underline text-blue-500">Sign Up</a>
              </div>
            </div>
          </div>

          {/* Cart */}
          <div className="relative flex items-center space-x-2 hover:text-blue-600 transition">
            <FaCartShopping className="text-xl" />
            <div className="text-center">
              <div className="absolute -top-2 -right-3 h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shadow-md">
                5
              </div>
              <p className="text-sm mt-1 text-gray-600">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
