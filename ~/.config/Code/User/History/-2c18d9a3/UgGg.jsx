"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleShowSearchBar = () => {
    setShowSearchBar(true);
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
              className={`transform transition-all duration-500 ease-in-out ${
                showSearchBar ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <input className="w-[150px] rounded-lg py-1" type="text" />
            </div>
            <button className="text-black bg-white rounded-3xl px-5 py-2">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
