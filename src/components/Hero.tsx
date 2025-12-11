import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
                Now with AI-powered automation
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-tight mb-6 animate-fade-up delay-100">
              Ship Products{" "}
              <span className="text-gradient">10x Faster</span>{" "}
              Without the Chaos
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-200">
              The all-in-one platform that transforms how teams build, launch, and scale products. 
              Cut development time in half while maintaining quality.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
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
                  <span className="font-semibold text-foreground">2,847+</span> teams already shipping faster
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Mockup */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-soft-gray border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground">
                      app.velocity.io/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 bg-soft-gray/50">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Active Projects", value: "24", change: "+12%" },
                      { label: "Team Velocity", value: "94%", change: "+8%" },
                      { label: "Time Saved", value: "128h", change: "+23%" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-card rounded-xl p-4 border border-border">
                        <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-primary font-medium">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-medium text-foreground">Sprint Progress</p>
                      <div className="flex gap-2">
                        <div className="w-16 h-6 bg-soft-gray rounded" />
                        <div className="w-16 h-6 bg-primary/20 rounded" />
                      </div>
                    </div>
                    <div className="flex items-end gap-2 h-32">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary to-primary-glow rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-lg border border-border p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Deployment</p>
                    <p className="text-sm font-semibold text-foreground">Successful</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-float delay-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">⚡</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Build Time</p>
                    <p className="text-sm font-semibold text-foreground">2.4s</p>
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
