import { FlightDetails } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaPlane,
  FaPassport,
  FaUser,
  FaDollarSign,
  FaPhone,
  FaTimes,
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import {
  MdEventSeat,
  MdAttachMoney,
  MdMarkEmailUnread,
  MdAirplaneTicket,
  MdFlightTakeoff,
  MdFlightLand,
} from 'react-icons/md';

interface ResultPageProps {
  flightDetails: FlightDetails;
}

function FlightTimeline({
  departure,
  stopover,
  arrival,
}: {
  departure: any;
  stopover?: any;
  arrival: any;
}) {
  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden md:flex items-center justify-between relative px-4">
        {/* Timeline line */}
        <div className="absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500" />

        {/* Departure */}
        <div className="relative z-10 flex flex-col items-center text-center bg-white px-3">
          <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center mb-3">
            <FaPlaneDeparture className="text-blue-600 w-5 h-5" />
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Departure</p>
          <p className="font-bold text-gray-800 text-sm mt-1">{departure.time}</p>
          <p className="text-xs text-gray-500 mt-0.5">{departure.date}</p>
          <div className="mt-2 px-3 py-1.5 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-800 text-sm">{departure.airportCode}</p>
            <p className="text-[11px] text-gray-500">{departure.city}</p>
            {departure.airport && (
              <p className="text-[10px] text-gray-400 mt-0.5">{departure.airport}</p>
            )}
          </div>
        </div>

        {/* Stopover */}
        {stopover && (
          <div className="relative z-10 flex flex-col items-center text-center bg-white px-3">
            <div className="w-12 h-12 rounded-full bg-yellow-50 border-2 border-yellow-400 flex items-center justify-center mb-3">
              <FaPlane className="text-yellow-500 w-5 h-5" />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Stopover</p>
            <p className="font-bold text-gray-800 text-sm mt-1">
              {stopover.startTime} - {stopover.endTime}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{stopover.date}</p>
            <div className="mt-2 px-3 py-1.5 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-800 text-sm">{stopover.airportCode}</p>
              <p className="text-[11px] text-gray-500">{stopover.city}</p>
              {stopover.airport && (
                <p className="text-[10px] text-gray-400 mt-0.5">{stopover.airport}</p>
              )}
            </div>
          </div>
        )}

        {/* Arrival */}
        <div className="relative z-10 flex flex-col items-center text-center bg-white px-3">
          <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center mb-3">
            <FaPlaneArrival className="text-green-600 w-5 h-5" />
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Arrival</p>
          <p className="font-bold text-gray-800 text-sm mt-1">{arrival.time}</p>
          <p className="text-xs text-gray-500 mt-0.5">{arrival.date}</p>
          <div className="mt-2 px-3 py-1.5 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-800 text-sm">{arrival.airportCode}</p>
            <p className="text-[11px] text-gray-500">{arrival.city}</p>
            {arrival.airport && (
              <p className="text-[10px] text-gray-400 mt-0.5">{arrival.airport}</p>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-0">
        {/* Departure */}
        <div className="flex items-start gap-4 relative">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center flex-shrink-0">
              <FaPlaneDeparture className="text-blue-600 w-4 h-4" />
            </div>
            <div className="w-0.5 h-full bg-blue-200 min-h-[60px]" />
          </div>
          <div className="pb-6 flex-1">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Departure</p>
            <p className="font-bold text-gray-800">{departure.time} &middot; {departure.date}</p>
            <p className="text-sm text-gray-600 mt-1">
              {departure.airportCode} &mdash; {departure.city}
            </p>
            {departure.airport && (
              <p className="text-xs text-gray-400 mt-0.5">{departure.airport}</p>
            )}
          </div>
        </div>

        {/* Stopover */}
        {stopover && (
          <div className="flex items-start gap-4 relative">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-50 border-2 border-yellow-400 flex items-center justify-center flex-shrink-0">
                <FaPlane className="text-yellow-500 w-4 h-4" />
              </div>
              <div className="w-0.5 h-full bg-yellow-200 min-h-[60px]" />
            </div>
            <div className="pb-6 flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Stopover</p>
              <p className="font-bold text-gray-800">
                {stopover.startTime} - {stopover.endTime} &middot; {stopover.date}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {stopover.airportCode} &mdash; {stopover.city}
              </p>
              {stopover.airport && (
                <p className="text-xs text-gray-400 mt-0.5">{stopover.airport}</p>
              )}
            </div>
          </div>
        )}

        {/* Arrival */}
        <div className="flex items-start gap-4 relative">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center flex-shrink-0">
              <FaPlaneArrival className="text-green-600 w-4 h-4" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Arrival</p>
            <p className="font-bold text-gray-800">{arrival.time} &middot; {arrival.date}</p>
            <p className="text-sm text-gray-600 mt-1">
              {arrival.airportCode} &mdash; {arrival.city}
            </p>
            {arrival.airport && (
              <p className="text-xs text-gray-400 mt-0.5">{arrival.airport}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  iconColor,
  label,
  value,
  bold,
}: {
  icon: React.ElementType;
  iconColor: string;
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${iconColor}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        <p className={`text-sm ${bold ? 'font-bold text-gray-900 text-base' : 'font-semibold text-gray-800'}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  iconColor,
  label,
  value,
}: {
  icon: React.ElementType;
  iconColor: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${iconColor}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-800 truncate">{value}</p>
      </div>
    </div>
  );
}

export default function ResultPage({ flightDetails }: ResultPageProps) {
  const {
    flightNumber,
    airlineName,
    isSample,
    airlineLogo,
    departure,
    arrival,
    stopover,
    passengerInfo,
    pricing,
    returnFlight,
  } = flightDetails;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-6 px-4 sm:px-6">
      <div className="max-w-[860px] mx-auto">
        {/* Fake Watermark */}
        {isSample && (
          <div className="mb-4 text-center">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest rounded-full border border-amber-200">
              Sample Document &mdash; Not Valid for Travel
            </span>
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Header Band */}
          <div className="bg-gradient-to-r from-[#11172b] to-[#1a2744] text-white">
            <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-xl p-2 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={airlineLogo}
                    width={200}
                    height={200}
                    alt={airlineName || 'Airline Logo'}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm text-slate-300 font-medium">{airlineName}</p>
                  <h2 className="text-xl font-bold tracking-tight">Flight {flightNumber}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {departure.city} ({departure.airportCode}) &rarr; {arrival.city} ({arrival.airportCode})
                    {returnFlight && (
                      <>
                        {' '}&middot;{' '}
                        {returnFlight.departure.city} ({returnFlight.departure.airportCode}) &rarr; {returnFlight.arrival.city} ({returnFlight.arrival.airportCode})
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <div className="flex items-center gap-2 justify-end">
                    <MdEventSeat className="w-4 h-4 text-slate-400" />
                    <span className="font-bold text-lg">
                      {passengerInfo.seatNumber}
                      {returnFlight?.passengerInfo?.seatNumber && ` / ${returnFlight.passengerInfo.seatNumber}`}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{passengerInfo.class}</p>
                </div>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-semibold py-2 px-4 rounded-lg"
                >
                  <FaTimes className="w-3 h-3" />
                  Close
                </Link>
              </div>
            </div>

            {/* Dashed separator */}
            <div className="border-t border-dashed border-white/20" />
          </div>

          {/* Ticket Body */}
          <div className="px-6 py-6 space-y-7">

            {/* Flight Timeline */}
            <section>
              <SectionHeader icon={MdFlightTakeoff} title="Flight Route" />
              <div className="mt-4 bg-slate-50 rounded-xl p-5 border border-slate-100">
                <FlightTimeline departure={departure} stopover={stopover} arrival={arrival} />
              </div>
            </section>

            {/* Passenger Information */}
            <section>
              <SectionHeader icon={FaPassport} title="Passenger Information" />
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Primary Passenger Card */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaUser className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">Primary Passenger</p>
                  </div>
                  <div className="space-y-0">
                    {passengerInfo.name && (
                      <InfoRow icon={FaUser} iconColor="bg-slate-100 text-slate-600" label="Full Name" value={passengerInfo.name} />
                    )}
                    {passengerInfo.dateOfBirth && (
                      <InfoRow icon={FaCalendarAlt} iconColor="bg-slate-100 text-slate-600" label="Date of Birth" value={passengerInfo.dateOfBirth} />
                    )}
                    {passengerInfo.motherName && (
                      <InfoRow icon={FaUser} iconColor="bg-slate-100 text-slate-600" label="Mother's Name" value={passengerInfo.motherName} />
                    )}
                    {passengerInfo.motherDob && (
                      <InfoRow icon={FaCalendarAlt} iconColor="bg-slate-100 text-slate-600" label="Mother's DOB" value={passengerInfo.motherDob} />
                    )}
                    {passengerInfo.sonName && (
                      <InfoRow icon={FaUser} iconColor="bg-slate-100 text-slate-600" label="Son's Name" value={passengerInfo.sonName} />
                    )}
                    {passengerInfo.sonDob && (
                      <InfoRow icon={FaCalendarAlt} iconColor="bg-slate-100 text-slate-600" label="Son's DOB" value={passengerInfo.sonDob} />
                    )}
                  </div>
                </div>

                {/* Booking Details Card */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <MdAirplaneTicket className="w-4 h-4 text-indigo-600" />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">Booking Details</p>
                  </div>
                  <div className="space-y-0">
                    <InfoRow
                      icon={MdAirplaneTicket}
                      iconColor="bg-indigo-50 text-indigo-600"
                      label={passengerInfo.confirmationNumber ? 'Confirmation Number' : 'Ticket Number'}
                      value={passengerInfo.confirmationNumber || passengerInfo.ticketNumber || '—'}
                    />
                    <InfoRow
                      icon={MdEventSeat}
                      iconColor="bg-indigo-50 text-indigo-600"
                      label="Seat Number"
                      value={passengerInfo.seatNumber}
                    />
                    <InfoRow
                      icon={FaUser}
                      iconColor="bg-indigo-50 text-indigo-600"
                      label="Passenger Type"
                      value={passengerInfo.passengerType}
                    />
                    <InfoRow
                      icon={FaUser}
                      iconColor="bg-indigo-50 text-indigo-600"
                      label="Class"
                      value={passengerInfo.class}
                    />
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 md:col-span-2">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <FaPhone className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">Contact Information</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                    <ContactRow
                      icon={MdMarkEmailUnread}
                      iconColor="bg-emerald-50 text-emerald-600"
                      label="Email"
                      value={passengerInfo.contactInfo.email}
                    />
                    <ContactRow
                      icon={FaPhone}
                      iconColor="bg-emerald-50 text-emerald-600"
                      label="Phone"
                      value={passengerInfo.contactInfo.phone}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Details */}
            {pricing && (
              <section>
                <SectionHeader icon={FaDollarSign} title="Payment Details" />
                <div className="mt-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-5 border border-slate-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Ticket Price</p>
                      <p className="text-lg font-bold text-gray-800 mt-1">
                        ${pricing.ticketPrice.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Taxes & Fees</p>
                      <p className="text-lg font-bold text-gray-800 mt-1">
                        ${pricing.taxes.toFixed(2)}
                      </p>
                    </div>
                    <div className="border-l border-slate-200 pl-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Total</p>
                      <p className="text-2xl font-extrabold text-[#11172b] mt-1">
                        ${pricing.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Return Flight */}
            {returnFlight && (
              <section>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1 h-6 bg-[#11172b] rounded-full" />
                  <h3 className="text-lg font-bold text-gray-800">Return Flight</h3>
                </div>
                <p className="text-xs text-gray-500 mb-4 ml-4">
                  {returnFlight.departure.city} ({returnFlight.departure.airportCode}) &rarr; {returnFlight.arrival.city} ({returnFlight.arrival.airportCode})
                </p>

                {/* Return Flight Timeline */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <FlightTimeline
                    departure={returnFlight.departure}
                    stopover={returnFlight.stopover}
                    arrival={returnFlight.arrival}
                  />
                </div>

                {/* Return Passenger Info */}
                {returnFlight.passengerInfo && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-200">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaUser className="w-4 h-4 text-blue-600" />
                        </div>
                        <p className="font-semibold text-gray-800 text-sm">Return Passenger</p>
                      </div>
                      <div className="space-y-0">
                        {returnFlight.passengerInfo.name && (
                          <InfoRow icon={FaUser} iconColor="bg-slate-100 text-slate-600" label="Full Name" value={returnFlight.passengerInfo.name} />
                        )}
                        <InfoRow
                          icon={MdEventSeat}
                          iconColor="bg-slate-100 text-slate-600"
                          label="Seat Number"
                          value={returnFlight.passengerInfo.seatNumber || '—'}
                        />
                        <InfoRow
                          icon={FaUser}
                          iconColor="bg-slate-100 text-slate-600"
                          label="Passenger Type"
                          value={returnFlight.passengerInfo.passengerType || '—'}
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-200">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                          <MdAirplaneTicket className="w-4 h-4 text-indigo-600" />
                        </div>
                        <p className="font-semibold text-gray-800 text-sm">Return Booking</p>
                      </div>
                      <div className="space-y-0">
                        <InfoRow
                          icon={MdAirplaneTicket}
                          iconColor="bg-indigo-50 text-indigo-600"
                          label={returnFlight.passengerInfo.confirmationNumber ? 'Confirmation Number' : 'Ticket Number'}
                          value={returnFlight.passengerInfo.confirmationNumber || returnFlight.passengerInfo.ticketNumber || '—'}
                        />
                        <InfoRow
                          icon={FaUser}
                          iconColor="bg-indigo-50 text-indigo-600"
                          label="Class"
                          value={passengerInfo.class}
                        />
                      </div>
                    </div>

                    {/* Return Contact */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 md:col-span-2">
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-200">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <FaPhone className="w-4 h-4 text-emerald-600" />
                        </div>
                        <p className="font-semibold text-gray-800 text-sm">Return Contact Information</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                        <ContactRow
                          icon={MdMarkEmailUnread}
                          iconColor="bg-emerald-50 text-emerald-600"
                          label="Email"
                          value={returnFlight.passengerInfo.contactInfo.email}
                        />
                        <ContactRow
                          icon={FaPhone}
                          iconColor="bg-emerald-50 text-emerald-600"
                          label="Phone"
                          value={returnFlight.passengerInfo.contactInfo.phone}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-[#11172b] to-[#1a2744] px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center">
                  <Image src={airlineLogo} width={100} height={100} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{airlineName}</p>
                  <p className="text-slate-400 text-xs">Flight {flightNumber}</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-slate-400 text-xs">Booking Reference</p>
                <p className="text-white font-mono font-bold text-sm tracking-wider">
                  {passengerInfo.confirmationNumber || passengerInfo.ticketNumber || '—'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-4">
          This document is for informational purposes only. Please check with your airline for the most up-to-date flight information.
        </p>
      </div>
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-1 h-6 bg-[#11172b] rounded-full" />
      <Icon className="w-4 h-4 text-[#11172b]" />
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
  );
}
