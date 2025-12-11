import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-cta relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-primary-foreground/20 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-20 left-16 w-16 h-16 bg-primary-foreground/10 rounded-xl -rotate-12 animate-float delay-300" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Limited time: 20% off annual plans
            </span>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Ready to Ship Products{" "}
            <br className="hidden sm:block" />
            10x Faster?
          </h2>
          
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join 2,847+ teams who've already transformed their development workflow. 
            Start your free trial today—no credit card required.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule a Demo
            </Button>
          </div>
          
          {/* Trust Badge */}
          <p className="mt-8 text-sm text-primary-foreground/60">
            ✓ 14-day free trial &nbsp; ✓ No credit card required &nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
