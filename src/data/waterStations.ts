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
    name: 'JLT Almas East Lake Water Filter',
    lat: 25.070561,
    lng: 55.139835,
    address: 'Jumeirah Lake Towers, Almas East Lake',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Free refill', 'Filtered water', '24/7 access']
  },
  {
    id: '2',
    name: 'JBR The Beach Water Filter',
    lat: 25.208246,
    lng: 55.271794,
    address: 'Jumeirah Beach Residence, The Beach',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beach location', 'Cold water', 'High capacity']
  },
  {
    id: '3',
    name: 'Jumeirah Beach Park Water Filter',
    lat: 25.205154,
    lng: 55.24038,
    address: 'Jumeirah 2, near Jumeirah Beach Park',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Park location', 'Family friendly', 'Exercise friendly']
  },
  {
    id: '4',
    name: 'City Walk Water Filter',
    lat: 25.217716,
    lng: 55.251265,
    address: 'City Walk, Al Wasl',
    type: 'both',
    hours: '08:00 - 22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping area', 'Smart sensors', 'Premium quality']
  },
  {
    id: '5',
    name: 'Business Bay Al Habtoor City Water Filter',
    lat: 25.184427,
    lng: 55.256227,
    address: 'Business Bay, Al Habtoor City vicinity',
    type: 'refill',
    hours: '06:00 - 23:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Business district', 'Quick refill', 'Premium service']
  },
  {
    id: '6',
    name: 'Business Bay Canal Promenade Water Filter',
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
    id: '7',
    name: 'Al Ras Deira Water Filter',
    lat: 25.26704,
    lng: 55.2964,
    address: 'Al Ras, Deira',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Historic area', 'Traditional souks nearby', 'Public access']
  },
  {
    id: '8',
    name: 'Gold Souk Al Daghaya Water Filter',
    lat: 25.270358,
    lng: 55.298675,
    address: 'Al Daghaya, Gold Souk area',
    type: 'refill',
    hours: '08:00 - 22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping district', 'Tourist area', 'Cultural heritage']
  },
  {
    id: '9',
    name: 'Jumeirah Public Beach Water Filter',
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
    id: '10',
    name: 'Dubai Mall Water Filter',
    lat: 25.1975,
    lng: 55.2744,
    address: 'Dubai Mall, Downtown Dubai',
    type: 'both',
    hours: '10:00 - 24:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping mall', 'Multiple locations', 'Family friendly']
  },
  {
    id: '11',
    name: 'Mall of the Emirates Water Filter',
    lat: 25.1184,
    lng: 55.2001,
    address: 'Mall of the Emirates, Al Barsha',
    type: 'both',
    hours: '10:00 - 24:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Shopping mall', 'Food court area', 'Premium filtering']
  },
  {
    id: '12',
    name: 'Dubai Airport Terminal 3 Water Filter',
    lat: 25.2532,
    lng: 55.3657,
    address: 'Dubai International Airport, Terminal 3',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Airport location', 'Traveler friendly', 'Multiple stations']
  },
  {
    id: '13',
    name: 'Kite Beach Water Filter',
    lat: 25.2096,
    lng: 55.2662,
    address: 'Kite Beach, Umm Suqeim',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beach location', 'Sports area', 'Outdoor activities']
  },
  {
    id: '14',
    name: 'Dubai Fountain Area Water Filter',
    lat: 25.1951,
    lng: 55.2744,
    address: 'Dubai Fountain, Downtown Dubai',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Tourist hotspot', 'Fountain views', 'High capacity']
  },
  {
    id: '15',
    name: 'Atlantis The Palm Water Filter',
    lat: 25.1306,
    lng: 55.1167,
    address: 'Atlantis The Palm, Palm Jumeirah',
    type: 'refill',
    hours: '06:00 - 23:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Resort area', 'Premium location', 'Tourist area']
  },
  {
    id: '16',
    name: 'Ibn Battuta Mall Water Filter',
    lat: 25.0444,
    lng: 55.1167,
    address: 'Ibn Battuta Mall, Jebel Ali',
    type: 'both',
    hours: '10:00 - 24:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Large mall', 'Theme courts', 'Multiple stations']
  },
  {
    id: '17',
    name: 'La Mer Beach Water Filter',
    lat: 25.2025,
    lng: 55.2774,
    address: 'La Mer, Jumeirah',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beach destination', 'Entertainment area', 'Family zone']
  },
  {
    id: '18',
    name: 'Dubai Creek Park Water Filter',
    lat: 25.2446,
    lng: 55.3267,
    address: 'Dubai Creek Park, Creek Area',
    type: 'free',
    hours: '08:00 - 23:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Park setting', 'Green space', 'Family area']
  },
  {
    id: '19',
    name: 'Global Village Water Filter',
    lat: 25.0708,
    lng: 55.3117,
    address: 'Global Village, Dubai Land',
    type: 'both',
    hours: '16:00 - 01:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Entertainment complex', 'Cultural pavilions', 'Seasonal venue']
  },
  {
    id: '20',
    name: 'Dubai Marina Mall Water Filter',
    lat: 25.0785,
    lng: 55.1396,
    address: 'Dubai Marina Mall, Marina',
    type: 'both',
    hours: '10:00 - 24:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Marina location', 'Waterfront views', 'Shopping area']
  }
];

export const getStationsByFilter = (filter: 'closest' | '24/7' | 'free' | 'all') => {
  switch (filter) {
    case '24/7':
      return waterStations.filter(station => station.is24_7);
    case 'free':
      return waterStations.filter(station => 
        station.type === 'free' || station.type === 'both'
      );
    case 'closest':
      return waterStations
        .sort((a, b) => (a.distance || 0) - (b.distance || 0))
        .slice(0, 2);
    default:
      return waterStations;
  }
};