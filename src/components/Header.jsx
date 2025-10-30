import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-20 bg-transparent absolute w-full overflow-x-hidden">
      <div className="flex justify-between items-center mt-4 px-4 md:px-10 py-4">
        <h1 className="md:text-4xl text-3xl font-semibold text-white whitespace-nowrap">
          <span
            className="text-black md:px-4 md:py-2 px-3 py-1"
            style={{ backgroundColor: "yellow" }}
          >
            X
          </span>{" "}
          G Y M
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-xl font-semibold mt-1 text-white">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/aboutus" className="nav-link">About Us</NavLink></li>
          <li><NavLink to="/classes" className="nav-link">Classes</NavLink></li>
          <li><NavLink to="/trainers" className="nav-link">Trainers</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black text-white text-lg font-semibold space-y-4 py-4">
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/classes" onClick={() => setMenuOpen(false)}>Classes</NavLink></li>
          <li><NavLink to="/trainers" onClick={() => setMenuOpen(false)}>Trainers</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      )}
    </header>
  );
}

export default Header;