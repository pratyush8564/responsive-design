"use client"
import Link from 'next/link';
import React from 'react';
import Raect,{ useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
    return (
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Left section */}
              <div className="flex items-center space-x-4">
                {/* Mobile menu button */}
                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* Icon when menu is closed. */}
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* Icon when menu is open. */}
                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              
                {/* Desktop navigation links */}
                <div className="hidden md:flex md:items-center md:ml-auto space-x-4">
                  <NavLink href="/demos" title="Demos" />
                  <NavLink href="/pages" title="Pages" />
                  <NavLink href="/projects" title="Projects" />
                </div>
              </div>
             {/* Logo/Brand */}
              <div className="flex-shrink-0">
              <Link href="/" passHref legacyBehavior>
                <img className="text-xl font-bold text-white text-center mt-4" src='/logo-light.png'/>
              </Link>
            </div>
              {/* Center spacer for mobile */}
              {/* <div className="flex-1 md:flex justify-center"></div> */}
    
              {/* Right section */}
              <div className="hidden md:flex md:items-center md:space-x-4">
                <NavLink href="/blog" title="Blog" />
                <NavLink href="/blocks" title="Blocks" />
                <NavLink href="/documentation" title="Documentation" />
              </div>
            </div>
    
            {/* Mobile menu */}
            {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink href="/demos" title="Demos" />
                <NavLink href="/pages" title="Pages" />
                <NavLink href="/projects" title="Projects" />
                <NavLink href="/blog" title="Blog" />
                <NavLink href="/blocks" title="Blocks" />
                <NavLink href="/documentation" title="Documentation" />
              </div>
            </div>
            )}
          </div>
        </div>
      );
};

const NavLink = ({ href, title }:any) => {
  return (
    <Link href={href} passHref={true} legacyBehavior>
      <a className='text-white hover:text-black'>{title}</a>
    </Link>
  );
};

export default Navbar;


