import { FlightDetails } from '@/utils/types';

export const flightData: FlightDetails[] = [
  {
    flightNumber: 'SAMPLE',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'New York',
      airportCode: 'JFK',
      time: '10:00 AM',
      date: 'Sept 10, 2024'
    },
    arrival: {
      city: 'London',
      airportCode: 'LHR',
      time: '10:00 PM',
      date: 'Sept 10, 2024'
    },
    passengerInfo: {
      name: 'John Doe',
      ticketNumber: 'sample',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '1985-06-15',
      contactInfo: {
        email: 'john.doe@example.com',
        phone: '+1234567890'
      }
    },
    pricing: {
      ticketPrice: 350.0,
      taxes: 50.0,
      total: 400.0
    }
  },
  {
    flightNumber: 'AF1202',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Atlanta',
      airportCode: 'ATL',
      time: '2:20 PM',
      date: 'Oct 20, 2024'
    },
    arrival: {
      city: 'Gillette',
      airportCode: 'GCC',
      time: '9:00 PM',
      date: 'Oct 20, 2024'
    },
    passengerInfo: {
      name: 'Elizabeth T. Mccauley',
      ticketNumber: 'X12345602',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: '******',
        phone: '***-***-***'
      }
    },
  },
  {
    flightNumber: 'AF1203',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'San Francisco, CA',
      airportCode: 'SFO',
      time: '10:00 AM',
      date: 'Oct 31, 2024'
    },
    stopover: {
      city: 'Chicago, IL',
      airportCode: 'ORD',
      startTime: '3:30 PM',
      endTime: '5:00 PM',
      date: 'Oct 31, 2024'
    },
    arrival: {
      city: 'Manchester, New Hampshire',
      airportCode: 'MHT',
      time: '8:00 PM',
      date: 'Oct 31, 2024'
    },
    passengerInfo: {
      name: 'Scott Jason Adkinz',
      ticketNumber: 'X12345603',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: '******',
        phone: '***-***-***'
      }
    },
  },
  {
    flightNumber: 'AF1205',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: ' Killeen, TX, USA',
      airport: 'Killeen Regional Airport',
      airportCode: 'GRK',
      time: '12:00 PM',
      date: 'January 24, 2025'
    },
    arrival: {
      city: 'Jacksonville, FL, USA',
      airport: 'Jacksonville International Airport',
      airportCode: 'JAX',
      time: '6:30 PM',
      date: 'January 24, 2025'
    },
    passengerInfo: {
      name: 'Sarah Ann Leah',
      ticketNumber: 'X12345605',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'suebynum44@gmail.com',
        phone: '***-***-***'
      }
    },
  },
  {
    flightNumber: 'AF1206',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Lufthavnsboulevarden, Kastrup, Denmark',
      airport: 'Copenhagen Airport',
      airportCode: 'CPH',
      time: '5:00 AM - CET',
      date: 'February 18, 2025'
    },
    arrival: {
      city: 'Wichita, KS, USA',
      airport: 'Wichita Dwight D. Eisenhower National Airport',
      airportCode: 'ICT',
      time: '9:00 AM - CST',
      date: 'February 18, 2025'
    },
    passengerInfo: {
      name: 'Kelly Danielle Scheirman',
      ticketNumber: 'X12345606',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: '******',
        phone: '***-***-***'
      }
    },
  },
  {
    flightNumber: 'AF1207',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Los Angeles, CA, USA',
      airport: 'Los Angeles International Airport',
      airportCode: 'LAX',
      time: '5:00 AM - PDT',
      date: 'May 27, 2025'
    },
    arrival: {
      city: 'Dallas, TX, USA',
      airport: 'Dallas/Fort Worth International Airport',
      airportCode: 'DFW',
      time: '01:00 AM - CDT',
      date: 'May 28, 2025'
    },
    passengerInfo: {
      name: 'Lynn Stone',
      ticketNumber: 'LAX7438DFW',
      seatNumber: '12A',
      class: 'Economy Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: '******',
        phone: '***-***-***'
      }
    },
    pricing: {
      ticketPrice: 0.0,
      taxes: 0.0,
      total: 0.0
    }
  },
  {
    flightNumber: 'AF1208',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Los Angeles, CA',
      airportCode: 'LAX',
      airport: 'Los Angeles International Airport',
      time: '8:00 PM',
      date: 'July 2, 2025'
    },
    arrival: {
      city: 'Dubai, UAE',
      airportCode: 'DXB',
      airport: 'Dubai International Airport',
      time: '7:30 PM',
      date: 'July 3, 2025'
    },
    passengerInfo: {
      name: 'Helen Rosemary Jones',
      confirmationNumber: 'Gy76J0',
      seatNumber: '12A',
      class: 'First Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'rosemaryhelen42@gmail.com',
        phone: '+1-205-386-3936'
      }
    },
    pricing: {
      ticketPrice: 0.0,
      taxes: 0.0,
      total: 0.0
    },
    returnFlight: {
      departure: {
        city: 'Dubai, UAE',
        airportCode: 'DXB',
        airport: 'Dubai International Airport',
        time: '10:00 AM',
        date: 'July 23, 2025'
      },
      arrival: {
        city: 'Raleigh, NC',
        airportCode: 'RDU',
        airport: 'Raleigh-Durham International Airport',
        time: '4:00 PM',
        date: 'July 23, 2025'
      },
      passengerInfo: {
        name: 'Helen Rosemary Jones',
        confirmationNumber: 'Gy76J0',
        seatNumber: '12A',
        class: 'First Class',
        passengerType: 'Adult',
        dateOfBirth: '',
        contactInfo: {
          email: 'rosemaryhelen42@gmail.com',
          phone: '+1-205-386-3936'
        }
      }
    }
  },
  {
    flightNumber: 'AF1209',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Los Angeles, CA',
      airportCode: 'LAX',
      airport: 'Los Angeles International Airport',
      time: '8:00 PM',
      date: 'July 2, 2025'
    },
    arrival: {
      city: 'Dubai, UAE',
      airportCode: 'DXB',
      airport: 'Dubai International Airport',
      time: '7:30 PM',
      date: 'July 3, 2025'
    },
    passengerInfo: {
      name: 'Helen Rosemary Jones',
      confirmationNumber: 'Gy76J1',
      seatNumber: '13A',
      class: 'First Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'rosemaryhelen42@gmail.com',
        phone: '+1-205-386-3936'
      }
    },
    pricing: {
      ticketPrice: 0.0,
      taxes: 0.0,
      total: 0.0
    },
    returnFlight: {
      departure: {
        city: 'Dubai, UAE',
        airportCode: 'DXB',
        airport: 'Dubai International Airport',
        time: '10:00 AM',
        date: 'July 23, 2025'
      },
      arrival: {
        city: 'Orlando, FL',
        airportCode: 'MCO',
        airport: 'Orlando International Airport',
        time: '5:45 PM',
        date: 'July 23, 2025'
      },
      passengerInfo: {
        name: 'Helen Rosemary Jones',
        confirmationNumber: 'Gy76J1',
        seatNumber: '14A',
        class: 'First Class',
        passengerType: 'Adult',
        dateOfBirth: '',
        contactInfo: {
          email: 'rosemaryhelen42@gmail.com',
          phone: '+1-205-386-3936'
        }
      }
    }
  },
  {
    flightNumber: 'DTK253',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Denver, CO',
      airportCode: 'DEN',
      airport: 'Denver international Airport',
      time: '11:00 AM',
      date: 'July 15, 2025'
    },
    arrival: {
      city: 'Lancaster, CA',
      airportCode: 'WJF',
      airport: 'General William j. Fox Airfield',
      time: '8:00 PM',
      date: 'July 15, 2025'
    },
    passengerInfo: {
      name: 'Lilian Willson',
      confirmationNumber: 'LAX7438DFX',
      seatNumber: '13A',
      class: 'Premium Economy',
      passengerType: 'Adult',
      dateOfBirth: 'April 12, 1995',
      contactInfo: {
        email: 'lilianwillson17@gmail.com',
        phone: '+1-303-652-8179'
      }
    },
    pricing: {
      ticketPrice: 650.0,
      taxes: 0.0,
      total: 650.0
    },
  }
];
