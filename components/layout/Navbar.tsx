"use client";
import { Logo } from '@/assets'
import { Navitems } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation';

function Navbar() {
  // get current page route
  const diffentFoorer=["/howitworks","abaoutpage"]
  const pathname = usePathname()
  console.log(pathname)
  const showFooter = diffentFoorer.includes(pathname)
  return (
    <div className="navbar">
      <div>
        <Logo width={124} height={77} />
      </div>

      <div className=" hidden md:flex items-center gap-[1.12rem] text-white ">
        {Navitems.map((item, index) => (
          <Link href={`/${item.href}`} key={index}>
            {item.name}{" "}
          </Link>
        ))}
      </div>

      <button className="hidden md:block rounded-[0px] py-[1.1rem] px-[1.5rem] bg-[#1D4ED7] text-white cursor-pointer hover:bg-[#1D4ED7]/80 transition-all duration-300">
        Get started{" "}
      </button>
    </div>
  );
}

export default Navbar