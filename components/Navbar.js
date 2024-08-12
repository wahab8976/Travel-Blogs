"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [blackNavText, setBlackNavText] = useState(false);

  const handleShowSearchBar = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  return (
    <nav>
      <div
        className={`${
          blackNavText ? "text-black" : "text-white"
        } absolute w-full flex font-semibold py-2 items-center justify-around bg-transparent z-40`}
      >
        <h1>
          <Link href="/">Logo Here</Link>
        </h1>
        <ul className="flex gap-8">
          <li className="hover:cursor-pointer">
            <Link href="/destination">Destination</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link href="/stories">Stories</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link href="/reviews">Reviews</Link>
          </li>
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
              showSearchBar ? "w-40 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <input
              className={`search-input text-gray-500 font-normal px-2 w-full rounded-2xl py-1 transition-opacity duration-300 ease-in-out ${
                showSearchBar ? "active" : ""
              }`}
              type="text"
              placeholder="Discover..."
            />
          </div>
          <button className="text-black bg-white rounded-3xl px-5 py-2">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
