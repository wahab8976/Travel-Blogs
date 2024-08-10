"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleShowSearchBar = () => {
    setShowSearchBar(prevState => !prevState);
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
        <div className="flex items-center gap-5">
          <img
            onClick={handleShowSearchBar}
            height={20}
            width={20}
            src="/searchIcon.svg"
            alt="Search"
            className="cursor-pointer"
          />
          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              showSearchBar ? 'w-40 opacity-100' : 'w-0 opacity-0'
            }`}
          >
            <input
              className="text-gray-500 font-normal px-2 w-full rounded-2xl py-1 transition-opacity duration-300 ease-in-out"
              type="text"
              placeholder="Search..."
            />
          </div>
          <button className="text-black bg-white rounded-3xl px-5 py-2">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
