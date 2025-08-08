"use client";
import { packages } from '@/constants';
import React, { useState } from 'react'
import PriceCard from './PriceCard';
import { cn } from '@/lib/utils';

function PriceSection() {
  const [selectedPackage, setSelectedPackage] = useState(0);
  return (
    <div className={cn(`bg-[#F2F2F2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-[1rem] lg:px-[8.2rem] pt-[4rem] mb-[25rem]`)}>
      {packages.map((packageItem, index) => (
        <PriceCard
          key={index}
          packageName={packageItem.name}
          features={packageItem.features}
          index={index}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
        />
      ))}
    </div>
  );
}

export default PriceSection