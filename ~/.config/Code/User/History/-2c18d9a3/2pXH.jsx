"use client"
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [showSearch,setShowBtn] = useState(true)
  
  return (
    <nav>
      <div className="flex font-semibold text-white py-2 items-center justify-around bg-green-400" >
        <h1>Logo Here</h1>
        <ul className="flex gap-8">
          <li className="hover:cursor-pointer">Destination</li>
          <li className="hover:cursor-pointer">Stories</li>
          <li className="hover:cursor-pointer">Reviews</li>
        </ul>
        <div>
          <div className="flex gap-5">
            <img  height={20} width={20} src="/searchIcon.svg" alt="" />
          <input className="w-[150px] rounded-lg py-0 " type="text" />
          <button className="text-black bg-white rounded-3xl px-5 py-2">Login</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
