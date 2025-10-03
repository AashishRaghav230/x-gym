import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // icons for hamburger

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-20 bg-transparent absolute">
      <div className="flex justify-between mt-4 items-center px-6 py-4 md:px-10">
        <h1 className="md:text-4xl text-3xl font-semibold text-white">
          <span className="text-black md:px-4 md:py-2 px-3 py-1"style={{ backgroundColor: "yellow" }}>X</span> G Y M
        </h1>
        <ul className="hidden md:flex space-x-10 text-xl font-semibold mt-1 text-white">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes" className="nav-link">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/trainers" className="nav-link">
              Trainers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black text-white text-lg font-semibold space-y-4 py-4">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" onClick={() => setMenuOpen(false)} className="nav-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes" onClick={() => setMenuOpen(false)} className="nav-link">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/trainers" onClick={() => setMenuOpen(false)} className="nav-link">
              Trainers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
