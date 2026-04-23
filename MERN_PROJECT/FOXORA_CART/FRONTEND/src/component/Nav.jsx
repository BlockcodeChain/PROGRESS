import React, { useState } from "react"
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa"

const Nav = () => {

  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="w-full bg-white px-6 py-3 flex items-center justify-between shadow">

      {/* Logo */}
      <h1 className="text-xl font-bold">OneCart</h1>

      {/* Links */}
      <div className="hidden md:flex gap-6">
        <p className="cursor-pointer">HOME</p>
        <p className="cursor-pointer">COLLECTIONS</p>
        <p className="cursor-pointer">ABOUT</p>
        <p className="cursor-pointer">CONTACT</p>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-5 relative">

        {/* 🔍 Search Icon */}
        <FaSearch
          className="cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />

        {/* 👤 User */}
        <FaUser className="cursor-pointer" />

        {/* 🛒 Cart */}
        <FaShoppingCart className="cursor-pointer" />

        {/* 🔥 Search Input */}
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="absolute top-10 right-0 border px-3 py-1 rounded"
          />
        )}

      </div>

    </div>
  )
}

export default Nav