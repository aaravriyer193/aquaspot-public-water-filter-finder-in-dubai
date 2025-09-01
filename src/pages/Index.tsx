import { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SearchAndFilter } from '@/components/SearchAndFilter';
import { LeafletMap } from '@/components/LeafletMap';
import { AboutSection } from '@/components/AboutSection';
import { waterStations, getStationsByFilter, WaterStation } from '@/data/waterStations';

const Index = () => {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [filteredStations, setFilteredStations] = useState<WaterStation[]>(waterStations);
  const [currentFilter, setCurrentFilter] = useState<'all' | 'closest' | '24/7' | 'free'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      toast({
        title: "Requesting location...",
        description: "Please allow location access to find nearby stations",
      });

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          toast({
            title: "Location found!",
            description: "Now showing stations near you",
          });
        },
        (error) => {
          console.error("Location error:", error);
          toast({
            title: "Location access denied",
            description: "You can still browse all water stations",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Location not supported",
        description: "Your browser doesn't support location services",
        variant: "destructive",
      });
    }
  };

  const handleFilter = (filter: 'all' | 'closest' | '24/7' | 'free') => {
    setCurrentFilter(filter);
    let filtered = getStationsByFilter(filter, userLocation);
    
    if (searchQuery) {
      filtered = filtered.filter(station => 
        station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredStations(filtered);
    
    toast({
      title: `Filter applied: ${filter}`,
      description: `Showing ${filtered.length} stations`,
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    let filtered = getStationsByFilter(currentFilter, userLocation);
    
    if (query) {
      filtered = filtered.filter(station => 
        station.name.toLowerCase().includes(query.toLowerCase()) ||
        station.address.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    setFilteredStations(filtered);
  };

  // Calculate distances if user location is available
  useEffect(() => {
    if (userLocation) {
      const stationsWithDistance = waterStations.map(station => ({
        ...station,
        distance: Math.sqrt(
          Math.pow(station.lat - userLocation.lat, 2) + 
          Math.pow(station.lng - userLocation.lng, 2)
        ) * 111 // Rough km conversion
      }));
      setFilteredStations(stationsWithDistance);
    }
  }, [userLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        onLocationRequest={requestLocation}
        hasLocation={!!userLocation}
      />

      {/* Map Section */}
      <section id="map" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Find Water Stations Near You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use the map below to locate the nearest water refill stations. 
              Click on any pin for details and directions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <SearchAndFilter 
              onSearch={handleSearch}
              onFilter={handleFilter}
              currentFilter={currentFilter}
            />
          </div>

          {/* Map */}
          <LeafletMap 
            stations={filteredStations}
            userLocation={userLocation}
          />

          {/* Results Summary */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Showing {filteredStations.length} water stations
                {searchQuery && ` for "${searchQuery}"`}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card/30 backdrop-blur-sm border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-sm text-muted-foreground">
            <p>Made by AARAV IYER from project <a href="https://refill.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">refill.net</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
