import { useState, useEffect } from 'react';
import { MapPin, Navigation, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { WaterMascot } from '@/components/WaterMascot';

interface HeroSectionProps {
  onLocationRequest: () => void;
  hasLocation: boolean;
}

export const HeroSection = ({ onLocationRequest, hasLocation }: HeroSectionProps) => {
  const [welcomeMessage, setWelcomeMessage] = useState("Stay hydrated, Dubai!");

  const messages = [
    "Stay hydrated, Dubai!",
    "Find fresh water nearby!",
    "Eco-friendly hydration awaits!",
    "Your health, our mission!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 px-4 gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="text-foreground">AquaSpot</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the nearest public water filters and refill stations in Dubai. 
            Clean water, sustainable living, healthy community.
          </p>
        </div>

        {/* Mascot */}
        <div className="flex justify-center mb-8">
          <WaterMascot message={welcomeMessage} />
        </div>

        {/* Location Card */}
        <Card className="max-w-md mx-auto p-6 bg-card/80 backdrop-blur-sm shadow-lg mb-8">
          <div className="space-y-4">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">
                {hasLocation ? 'Location Detected!' : 'Enable Location'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {hasLocation 
                  ? 'We can now show you the nearest water stations' 
                  : 'Allow location access to find stations near you'
                }
              </p>
            </div>
            
            {!hasLocation && (
              <Button 
                onClick={onLocationRequest}
                variant="water"
                className="w-full"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Enable Location
              </Button>
            )}

            {hasLocation && (
              <div className="flex items-center justify-center gap-2 text-success">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Ready to find water!</span>
              </div>
            )}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-primary mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Water Stations</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Always Available</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-success mb-1">Free</div>
            <div className="text-sm text-muted-foreground">Public Access</div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
    </section>
  );
};