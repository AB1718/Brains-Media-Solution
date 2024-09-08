import React, { useState } from 'react';
import Logo from '../assets/Logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 w-full shadow-lg bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-bold">
            <img 
              height={80}
              width={150}
              src={Logo}
              alt="Logo"
            />
          </a>
        </div>

        {/* Navigation links (hidden on small screens, shown on medium and up) */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 text-xl">
            <li>
              <a
                href="#about"
                className="text-white hover:scale-115 hover:font-bold active:underline transition duration-300 ease-in-out transform"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#mission"
                className="text-white hover:scale-115 hover:font-bold active:underline transition duration-300 ease-in-out transform"
              >
                Mission
              </a>
            </li>
            <li>
              <a
                href="#vision"
                className="text-white hover:scale-115 hover:font-bold active:underline transition duration-300 ease-in-out transform"
              >
                Vision
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white hover:scale-115 hover:font-bold active:underline transition duration-300 ease-in-out transform"
              >
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Button (hidden on small screens, shown on medium and up) */}
        <div className="hidden md:block">
          <a 
            href="#contactus" 
            className="bg-black text-white border border-yellow-500 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-500 hover:text-black"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu button (shown on small screens, hidden on medium and up) */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {/* Hamburger menu icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (shown only when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 mx-auto">
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="#about"
                className="block text-black hover:scale-105 transition duration-300 ease-in-out transform"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#mission"
                className="block text-black hover:scale-105 transition duration-300 ease-in-out transform"
              >
                Mission
              </a>
            </li>
            <li>
              <a
                href="#vision"
                className="block text-black hover:scale-105 transition duration-300 ease-in-out transform"
              >
                Vision
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-black hover:scale-105 transition duration-300 ease-in-out transform"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contactus"
                className="block text-black hover:scale-105 transition duration-300 ease-in-out transform"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
