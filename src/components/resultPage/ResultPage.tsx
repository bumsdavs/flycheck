import { FlightDetails } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaPlane, FaPassport, FaUser, FaDollarSign, FaPhone } from 'react-icons/fa';
import { MdEventSeat, MdAttachMoney, MdMarkEmailUnread, MdAirplaneTicket } from 'react-icons/md';

interface ResultPageProps {
  flightDetails: FlightDetails;
}

export default function ResultPage({ flightDetails }: ResultPageProps) {
  const { flightNumber, airlineLogo, departure, arrival, stopover, passengerInfo, pricing } = flightDetails;

  return (
    <div className="min-h-screen bg-[#11172b] sm:p-6">
      <div className="custom_container bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center justify-between rounded-lg px-6 py-4 bg-[#11172b] text-white">
          <div className="flex items-center space-x-4">
            <Image src={airlineLogo} width={500} height={500} alt="Airline Logo" className="w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold">Flight {flightNumber}</h2>
              <p className="text-sm">
                {departure.city} ({departure.airportCode}) to {arrival.city} ({arrival.airportCode})
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full sm:max-w-max gap-5">
            <div className="sm:text-right">
              <p className="text-lg font-semibold">Seat {passengerInfo.seatNumber}</p>
              <p className="text-sm">{passengerInfo.class}</p>
            </div>
            <Link href="/" className="bg-[#192241] text-white font-bold py-2 px-4 rounded">
              Close X
            </Link>
          </div>
        </div>

        {/* Flight Details */}
        <div className="px-6 py-6">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Flight Details</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-[25px] md:gap-[50px] lg:gap-[100px]">
            {/* Departure */}
            <div className="flex items-start space-x-2">
              <FaPlaneDeparture className="text-blue-600 w-6 h-6" />
              <div>
                <p className="text-gray-600">Departure</p>
                <p className="font-semibold">
                  {departure.date} : {departure.time}
                </p>
                <p className="text-gray-600">
                  {departure.city} ({departure.airportCode})
                </p>
                <p className="text-gray-400 text-sm">Airport: {departure.airport}</p>
              </div>
            </div>
            {/* Stopover Section */}
            {stopover && (
              <div className="flex items-start space-x-2">
                <div className="flex items-start space-x-2">
                  <FaPlane className="text-yellow-500 w-6 h-6" />
                  <div>
                    <p className="text-gray-600">Stopover</p>
                    <p className="font-semibold">
                      {stopover.startTime} - {stopover.endTime}, {stopover.date}
                    </p>
                    <p className="text-gray-600">
                      {stopover.city} ({stopover.airportCode})
                    </p>
                    <p className="text-gray-400 text-sm">Airport: {departure.airport}</p>
                  </div>
                </div>
              </div>
            )}
            {/* Arrival */}
            <div className="flex items-start space-x-2">
              <FaPlaneArrival className="text-green-600 w-6 h-6" />
              <div>
                <p className="text-gray-600">Arrival</p>
                <p className="font-semibold">
                  {arrival.date} : {arrival.time}
                </p>
                <p className="text-gray-600">
                  {arrival.city} ({arrival.airportCode})
                </p>
                <p className="text-gray-400 text-sm">Airport: {arrival.airport}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Passenger Information */}
        <div className="px-6 py-6">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Passenger Information</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-700 w-5 h-5" />
              <p className="text-gray-600">
                Name: <span className="font-semibold">{passengerInfo.name}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <MdAirplaneTicket className="text-gray-700 w-5 h-5" />
              <p className="text-gray-600">
                Ticket Number: <span className="font-semibold">{passengerInfo.ticketNumber}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <MdEventSeat className="text-gray-700 w-5 h-5" />
              <p className="text-gray-600">
                Seat Number: <span className="font-semibold">{passengerInfo.seatNumber}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-700 w-5 h-5" />
              <p className="text-gray-600">
                Type: <span className="font-semibold">{passengerInfo.passengerType}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <MdMarkEmailUnread className="text-gray-700 w-5 h-5" />
              <p className="text-gray-600">
                Contact Email: <span className="font-semibold">{passengerInfo.contactInfo.email}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-700 w-5 h-5" />
              <p className="text-gray-600">
                Contact Phone: <span className="font-semibold">{passengerInfo.contactInfo.phone}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Price and Payment Details */}
        {pricing && (
          <div className="px-6 hidden py-6 bg-gray-50">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Payment Details</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MdAttachMoney className="text-gray-700 w-5 h-5" />
                <p className="text-gray-600">
                  Ticket Price: <span className="font-semibold">${pricing.ticketPrice.toFixed(2)}</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaDollarSign className="text-gray-700 w-5 h-5" />
                <p className="text-gray-600">
                  Taxes: <span className="font-semibold">${pricing.taxes.toFixed(2)}</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaDollarSign className="text-gray-700 w-5 h-5" />
                <p className="text-gray-600">
                  Total: <span className="font-bold text-lg">${pricing.total.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Footer */}
        <div className="flex justify-between rounded-lg items-center px-6 py-4 bg-[#192241] text-white"></div>
      </div>
    </div>
  );
}
