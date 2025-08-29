import { Recycle, Truck, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            The Power of One Bottle Refill
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every single bottle you refill creates a ripple effect of positive impact 
            for Dubai's environment and community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-soft">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Environmental Impact</h3>
            <p className="text-sm text-muted-foreground">
              One refilled bottle saves 450+ years of plastic decomposition time, 
              reduces CO2 emissions from production, and prevents ocean pollution.
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-soft">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Community Support</h3>
            <p className="text-sm text-muted-foreground">
              Each refill supports delivery drivers, outdoor workers, and tourists, 
              creating a network of care across Dubai's communities.
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-soft">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Health & Savings</h3>
            <p className="text-sm text-muted-foreground">
              One refill saves 2-5 AED, promotes better hydration habits, 
              and contributes to Dubai's Vision 2071 sustainability goals.
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 max-w-lg mx-auto border shadow-soft">
            <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-foreground">Join the Movement</h4>
            <p className="text-sm text-muted-foreground">
              Every refill counts! Help us build a more sustainable Dubai, one water bottle at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};