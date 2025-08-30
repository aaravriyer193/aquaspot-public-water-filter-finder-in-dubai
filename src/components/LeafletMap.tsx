import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { WaterStation } from '@/data/waterStations';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LeafletMapProps {
  stations: WaterStation[];
  userLocation?: { lat: number; lng: number } | null;
  className?: string;
}

export const LeafletMap = ({ stations, userLocation, className = "" }: LeafletMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([25.2048, 55.2708], 11); // Dubai center

    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Custom icons
    const stationIcon = L.divIcon({
      html: `<div class="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
               <div class="w-2 h-2 bg-white rounded-full"></div>
             </div>`,
      className: 'custom-marker',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    const userIcon = L.divIcon({
      html: `<div class="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>`,
      className: 'user-marker',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    // Add user location marker
    if (userLocation) {
      L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
        .addTo(map)
        .bindPopup('Your Location');
    }

    // Add station markers
    stations.forEach(station => {
      const statusColor = station.availability === 'available' ? 'bg-green-500' : 
                         station.availability === 'busy' ? 'bg-yellow-500' : 'bg-red-500';
      
      const customIcon = L.divIcon({
        html: `<div class="w-6 h-6 ${statusColor} rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                 <div class="w-2 h-2 bg-white rounded-full"></div>
               </div>`,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([station.lat, station.lng], { icon: customIcon })
        .addTo(map);

      const popupContent = `
        <div class="p-2 min-w-48">
          <h3 class="font-semibold text-sm mb-2">${station.name}</h3>
          <p class="text-xs text-gray-600 mb-2">${station.address}</p>
          <div class="flex items-center gap-2 mb-2">
            <span class="inline-block w-2 h-2 ${statusColor} rounded-full"></span>
            <span class="text-xs capitalize">${station.availability}</span>
          </div>
          <div class="text-xs mb-2">
            <strong>Hours:</strong> ${station.hours}
          </div>
          <div class="text-xs mb-3">
            <strong>Type:</strong> ${station.type === 'both' ? 'Free & Refill' : station.type}
          </div>
          <button 
            onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}', '_blank')"
            class="w-full bg-blue-500 text-white text-xs py-1 px-2 rounded hover:bg-blue-600 transition-colors"
          >
            Get Directions
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    // Clean up on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [stations, userLocation]);

  return <div ref={mapRef} className={`w-full h-96 rounded-lg overflow-hidden ${className}`} />;
};