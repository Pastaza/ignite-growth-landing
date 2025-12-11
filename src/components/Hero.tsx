import { Button } from "@/components/ui/button";
import { ArrowRight, Bell, Gift, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Geometric Patterns */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-primary/20 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-primary/10 rounded-xl -rotate-12 animate-float delay-300" />
      <div className="absolute top-1/3 left-10 w-12 h-12 border-2 border-primary/10 rounded-full animate-float delay-500" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">
                Coming soon — Join the waitlist
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-tight mb-6 animate-fade-up delay-100">
              Never Let a{" "}
              <span className="text-gradient">Gift Card</span>{" "}
              Go to Waste
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-200">
              Cardly tracks all your gift cards in one place, reminds you before they expire, 
              and helps you spend every dollar. Stop losing money to forgotten cards.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Button variant="hero" size="xl">
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                See How It Works
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-border animate-fade-up delay-400">
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-soft-gray to-medium-gray flex items-center justify-center text-xs font-medium text-muted-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">2,400+</span> people on the waitlist
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Mockup */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative">
              {/* Main App Card */}
              <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
                {/* Phone Frame */}
                <div className="bg-charcoal p-2 rounded-t-3xl">
                  <div className="flex justify-center">
                    <div className="w-20 h-6 bg-foreground/20 rounded-full" />
                  </div>
                </div>
                
                {/* App Content */}
                <div className="p-6 bg-soft-gray/50">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-muted-foreground">Total Balance</p>
                      <p className="text-3xl font-bold text-foreground">$847.50</p>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Cards */}
                  <div className="space-y-3">
                    {[
                      { name: "Amazon", balance: "$125.00", expires: "Dec 2025", color: "from-amber-500 to-orange-600" },
                      { name: "Starbucks", balance: "$47.50", expires: "Mar 2025", color: "from-green-500 to-emerald-600" },
                      { name: "Target", balance: "$200.00", expires: "Jan 2025", color: "from-red-500 to-rose-600", urgent: true },
                      { name: "Apple Store", balance: "$475.00", expires: "Jun 2025", color: "from-gray-600 to-gray-800" },
                    ].map((card, i) => (
                      <div key={i} className="bg-card rounded-xl p-4 border border-border flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                          <CreditCard className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{card.name}</p>
                          <p className="text-xs text-muted-foreground">Expires {card.expires}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-foreground">{card.balance}</p>
                          {card.urgent && (
                            <span className="text-xs text-destructive font-medium">Expiring soon!</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Reminder</p>
                    <p className="text-sm font-semibold text-foreground">Target expires in 3 days!</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-float delay-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Gift className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">This month</p>
                    <p className="text-sm font-semibold text-foreground">$127 saved!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
