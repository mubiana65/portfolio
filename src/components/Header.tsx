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
      </nav>
    </header>
  );
};
