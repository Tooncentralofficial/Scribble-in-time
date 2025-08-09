'use client';
import React, { ReactNode } from 'react'
import Navbar from './Navbar';

const Applayout = ({children}:{children:ReactNode}) => {
  return (
    <div className=''>
      <Navbar />
      {children}
    </div>
  )
}

export default Applayout