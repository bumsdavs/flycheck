// components/TrackFlight.tsx
'use client';

import React, { useEffect, useState, Suspense } from 'react';
import ResultPage from '../resultPage/ResultPage';
import { FlightDetails } from '@/utils/types';
import { flightData } from '../resultPage/mockData/MockData';
import { useSearchParams } from 'next/navigation';
import Loader from '../loader/Loader';
import FlightDetailsNotFound from '../notFound/FlightDetailsNotFound';

function TrackFlight() {
  const [flightDetails, setFlightDetails] = useState<FlightDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const query = searchParams.get('query');

 useEffect(() => {
  if (query) {
    const foundFlight = flightData.find(flight =>
      flight.flightNumber?.toLowerCase() === query.toLowerCase() ||
      flight.passengerInfo?.confirmationNumber?.toLowerCase() === query.toLowerCase() ||
      flight.returnFlight?.passengerInfo?.confirmationNumber?.toLowerCase() === query.toLowerCase()
    );

    if (foundFlight) {
      setFlightDetails(foundFlight);
      setError(null);
    } else {
      setFlightDetails(null);
      setError('Flight not found');
    }
  }
}, [query]);

  return (
    <div>
      {error && <FlightDetailsNotFound />}
      {flightDetails ? <ResultPage flightDetails={flightDetails} /> : !error && <Loader />}
    </div>
  );
}

export default function TrackFlightWrapper() {
  return (
    <Suspense fallback={<Loader />}>
      <TrackFlight />
    </Suspense>
  );
}
