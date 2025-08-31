"use client";
import { BlackLogo, Logo } from '@/assets'
import { Navitems } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function Navbar() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // get current page route
  const pathname = usePathname()
  console.log(pathname)
  const showBlack = pathname === "/contact"

  return (
    <div className="navbar">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div>
          {
            showBlack ? <BlackLogo width={124} height={77} fill="black" /> : <Logo width={124} height={77} />
          }
        </div>

        {/* Desktop Navigation */}
        <div className={cn("hidden md:flex items-center gap-[1.12rem] text-white" ,showBlack && "text-black")}>
          {Navitems.map((item, index) => (
            <Link href={`/${item.href}`} key={index}>
              {item.name}{" "}
            </Link>
          ))}
        </div>

        {/* Desktop Get Started Button */}
        <Link href="/contact" className="hidden md:block rounded-[0px] py-[1.1rem] px-[1.5rem] bg-[#1D4ED7] text-white cursor-pointer hover:bg-[#1D4ED7]/80 transition-all duration-300">
          Get started{" "}
        </Link>

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
        <div className="md:hidden mt-4 bg-black bg-opacity-95 rounded-lg p-6 shadow-2xl">
          <div className="flex flex-col space-y-6">
            {Navitems.map((item, index) => (
              <Link 
                href={item.href ? `/${item.href}` : '#'} 
                key={index}
                className="text-white hover:text-blue-300 transition-colors py-3 text-lg font-medium border-b border-gray-700 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <Link 
                href="/contact"
                className="bg-[#1D4ED7] text-white px-6 py-4 rounded-lg hover:bg-[#1D4ED7]/80 transition-colors text-center block font-semibold"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar