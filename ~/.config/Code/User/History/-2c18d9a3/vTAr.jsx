"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleShowSearchBar = () => {
    setShowSearchBar(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <nav>
      <div className="flex font-semibold text-white py-2 items-center justify-around bg-green-400">
        <h1>Logo Here</h1>
        <ul className="flex gap-8">
          <li className="hover:cursor-pointer">Destination</li>
          <li className="hover:cursor-pointer">Stories</li>
          <li className="hover:cursor-pointer">Reviews</li>
        </ul>
        <div>
          <div className="flex gap-5 items-center">
            <img onClick={handleShowSearchBar} height={20} width={20} src="/searchIcon.svg" alt="Search" />
            <div
              className={`flex transition-all duration-500 ease-in-out overflow-hidden ${
                showSearchBar ? 'w-[150px] opacity-100' : 'w-0 opacity-0'
              }`}
            >
              <input
                className="text-gray-500 font-normal px-2 w-full rounded-2xl py-1"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
              <div
                className={`transition-all duration-500 ease-in-out transform ${
                  inputValue.length >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
              >
                <button className="ml-2 text-white bg-blue-500 px-4 py-1 rounded-2xl">
                  Explore
                </button>
              </div>
            </div>
            <button className="text-black bg-white rounded-3xl px-5 py-2">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
