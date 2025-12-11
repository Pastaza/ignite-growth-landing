import { Bell, Scan, Wallet, MapPin, TrendingUp, Share2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Scan,
      title: "Instant Card Capture",
      description: "Snap a photo or forward your email. Cardly automatically extracts the balance, expiration, and barcode.",
      highlight: "2-second add",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get notified before cards expire and when you're near a store where you can use one.",
      highlight: "Never expire",
    },
    {
      icon: Wallet,
      title: "All Cards, One Place",
      description: "Physical cards, e-gift cards, store credit, loyalty points—everything organized beautifully.",
      highlight: "Unified wallet",
    },
    {
      icon: MapPin,
      title: "Location Alerts",
      description: "Walking past Starbucks? Cardly reminds you about that $12 balance waiting to be spent.",
      highlight: "Geo-aware",
    },
    {
      icon: TrendingUp,
      title: "Spending Insights",
      description: "See how much you've saved, track balances over time, and never lose money again.",
      highlight: "Smart stats",
    },
    {
      icon: Share2,
      title: "Gift & Transfer",
      description: "Don't want a card? Easily gift it to friends or family, or transfer the balance.",
      highlight: "Easy sharing",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Your Gift Cards,{" "}
            <span className="text-gradient">Finally Organized</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cardly does the heavy lifting so you can focus on spending—not searching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-hero-subtle flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Highlight Badge */}
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
                {feature.highlight}
              </span>
              
              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
