export interface WaterStation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  type: 'free' | 'refill' | 'both';
  hours: string;
  is24_7: boolean;
  distance?: number;
  availability: 'available' | 'busy' | 'maintenance';
  amenities: string[];
}

export const waterStations: WaterStation[] = [
  {
    id: '1',
    name: 'Dubai Can - Jumeirah Lakes Towers (Almas East)',
    lat: 25.070561,
    lng: 55.139835,
    address: 'Jumeirah Lake Towers, Almas East',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['24/7 access', 'Free refill', 'Filtered water']
  },
  {
    id: '2',
    name: 'Dubai Can - JBR The Beach',
    lat: 25.208246,
    lng: 55.271794,
    address: 'Jumeirah Beach Residence, The Beach',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beach location', '24/7 access', 'Tourist area']
  },
  {
    id: '3',
    name: 'Dubai Can - City Walk',
    lat: 25.217716,
    lng: 55.251265,
    address: 'City Walk, Al Wasl',
    type: 'free',
    hours: '9:00-21:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping area', 'Smart sensors', 'Premium quality']
  },
  {
    id: '4',
    name: 'Water Station - Business Bay Promenade',
    lat: 25.18356,
    lng: 55.260123,
    address: 'Business Bay, Canal Promenade',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Waterfront location', 'Scenic views', 'Walking path']
  },
  {
    id: '5',
    name: 'Refill Point - Downtown (near Burj Park)',
    lat: 25.193433,
    lng: 55.274081,
    address: 'Downtown Dubai, near Burj Park',
    type: 'free',
    hours: '8:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Tourist hotspot', 'Downtown location', 'High capacity']
  },
  {
    id: '6',
    name: 'Refill - Al Ras (Deira)',
    lat: 25.26704,
    lng: 55.2964,
    address: 'Al Ras, Deira',
    type: 'free',
    hours: '9:00-20:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Historic area', 'Traditional souks nearby', 'Public access']
  },
  {
    id: '7',
    name: 'Refill - Gold Souk / Al Daghaya',
    lat: 25.270358,
    lng: 55.298675,
    address: 'Al Daghaya, Gold Souk area',
    type: 'free',
    hours: '9:00-21:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping district', 'Tourist area', 'Cultural heritage']
  },
  {
    id: '8',
    name: 'Station - Jumeirah Public Beach',
    lat: 25.204411,
    lng: 55.265129,
    address: 'Jumeirah Public Beach',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beachside location', 'UV sterilization', 'Cold water']
  },
  {
    id: '9',
    name: 'Refill - Dubai Marina Walk',
    lat: 25.078999,
    lng: 55.141541,
    address: 'Dubai Marina Walk',
    type: 'free',
    hours: '8:00-23:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Marina location', 'Waterfront views', 'Walking area']
  },
  {
    id: '10',
    name: 'Refill - Palm Jumeirah Boardwalk',
    lat: 25.131184,
    lng: 55.117252,
    address: 'Palm Jumeirah Boardwalk',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Premium location', 'Boardwalk access', 'Tourist area']
  },
  {
    id: '11',
    name: 'Station - Al Barsha, Mall Area',
    lat: 25.119,
    lng: 55.200,
    address: 'Al Barsha, Mall Area',
    type: 'free',
    hours: '9:00-23:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping area', 'Family friendly', 'Multiple locations']
  },
  {
    id: '12',
    name: 'Station - Al Quoz Park',
    lat: 25.207,
    lng: 55.239,
    address: 'Al Quoz Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Park setting', 'Green space', 'Family area']
  },
  {
    id: '13',
    name: 'Refill - The Greens Central Park',
    lat: 25.068,
    lng: 55.179,
    address: 'The Greens Central Park',
    type: 'free',
    hours: '7:00-21:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Community park', 'Green space', 'Residential area']
  },
  {
    id: '14',
    name: 'Refill - Dubai Silicon Oasis',
    lat: 25.072,
    lng: 55.330,
    address: 'Dubai Silicon Oasis',
    type: 'free',
    hours: '9:00-18:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Tech hub', 'Business district', 'Modern facilities']
  },
  {
    id: '15',
    name: 'Refill - Arabian Ranches Park',
    lat: 25.025,
    lng: 55.235,
    address: 'Arabian Ranches Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Community park', 'Family area', 'Residential']
  },
  {
    id: '16',
    name: 'Refill - Global Village Entrance',
    lat: 25.067,
    lng: 55.233,
    address: 'Global Village Entrance',
    type: 'refill',
    hours: 'Seasonal',
    is24_7: false,
    availability: 'available',
    amenities: ['Entertainment complex', 'Cultural pavilions', 'Seasonal venue']
  },
  {
    id: '17',
    name: 'Refill - International City Cluster A',
    lat: 25.197,
    lng: 55.390,
    address: 'International City Cluster A',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Residential area', '24/7 access', 'Community hub']
  },
  {
    id: '18',
    name: 'Refill - Creek Park',
    lat: 25.235,
    lng: 55.326,
    address: 'Dubai Creek Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Park setting', 'Creek views', 'Family area']
  },
  {
    id: '19',
    name: 'Refill - Al Mamzar Park',
    lat: 25.277,
    lng: 55.347,
    address: 'Al Mamzar Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Beach park', 'Family area', 'Multiple facilities']
  },
  {
    id: '20',
    name: 'Refill - Mirdif City Centre',
    lat: 25.216,
    lng: 55.365,
    address: 'Mirdif City Centre',
    type: 'free',
    hours: '10:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping mall', 'Family friendly', 'Food court area']
  },
  {
    id: '21',
    name: 'Refill - Jumeirah Beach Residence (Promenade)',
    lat: 25.078,
    lng: 55.137,
    address: 'JBR Promenade',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beach promenade', 'Tourist area', 'Dining nearby']
  },
  {
    id: '22',
    name: 'Station - Al Safa Park',
    lat: 25.197,
    lng: 55.239,
    address: 'Al Safa Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Large park', 'Exercise facilities', 'Family area']
  },
  {
    id: '23',
    name: 'Station - Zabeel Park',
    lat: 25.220,
    lng: 55.294,
    address: 'Zabeel Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Central park', 'Dubai Frame nearby', 'Green space']
  },
  {
    id: '24',
    name: 'Refill - Dubai Festival City',
    lat: 25.255,
    lng: 55.337,
    address: 'Dubai Festival City',
    type: 'free',
    hours: '10:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping area', 'Entertainment', 'Creek views']
  },
  {
    id: '25',
    name: 'Refill - Deira City Centre',
    lat: 25.263,
    lng: 55.309,
    address: 'Deira City Centre',
    type: 'free',
    hours: '10:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping mall', 'Food court', 'Metro connected']
  },
  {
    id: '26',
    name: 'Refill - City Centre Mirdif',
    lat: 25.222,
    lng: 55.389,
    address: 'City Centre Mirdif',
    type: 'free',
    hours: '10:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping mall', 'Family entertainment', 'Dining area']
  },
  {
    id: '27',
    name: 'Refill - Satwa Community Park',
    lat: 25.226,
    lng: 55.279,
    address: 'Satwa Community Park',
    type: 'free',
    hours: '7:00-21:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Community park', 'Exercise area', 'Local access']
  },
  {
    id: '28',
    name: 'Refill - The Pointe (Palm)',
    lat: 25.117,
    lng: 55.134,
    address: 'The Pointe, Palm Jumeirah',
    type: 'free',
    hours: '10:00-23:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Entertainment area', 'Dining', 'Atlantis views']
  },
  {
    id: '29',
    name: 'Refill - Umm Suqeim Park',
    lat: 25.140,
    lng: 55.191,
    address: 'Umm Suqeim Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Community park', 'Family area', 'Exercise facilities']
  },
  {
    id: '30',
    name: 'Refill - Dubai Opera Plaza',
    lat: 25.205,
    lng: 55.270,
    address: 'Dubai Opera Plaza',
    type: 'free',
    hours: '9:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Cultural area', 'Entertainment district', 'Premium location']
  },
  {
    id: '31',
    name: 'Refill - Ras Al Khor Wildlife Reserve Area',
    lat: 25.213,
    lng: 55.341,
    address: 'Ras Al Khor Wildlife Reserve',
    type: 'free',
    hours: 'Daytime',
    is24_7: false,
    availability: 'available',
    amenities: ['Nature reserve', 'Wildlife viewing', 'Educational area']
  },
  {
    id: '32',
    name: 'Refill - Jebel Ali Beach Park',
    lat: 25.044,
    lng: 55.084,
    address: 'Jebel Ali Beach Park',
    type: 'free',
    hours: '6:00-18:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Beach park', 'Family area', 'Picnic facilities']
  },
  {
    id: '33',
    name: 'Refill - Marina Mall Area',
    lat: 25.077,
    lng: 55.143,
    address: 'Marina Mall Area',
    type: 'free',
    hours: '9:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping area', 'Marina views', 'Dining nearby']
  },
  {
    id: '34',
    name: 'Refill - Dubai International Financial Centre (DIFC)',
    lat: 25.210,
    lng: 55.276,
    address: 'DIFC, Downtown Dubai',
    type: 'free',
    hours: '9:00-18:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Financial district', 'Business area', 'Premium location']
  },
  {
    id: '35',
    name: 'Refill - Dubai Frame Park Entrance',
    lat: 25.174,
    lng: 55.327,
    address: 'Dubai Frame Park',
    type: 'refill',
    hours: '9:00-19:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Tourist attraction', 'Park entrance', 'Landmark area']
  },
  {
    id: '36',
    name: 'Refill - Al Khawaneej Park',
    lat: 25.254,
    lng: 55.432,
    address: 'Al Khawaneej Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Large park', 'Family area', 'Multiple facilities']
  },
  {
    id: '37',
    name: 'Refill - Al Qudra Lake (main parking)',
    lat: 24.960,
    lng: 55.373,
    address: 'Al Qudra Lake',
    type: 'free',
    hours: '6:00-19:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Nature area', 'Cycling track', 'Desert location']
  },
  {
    id: '38',
    name: 'Refill - Dubai Autodrome Park',
    lat: 25.042,
    lng: 55.221,
    address: 'Dubai Autodrome Park',
    type: 'free',
    hours: '8:00-20:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Motorsport area', 'Event venue', 'Outdoor space']
  },
  {
    id: '39',
    name: 'Refill - Hatta Visitor Centre (outskirts)',
    lat: 24.801,
    lng: 56.116,
    address: 'Hatta Visitor Centre',
    type: 'refill',
    hours: '9:00-17:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Mountain area', 'Tourist center', 'Adventure activities']
  },
  {
    id: '40',
    name: 'Refill - Silicon Oasis Park',
    lat: 25.042,
    lng: 55.327,
    address: 'Silicon Oasis Park',
    type: 'free',
    hours: '7:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Community park', 'Tech area', 'Exercise facilities']
  },
  {
    id: '41',
    name: 'Refill - Dubai Creek Harbour Walk',
    lat: 25.184,
    lng: 55.309,
    address: 'Dubai Creek Harbour',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Waterfront walk', 'Modern area', 'Creek views']
  },
  {
    id: '42',
    name: 'Refill - Al Sufouh Beach',
    lat: 25.063,
    lng: 55.134,
    address: 'Al Sufouh Beach',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beach location', 'Open access', 'Coastal area']
  },
  {
    id: '43',
    name: 'Refill - Jumeirah Park Community',
    lat: 25.081,
    lng: 55.226,
    address: 'Jumeirah Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Residential community', 'Family area', 'Green spaces']
  },
  {
    id: '44',
    name: 'Refill - Muhaisnah Park',
    lat: 25.233,
    lng: 55.377,
    address: 'Muhaisnah Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Community park', 'Exercise area', 'Family facilities']
  },
  {
    id: '45',
    name: 'Refill - Nad Al Sheba Park',
    lat: 25.016,
    lng: 55.342,
    address: 'Nad Al Sheba Park',
    type: 'free',
    hours: '6:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Large park', 'Sports facilities', 'Community area']
  },
  {
    id: '46',
    name: 'Refill - Jumeirah Islands (club entry)',
    lat: 25.028,
    lng: 55.219,
    address: 'Jumeirah Islands',
    type: 'refill',
    hours: 'Club hours',
    is24_7: false,
    availability: 'available',
    amenities: ['Exclusive area', 'Golf course', 'Premium location']
  },
  {
    id: '47',
    name: 'Refill - Port Rashid Promenade',
    lat: 25.259,
    lng: 55.303,
    address: 'Port Rashid Promenade',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Waterfront area', 'Port views', 'Walking path']
  },
  {
    id: '48',
    name: 'Refill - Dubai Police Museum Area',
    lat: 25.263,
    lng: 55.307,
    address: 'Dubai Police Museum Area',
    type: 'free',
    hours: '9:00-17:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Cultural area', 'Museum district', 'Educational']
  },
  {
    id: '49',
    name: 'Refill - Al Karama Market Area',
    lat: 25.239,
    lng: 55.299,
    address: 'Al Karama Market',
    type: 'free',
    hours: '9:00-22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping area', 'Traditional market', 'Local culture']
  },
  {
    id: '50',
    name: 'Refill - The Sustainable City (community hub)',
    lat: 25.116,
    lng: 55.371,
    address: 'The Sustainable City',
    type: 'free',
    hours: '9:00-18:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Eco-friendly', 'Community hub', 'Sustainable living']
  }
];

// Calculate distance between two coordinates using Haversine formula
export const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in km
};

export const getStationsByFilter = (filter: 'closest' | '24/7' | 'free' | 'all', userLocation?: { lat: number; lng: number } | null) => {
  switch (filter) {
    case '24/7':
      return waterStations.filter(station => station.is24_7);
    case 'free':
      return waterStations.filter(station => 
        station.type === 'free' || station.type === 'both'
      );
    case 'closest':
      if (!userLocation) return waterStations.slice(0, 2);
      return waterStations
        .map(station => ({
          ...station,
          distance: calculateDistance(userLocation.lat, userLocation.lng, station.lat, station.lng)
        }))
        .sort((a, b) => (a.distance || 0) - (b.distance || 0))
        .slice(0, 2);
    default:
      return waterStations;
  }
};