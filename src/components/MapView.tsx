import { useState } from 'react';
import { MapPin, Navigation, Clock, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WaterStation } from '@/data/waterStations';

interface MapViewProps {
  stations: WaterStation[];
  userLocation?: { lat: number; lng: number } | null;
}

export const MapView = ({ stations, userLocation }: MapViewProps) => {
  const [selectedStation, setSelectedStation] = useState<WaterStation | null>(null);

  const getStatusColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-success';
      case 'busy': return 'bg-amber-500';
      case 'maintenance': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  const handleNavigate = (station: WaterStation) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden shadow-soft">
      {/* Simulated Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50"></div>
      
      {/* Dubai Landmarks Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+Cg==')] opacity-30"></div>
      
      {/* User Location Pin */}
      {userLocation && (
        <div 
          className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg pulse-water z-10"
          style={{
            left: '45%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-full animate-ping"></div>
        </div>
      )}

      {/* Water Station Pins */}
      {stations.map((station, index) => (
        <div
          key={station.id}
          className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            left: `${20 + (index * 10) % 60}%`,
            top: `${30 + (index * 8) % 40}%`
          }}
          onClick={() => setSelectedStation(station)}
        >
          <div className="relative">
            <div className={`w-6 h-6 ${getStatusColor(station.availability)} rounded-full border-2 border-white shadow-lg hover:scale-125 smooth-transition`}>
              <Droplets className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            {station.is24_7 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border border-white"></div>
            )}
          </div>
        </div>
      ))}

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

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
        <Button variant="outline" size="icon" className="bg-card/90 backdrop-blur-sm">
          <MapPin className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};