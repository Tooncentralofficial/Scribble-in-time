"use client";
import { Logo } from '@/assets'
import { Navitems } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation';

function Navbar() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // get current page route
  const diffentFoorer = ["/howitworks", "abaoutpage"]
  const pathname = usePathname()
  console.log(pathname)
  const showFooter = diffentFoorer.includes(pathname)

  return (
    <div className="navbar">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div>
          <Logo width={124} height={77} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[1.12rem] text-white">
          {Navitems.map((item, index) => (
            <Link href={`/${item.href}`} key={index}>
              {item.name}{" "}
            </Link>
          ))}
        </div>

        {/* Desktop Get Started Button */}
        <button className="hidden md:block rounded-[0px] py-[1.1rem] px-[1.5rem] bg-[#1D4ED7] text-white cursor-pointer hover:bg-[#1D4ED7]/80 transition-all duration-300">
          Get started{" "}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-black bg-opacity-90 rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            {Navitems.map((item, index) => (
              <Link 
                href={`/${item.href}`} 
                key={index}
                className="text-white hover:text-gray-200 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item.name}{" "}
              </Link>
            ))}
            <button 
              className="bg-[#1D4ED7] text-white px-6 py-3 rounded-lg hover:bg-[#1D4ED7]/80 transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar