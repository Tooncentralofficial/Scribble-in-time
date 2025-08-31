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
          className={cn("md:hidden text-white p-2", showBlack && "text-black")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Menu Content - Positioned as a modal */}
          <div className="absolute top-16 left-4 right-4 bg-[#4F46E5] rounded-lg shadow-2xl max-w-sm mx-auto">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-blue-400">
              <div>
                <Logo width={100} height={60} />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col p-4 space-y-4">
              {/* Services - First item as shown in Figma */}
              <Link
                href="#"
                className="text-white text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              
              {/* How it works */}
              <Link
                href="/how-it-works"
                className="text-white text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </Link>
              
              {/* About Us */}
              <Link
                href="/about-us"
                className="text-white text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* FAQs */}
              <Link
                href="/faq"
                className="text-white text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              
              {/* Pricing */}
              <Link
                href="/pricing"
                className="text-white text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar