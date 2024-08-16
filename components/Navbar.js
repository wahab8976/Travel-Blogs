"use client"; // 1. Indicates that this component should be rendered on the client side.

import React, { useState, useContext } from "react";
import Link from "next/link";
import { SidebarContext } from "@/context/SidebarContext"; // 2. Import SidebarContext to control sidebar state.

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false); // 3. State to control the visibility of the search bar.
  const [blackNavText, setBlackNavText] = useState(false); // 4. State to control the text color of the navbar.

  // 5. Function to toggle the visibility of the search bar.
  const handleShowSearchBar = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  // 6. Destructure isOpen and toggleSidebar from SidebarContext.
  const { isOpen, toggleSidebar } = useContext(SidebarContext);

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
        <ul className="gap-8 md:flex hidden">
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
          {/* 7. Search icon that toggles the search bar visibility */}
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
            {/* 8. Search input field that appears/disappears based on showSearchBar state */}
            <input
              className={`search-input text-gray-500 font-normal px-2 w-full rounded-2xl py-1 transition-opacity duration-300 ease-in-out ${
                showSearchBar ? "active" : ""
              }`}
              type="text"
              placeholder="Discover..."
            />
          </div>
          {/* 9. Login button */}
          <button className="text-black bg-white rounded-3xl px-5 py-2 md:block hidden">
            <Link href="/login">Login</Link>
          </button>
          {/* 10. Menu button to trigger sidebar */}
          <div>
            <img
              onClick={toggleSidebar}
              width={30}
              height={40}
              className="md:hidden hover:cursor-pointer"
              src="/menu.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
