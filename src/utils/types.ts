export interface FlightDetails {
  flightNumber: string;
  airlineName?: string;
  airlineLogo: string;
  departure: LocationDetails;
  arrival: LocationDetails;
  stopover?: StopoverDetails;
  passengerInfo: PassengerDetails;
  pricing?: PricingDetails;
  dateCreated?: string;
  returnFlight?: ReturnFlightDetails;
}
export interface ReturnFlightDetails  {
  departure: LocationDetails;
  arrival: LocationDetails;
  stopover?: StopoverDetails;
  passengerInfo?: PassengerDetails;
  pricing?: PricingDetails;
  dateCreated?: string;
}

export interface LocationDetails {
  city: string;
  airport?: string;
  airportCode: string;
  time: string;
  date: string;
  endDate?: string;
}

export interface StopoverDetails {
  city: string;
  airport?: string;
  airportCode: string;
  startTime: string;
  endTime: string;
  date: string;
  endDate?: string;
}

export interface PassengerDetails {
  name: string;
  ticketNumber?: string;
  confirmationNumber?: string;
  seatNumber: string;
  class: string;
  passengerType: 'Adult' | 'Child' | 'Infant';
  dateOfBirth: string;
  contactInfo: {
    email: string;
    phone: string;
  };
}

export interface PricingDetails {
  ticketPrice: number;
  taxes: number;
  total: number;
}
