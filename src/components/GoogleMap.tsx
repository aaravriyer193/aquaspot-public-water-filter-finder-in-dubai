import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navigation, Clock, Droplets } from 'lucide-react';
import { WaterStation } from '@/data/waterStations';

interface GoogleMapProps {
  stations: WaterStation[];
  userLocation?: { lat: number; lng: number } | null;
  apiKey?: string;
}

declare global {
  interface Window {
    google: any;
  }
}

export const GoogleMap = ({ stations, userLocation, apiKey }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [selectedStation, setSelectedStation] = useState<WaterStation | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const mapOptions = {
        zoom: 12,
        center: userLocation || { lat: 25.2048, lng: 55.2708 }, // Dubai center
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e3f2fd' }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          }
        ]
      };

      mapInstance.current = new window.google.maps.Map(mapRef.current, mapOptions);
      setMapReady(true);

      // Add user location marker if available
      if (userLocation) {
        new window.google.maps.Marker({
          position: userLocation,
          map: mapInstance.current,
          title: 'Your Location',
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" fill="#2563eb" stroke="white" stroke-width="2"/>
                <circle cx="10" cy="10" r="3" fill="white"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(20, 20),
            anchor: new window.google.maps.Point(10, 10)
          }
        });
      }
    };

    // Check if Google Maps API is loaded
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      // Wait for the API to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkGoogleMaps);
          initializeMap();
        }
      }, 100);

      return () => clearInterval(checkGoogleMaps);
    }
  }, [userLocation]);

  useEffect(() => {
    if (!mapInstance.current || !mapReady) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add station markers
    stations.forEach((station) => {
      const getMarkerColor = (availability: string) => {
        switch (availability) {
          case 'available': return '#10b981';
          case 'busy': return '#f59e0b';
          case 'maintenance': return '#ef4444';
          default: return '#6b7280';
        }
      };

      const marker = new window.google.maps.Marker({
        position: { lat: station.lat, lng: station.lng },
        map: mapInstance.current,
        title: station.name,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="${getMarkerColor(station.availability)}" stroke="white" stroke-width="2"/>
              <path d="M12 14c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.33-.65 2.51-1.65 3.24L16 22l-2.35-4.76C12.65 16.51 12 15.33 12 14z" fill="white"/>
              <circle cx="16" cy="14" r="2" fill="${getMarkerColor(station.availability)}"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(32, 32),
          anchor: new window.google.maps.Point(16, 32)
        }
      });

      marker.addListener('click', () => {
        setSelectedStation(station);
        mapInstance.current.panTo({ lat: station.lat, lng: station.lng });
      });

      markersRef.current.push(marker);
    });
  }, [stations, mapReady]);

  const handleNavigate = (station: WaterStation) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}`;
    window.open(url, '_blank');
  };

  const getStatusColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-success';
      case 'busy': return 'bg-amber-500';
      case 'maintenance': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  if (!apiKey) {
    return (
      <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden shadow-soft flex items-center justify-center">
        <Card className="p-6 text-center max-w-md">
          <h3 className="font-semibold mb-2">Google Maps Integration</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Please add your Google Maps API key to enable live maps with real landmarks and roads.
          </p>
          <p className="text-xs text-muted-foreground">
            Get your API key from <a href="https://developers.google.com/maps/gmp-get-started" target="_blank" className="text-primary hover:underline">Google Cloud Console</a>
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-soft">
      <div ref={mapRef} className="w-full h-full" />
      
      {/* Station Detail Card */}
      {selectedStation && (
        <Card className="absolute bottom-4 left-4 right-4 p-4 bg-card/95 backdrop-blur-sm border shadow-lg z-30">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-foreground">{selectedStation.name}</h3>
              <p className="text-sm text-muted-foreground">{selectedStation.address}</p>
            </div>
            <Button
              onClick={() => setSelectedStation(null)}
              variant="ghost"
              size="sm"
              className="ml-2"
            >
              ✕
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant={selectedStation.availability === 'available' ? 'default' : 'secondary'}>
              {selectedStation.availability}
            </Badge>
            {selectedStation.is24_7 && <Badge variant="outline">24/7</Badge>}
            <Badge variant="outline">{selectedStation.type}</Badge>
          </div>
          
          <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{selectedStation.hours}</span>
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={() => handleNavigate(selectedStation)}
              variant="water"
              size="sm"
              className="flex-1"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Navigate
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedStation(null)}
            >
              Close
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};