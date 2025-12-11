import { Scan, Bell, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Scan,
      step: "01",
      title: "Add Your Cards",
      description: "Snap a photo, scan a barcode, or forward email gift cards. Cardly captures all the details automatically.",
    },
    {
      icon: Bell,
      step: "02",
      title: "Get Smart Reminders",
      description: "Receive alerts before cards expire and when you're near stores where you can use them.",
    },
    {
      icon: CreditCard,
      step: "03",
      title: "Spend Every Dollar",
      description: "Pull up your digital wallet at checkout. Never forget a card or lose money to expiration again.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Three Steps to Never Lose Money Again
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started takes less than a minute. Here's how Cardly keeps your gift cards working for you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
                
                {/* Step Number */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-hero-subtle flex flex-col items-center justify-center border-2 border-primary/20">
                  <span className="text-xs font-bold text-primary mb-1">STEP</span>
                  <span className="text-4xl font-heading font-bold text-gradient">{step.step}</span>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-border">
            {[
              { value: "$847", label: "Avg. saved per user" },
              { value: "12", label: "Cards tracked on average" },
              { value: "98%", label: "Cards used before expiry" },
              { value: "30 sec", label: "To add a new card" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
