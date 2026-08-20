import { FlightDetails } from '@/utils/types';

export const flightData: FlightDetails[] = [
  {
    flightNumber: 'SAMPLE',
    airlineName: 'DELTA',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    createdAt: '7/25/2026',
    departure: {
      city: 'Bangor, Maine',
      airportCode: 'BGR',
      airport: 'Bangor International Airport',
      time: '7:00 AM',
      date: 'August 3, 2026'
    },
    stopover: {
      city: 'Washington, D.C',
      airportCode: 'IAD',
      airport: 'Dulles International Airport',
      startTime: '12:15 PM',
      endTime: '1:00 PM',
      date: 'August 3, 2026'
    },
    arrival: {
      city: 'Portland, Oregon',
      airportCode: 'PDX',
      airport: 'Portland International Airport',
      time: '3:40 PM',
      date: 'August 3, 2026'
    },
    passengerInfo: {
      name: 'SAMPLE SAMPLE',
      confirmationNumber: 'Gy76J08i9944',
      seatNumber: '12A',
      class: 'First Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'b**@gmail.com',
        phone: '********'
      }
    },
    returnFlight: {
      departure: {
        city: 'Portland, Oregon',
        airportCode: 'PDX',
        airport: 'Portland International Airport',
        time: '8:40 AM',
        date: 'August 13, 2026'
      },
      arrival: {
        city: 'Bangor, Maine',
        airportCode: 'BGR',
        airport: 'Bangor International Airport',
        time: '9:00 PM',
        date: 'August 13, 2026'
      },
      passengerInfo: {
        name: 'SAMPLE SAMPLE',
        confirmationNumber: 'Gy76J08i9944',
        seatNumber: '70A',
        class: 'First Class',
        passengerType: 'Adult',
        dateOfBirth: '',
        contactInfo: {
          email: 'b**@gmail.com',
          phone: '********'
        }
      }
    }
  },
    {
    flightNumber: 'DTK260',
    airlineName: 'DELTA',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    departure: {
      city: 'Birmingham, AL',
      airportCode: 'BHM',
      airport: 'Birmingham-Shuttlesworth International Airport',
      time: '9:00 AM CT',
      date: 'January 10, 2026'
    },
    arrival: {
      city: 'Ontario, CA',
      airportCode: 'ONT',
      airport: 'Ontario International Airport',
      time: '12:00 PM PT',
      date: 'January 10, 2026'
    },
    passengerInfo: {
      name: 'Melinda Smith Velma',
      confirmationNumber: 'DKX7440DFX',
      seatNumber: '12A',
      class: 'Business Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'm**@gmail.com',
        phone: '******'
      }
    }
  },
  {
    flightNumber: 'DTK261',
    airlineName: 'DELTA',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    createdAt: '7/25/2026',
    departure: {
      city: 'Bangor, Maine',
      airportCode: 'BGR',
      airport: 'Bangor International Airport',
      time: '7:00 AM',
      date: 'August 3, 2026'
    },
    stopover: {
      city: 'Washington, D.C',
      airportCode: 'IAD',
      airport: 'Dulles International Airport',
      startTime: '12:15 PM',
      endTime: '1:00 PM',
      date: 'August 3, 2026'
    },
    arrival: {
      city: 'Portland, Oregon',
      airportCode: 'PDX',
      airport: 'Portland International Airport',
      time: '3:40 PM',
      date: 'August 3, 2026'
    },
    passengerInfo: {
      name: 'Deborah Betsy Carter',
      confirmationNumber: 'Gy76J08i9944',
      seatNumber: '12A',
      class: 'First Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'b**@gmail.com',
        phone: '********'
      }
    },
    returnFlight: {
      departure: {
        city: 'Portland, Oregon',
        airportCode: 'PDX',
        airport: 'Portland International Airport',
        time: '8:40 AM',
        date: 'August 13, 2026'
      },
      arrival: {
        city: 'Bangor, Maine',
        airportCode: 'BGR',
        airport: 'Bangor International Airport',
        time: '9:00 PM',
        date: 'August 13, 2026'
      },
      passengerInfo: {
        name: 'Deborah Betsy Carter',
        confirmationNumber: 'Gy76J08i9944',
        seatNumber: '70A',
        class: 'First Class',
        passengerType: 'Adult',
        dateOfBirth: '',
        contactInfo: {
          email: 'b**@gmail.com',
          phone: '********'
        }
      }
    }
  },
  {
    flightNumber: 'DTK262',
    airlineName: 'DELTA',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    createdAt: '7/26/2026',
    departure: {
      city: 'Newark, NJ',
      airportCode: 'EWR',
      airport: 'Newark Liberty International Airport',
      time: '10:00 AM',
      date: 'August 7, 2026'
    },
    arrival: {
      city: 'Boise, ID',
      airportCode: 'BOI',
      airport: 'Boise Airport',
      time: '5:00 PM',
      date: 'August 7, 2026'
    },
    passengerInfo: {
      name: '',
      motherName: 'Kerrie A Mills',
      motherDob: '07/12/1990',
      sonName: 'Jason E Smith',
      sonDob: '09/17/2021',
      confirmationNumber: 'DTK-80774879',
      seatNumber: '12A',
      class: 'First Class',
      passengerType: 'Adult, Child',
      dateOfBirth: '',
      contactInfo: {
        email: 'KERRIEMILLS10@GMAIL.COM',
        phone: '(612) 361-7114'
      }
    }
  },
  {
    flightNumber: 'DTK263',
    airlineName: 'DELTA',
    airlineLogo: 'https://i.imgur.com/GQNPt6I.png',
    createdAt: '8/13/2026',
    isSample: false,
    departure: {
      city: 'Panama City, FL',
      airportCode: 'ECP',
      airport: 'Northwest Florida Beaches International Airport',
      time: '2:00 PM',
      date: 'August 21, 2026'
    },
     stopover: {
      city: 'Atlanta, GA',
      airportCode: 'ATL',
      airport: 'Hartsfield-Jackson Atlanta International Airport',
     startTime: '4:15 PM',
      endTime: '7:45 PM',
      date: 'August 21, 2026'
    },
    arrival: {
      city: 'Las Vegas, NV',
      airportCode: 'LAS',
      airport: 'Harry Reid International Airport',
      time: '10:00 PM',
      date: 'August 21, 2026'
    },

    passengerInfo: {
      name: 'Nora rose',
      confirmationNumber: 'DTK-80774263',
      seatNumber: '12A',
      class: 'First Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'norarose457@gmail.com',
        phone: '******'
      }
    },
     pricing: {
      ticketPrice: 864.0,
      taxes: 0.0,
      total: 864.0
    }
  },
  {
    flightNumber: 'DTK264',
    airlineName: 'British Airways',
    airlineLogo: 'https://iili.io/CQSvX71.jpg',
    createdAt: '8/20/2026',
    isSample: false,
    departure: {
      city: 'Kastrup, Denmark',
      airportCode: 'CPH',
      airport: 'Copenhagen Airport',
      time: '07:20 AM',
      date: 'August 26, 2026'
    },
    arrival: {
      city: 'Myrtle Beach, SC',
      airportCode: 'MYR',
      airport: 'Myrtle Beach International Airport',
      time: '06:51 PM',
      date: 'August 26, 2026'
    },

    passengerInfo: {
      name: 'Karen Winther',
      confirmationNumber: 'DTK-80774264',
      seatNumber: '12A',
      class: 'First Class',
      passengerType: 'Adult',
      dateOfBirth: '',
      contactInfo: {
        email: 'karenwinther88@gmail.com',
        phone: '279-208-5098'
      }
    },
  }
];
