"use client";

import React, { useState, useRef } from 'react';
import logo from "../../assets/(home)/logo.png";
import Image from 'next/image';
import { IoSearchOutline } from "react-icons/io5";
import { Input } from '@/components/ui/input';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  // Ref to keep track of menu container
  const menuRef = useRef<HTMLDivElement>(null);

  // Handlers to open and close the menu
  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 300); // Delay before hiding the menu
    setHideTimeout(timeout);
  };

  // For search bar
  const [isInputVisible, setInputVisible] = useState(false);
  const handleIconClick = () => setInputVisible(!isInputVisible);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center p-3">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Image src={logo} alt='logo' className='h-10 w-auto' />

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu size={24} />
        </button>

        {/* Menu Items */}
        <ul className={`lg:flex lg:space-x-7 lg:items-center lg:justify-center space-y-4 lg:space-y-0 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
          <li>
            <a href="/" className="font-normal text-slate-300 hover:text-slate-50 focus:text-slate-50">Home</a>
          </li>

          <li className="relative">
            <div
              className="relative inline-block text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="inline-flex items-center justify-center gap-x-1.5 border-none font-normal text-slate-300 hover:text-slate-50"
                id="menu-button"
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
              >
                Articles
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                ref={menuRef}
                className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isMenuOpen ? 'block' : 'hidden'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <a
                    href="/pages/articles/programming"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Programming
                  </a>
                  <a
                    href="cryptocurrency"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Cryptocurrency
                  </a>
                  <a
                    href="/pages/articles/technologies"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    Technologies
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a className='font-normal text-slate-300 hover:text-slate-50' href="/pages/deals">Deals</a>
          </li>
          <li>
            <a className='font-normal text-slate-300 hover:text-slate-50' href="#">About</a>
          </li>
          <li>
            <a className='font-normal text-slate-300 hover:text-slate-50' href="#">Contact</a>
          </li>
          {/* Search Icon and searchbar */}
          {!isInputVisible ? (
            <li>
              <IoSearchOutline
                className='cursor-pointer text-white'
                onClick={handleIconClick}
              />
            </li>
          ) : (
            <li>
              <Input type="text" className='bg-white text-black' placeholder='Search..' />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
