// src/components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-20 bg-gray-800 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">My Portfolio</h1>
        <div className="hidden md:flex space-x-8">
          {["/", "/about", "/projects", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="text-lg cursor-pointer hover:text-gray-400 transition-colors"
            >
              {path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-lg focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4`}>
        {["/", "/about", "/projects", "/contact"].map((path, index) => (
          <Link
            key={index}
            to={path}
            className="block text-lg mb-2 hover:text-gray-400 transition-colors"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            {path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
    </header>
  );
};
