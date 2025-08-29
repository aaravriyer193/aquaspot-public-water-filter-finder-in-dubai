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
    name: 'Dubai Mall Water Station',
    lat: 25.1975,
    lng: 55.2744,
    address: 'Dubai Mall, Downtown Dubai',
    type: 'both',
    hours: '10:00 - 24:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Free refill', 'Filtered water', 'Cooling system']
  },
  {
    id: '2',
    name: 'Burj Khalifa Park Filter',
    lat: 25.1946,
    lng: 55.2738,
    address: 'Burj Khalifa Park, Downtown Dubai',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['24/7 access', 'Solar powered', 'Temperature control']
  },
  {
    id: '3',
    name: 'Marina Walk Station',
    lat: 25.0785,
    lng: 55.1397,
    address: 'Dubai Marina Walk',
    type: 'refill',
    hours: '06:00 - 23:00',
    is24_7: false,
    availability: 'busy',
    amenities: ['Premium filtering', 'Multiple taps', 'Bottle cleaning']
  },
  {
    id: '4',
    name: 'JBR Beach Public Filter',
    lat: 25.0892,
    lng: 55.1344,
    address: 'Jumeirah Beach Residence',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beachside location', 'UV sterilization', 'Cold water']
  },
  {
    id: '5',
    name: 'City Walk Hydration Hub',
    lat: 25.2284,
    lng: 55.2662,
    address: 'City Walk, Al Wasl',
    type: 'both',
    hours: '08:00 - 22:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Smart sensors', 'App integration', 'Eco counter']
  },
  {
    id: '6',
    name: 'Dubai Creek Harbour Station',
    lat: 25.2244,
    lng: 55.3256,
    address: 'Dubai Creek Harbour',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Waterfront location', 'High capacity', 'Emergency access']
  },
  {
    id: '7',
    name: 'Emirates Hills Community Center',
    lat: 25.1123,
    lng: 55.1687,
    address: 'Emirates Hills',
    type: 'refill',
    hours: '07:00 - 21:00',
    is24_7: false,
    availability: 'maintenance',
    amenities: ['Community access', 'Premium quality', 'Member benefits']
  },
  {
    id: '8',
    name: 'Dubai Festival City Station',
    lat: 25.2217,
    lng: 55.3505,
    address: 'Dubai Festival City Mall',
    type: 'both',
    hours: '10:00 - 24:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Mall location', 'Family friendly', 'Multiple stations']
  },
  {
    id: '9',
    name: 'Al Barsha Park Filter',
    lat: 25.1041,
    lng: 55.1965,
    address: 'Al Barsha Park',
    type: 'free',
    hours: '05:00 - 23:00',
    is24_7: false,
    availability: 'available',
    amenities: ['Park setting', 'Exercise friendly', 'Playground nearby']
  },
  {
    id: '10',
    name: 'DIFC Gate Avenue Station',
    lat: 25.2084,
    lng: 55.2719,
    address: 'Gate Avenue, DIFC',
    type: 'refill',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Business district', 'Premium service', 'Quick refill']
  }
];

export const getStationsByFilter = (filter: 'closest' | '24/7' | 'free' | 'all') => {
  switch (filter) {
    case '24/7':
      return waterStations.filter(station => station.is24_7);
    case 'free':
      return waterStations.filter(station => station.type === 'free' || station.type === 'both');
    case 'closest':
      return waterStations.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    default:
      return waterStations;
  }
};