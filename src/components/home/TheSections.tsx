import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function TheSections() {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="custom_container !mt-10">
        <h2 className="text-2xl text-center font-bold mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p>Get live updates on flight statuses and changes.</p>
          </div>
          <div className="bg-white p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Detailed Information</h3>
            <p>Access comprehensive details including gate numbers, delays, and more.</p>
          </div>
          <div className="bg-white p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
            <p>Enjoy a clean and easy-to-navigate interface for quick checks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
