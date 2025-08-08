'use client';
import React, { ReactNode } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Applayout = ({children}:{children:ReactNode}) => {
  return (
    <div className=''>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Applayout