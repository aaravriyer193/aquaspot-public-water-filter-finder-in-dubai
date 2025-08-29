import { Droplets } from 'lucide-react';

interface WaterMascotProps {
  message?: string;
  className?: string;
}

export const WaterMascot = ({ 
  message = "Stay hydrated, Dubai! 💧", 
  className = "" 
}: WaterMascotProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
          <Droplets className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full pulse-water"></div>
      </div>
      <div className="bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-soft max-w-xs">
        <p className="text-sm font-medium text-foreground">{message}</p>
      </div>
    </div>
  );
};