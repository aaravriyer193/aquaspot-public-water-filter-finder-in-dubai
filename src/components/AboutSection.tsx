import { Droplets, Leaf, Truck, Users, Award, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  const benefits = [
    {
      icon: Droplets,
      title: 'Pure Hydration',
      description: 'Access to clean, filtered water throughout Dubai',
      color: 'text-blue-500'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Reduce plastic waste and protect our environment',
      color: 'text-green-500'
    },
    {
      icon: Truck,
      title: 'Driver Support',
      description: 'Essential hydration points for delivery drivers',
      color: 'text-orange-500'
    },
    {
      icon: Users,
      title: 'Community Health',
      description: 'Promoting wellness for residents and visitors',
      color: 'text-purple-500'
    }
  ];

  const stats = [
    { value: '500+', label: 'Plastic Bottles Saved Daily' },
    { value: '50+', label: 'Water Stations Across Dubai' },
    { value: '24/7', label: 'Always Available Access' },
    { value: '100%', label: 'Free Public Service' }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-accent/50">
            About Our Mission
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Keeping Dubai Hydrated & Sustainable
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our network of public water filters helps reduce plastic waste while ensuring everyone 
            in Dubai has access to clean, refreshing water - from residents to tourists to hardworking delivery drivers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg smooth-transition bg-card/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-accent/20">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="gradient-hero rounded-xl p-8 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <Card className="p-8 gradient-water text-white">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <Heart className="w-12 h-12 text-white/90" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Environmental Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">For Our Planet</h4>
                  <ul className="space-y-1 text-white/90 text-sm">
                    <li>• Reduces single-use plastic bottles</li>
                    <li>• Decreases carbon footprint from transportation</li>
                    <li>• Promotes sustainable living habits</li>
                    <li>• Supports Dubai's green initiatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">For Our Community</h4>
                  <ul className="space-y-1 text-white/90 text-sm">
                    <li>• Free access to clean drinking water</li>
                    <li>• Supports delivery workers' health</li>
                    <li>• Encourages outdoor activities</li>
                    <li>• Builds stronger, healthier communities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-accent/50 rounded-lg p-6 max-w-lg mx-auto">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Join the Movement</h4>
            <p className="text-sm text-muted-foreground">
              Every refill counts! Help us build a more sustainable Dubai, one water bottle at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};