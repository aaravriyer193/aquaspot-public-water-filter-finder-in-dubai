import { useState } from 'react';
import { Search, Filter, MapPin, Clock, Droplets } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filter: 'all' | 'closest' | '24/7' | 'free') => void;
  currentFilter: string;
}

export const SearchAndFilter = ({ onSearch, onFilter, currentFilter }: SearchAndFilterProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const filters = [
    { value: 'all', label: 'All Stations', icon: MapPin },
    { value: 'closest', label: 'Closest', icon: MapPin },
    { value: '24/7', label: '24/7 Open', icon: Clock },
    { value: 'free', label: 'Free Access', icon: Droplets },
  ];

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search by area or landmark..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 bg-card/50 backdrop-blur-sm border-border/50 focus:bg-card smooth-transition"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = currentFilter === filter.value;
          
          return (
            <Button
              key={filter.value}
              onClick={() => onFilter(filter.value as any)}
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={`flex items-center gap-2 ${
                isActive 
                  ? 'gradient-water text-white shadow-lg' 
                  : 'bg-card/50 backdrop-blur-sm hover:bg-card'
              }`}
            >
              <Icon className="w-4 h-4" />
              {filter.label}
            </Button>
          );
        })}
      </div>

      {/* Active Filter Display */}
      {currentFilter !== 'all' && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filter:</span>
          <Badge variant="outline" className="bg-accent/50">
            {filters.find(f => f.value === currentFilter)?.label}
          </Badge>
        </div>
      )}
    </div>
  );
};