'use client';

import Image from 'next/image';
import TrackingForm from '../trackingForm/TrackingForm';
import { useState } from 'react';
import bannerImg from '../../assets/appteaser-ma.png';

export default function Banner() {
  const [loading, setLoading] = useState(false);

  const items = [
    {
      img: 'https://i.imgur.com/Q5cj2lz.png',
      title: 'Shop',
      desc: 'Find the right service'
    },
    {
      img: 'https://i.imgur.com/nfO0Y86.png',
      title: 'Get a Quote',
      desc: 'Estimate cost to share and compare'
    },
    {
      img: 'https://i.imgur.com/36w5AaD.png',
      title: 'Request a Business Account',
      desc: 'Shipping regularly or frequently? Learn about volume discounts'
    }
  ];
  return (
    <div className="banner relative min-h-[300px] sm:min-h-[430px]">
      <div className="bg-[#11172b]/50 w-full h-full absolute top-0 left-0 right-0" />
      <div className="custom_container !px-4 sm:!p-0 !pt-10">
        <div className="relative flex justify-between pt-7">
          <div className="w-full">
            <div className="flex items-center gap-5 mb-4">
              <h5 className="text-[18px] md:text-[28px] underline underline-offset-[7px] decoration-red-500 decoration-4 text-white">Checker</h5>
            </div>
            <TrackingForm />
            <p className="text-white mt-3">Now with enhanced dining and upgraded amenities, settle in to a spacious seat and arrive ready to explore.</p>
          </div>
          <div className="w-[800px] hidden md:block max-h-[408px]"></div>
        </div>
      </div>
    </div>
  );
}
