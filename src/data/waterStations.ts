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
    name: 'JLT - Almas East Lake',
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
    name: 'JBR - The Beach',
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
    name: 'Jumeirah 2 (near Jumeirah Beach Park)',
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
    name: 'City Walk',
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
    name: 'Business Bay (Al Habtoor City)',
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
    name: 'Business Bay (Canal Promenade)',
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
    name: 'Downtown / Burj Khalifa',
    lat: 25.193433,
    lng: 55.274081,
    address: 'Downtown Dubai, Burj Khalifa area',
    type: 'free',
    hours: 'Currently closed',
    is24_7: false,
    availability: 'maintenance',
    amenities: ['Iconic location', 'High capacity', 'Tourist friendly']
  },
  {
    id: '8',
    name: 'Al Ras (Deira)',
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
    id: '9',
    name: 'Al Daghaya / Gold Souk',
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
    id: '10',
    name: 'Jumeirah Public Beach',
    lat: 25.204411,
    lng: 55.265129,
    address: 'Jumeirah Public Beach',
    type: 'free',
    hours: '24/7',
    is24_7: true,
    availability: 'available',
    amenities: ['Beachside location', 'UV sterilization', 'Cold water']
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