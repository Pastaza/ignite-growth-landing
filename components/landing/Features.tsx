'use client';

import { Gift, Bell, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: <Gift className="h-6 w-6" />,
    title: 'Track All Your Cards',
    description: 'Store and manage all your gift cards in one secure, organized place.',
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: 'Never Miss Expiration',
    description: 'Get timely reminders before your gift cards expire, so you never lose value.',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Monitor Balances',
    description: 'Track remaining balances and see your total gift card value at a glance.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure & Private',
    description: 'Bank-level encryption keeps your gift card information safe and secure.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Manage Gift Cards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cardly makes it simple to track, organize, and use all your gift cards before they expire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
