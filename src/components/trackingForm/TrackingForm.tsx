// components/TrackingForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TrackingForm() {
  const [flightNumber, setFlightNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    // Simulate an async operation
    setTimeout(() => {
      setLoading(false);
      router.push(`/track?flightNumber=${flightNumber}`);
    }, 2000);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-2 md:flex-row items-center">
        <input
          type="text"
          id="flightNumber"
          className="w-full outline-none text-base placeholder:text-sm placeholder:text-[#3b3b3b] border-none h-[60px] py-2 pr-[120px] rounded p-3"
          placeholder="Enter your flight number"
          value={flightNumber}
          onChange={e => setFlightNumber(e.target.value)}
          required
        />
        <button type="submit" className="absolute right-0 top-0 w-[100px] h-[60px] bg-[#d40511] hover:bg-[#eb131e] text-base font-semibold text-white rounded-r" disabled={loading}>
          {loading ? 'Checking...' : 'Check'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </div>
  );
}
