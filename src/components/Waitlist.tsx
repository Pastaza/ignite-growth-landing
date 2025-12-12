import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, CheckCircle, ArrowLeft, Sparkles, Users, Bell } from "lucide-react";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "You're on the list!",
      description: "We'll notify you when Cardly launches.",
    });
  };

  const benefits = [
    {
      icon: Sparkles,
      title: "Early Access",
      description: "Be the first to try Cardly before anyone else",
    },
    {
      icon: Users,
      title: "Founding Member Perks",
      description: "Exclusive discounts and features for early supporters",
    },
    {
      icon: Bell,
      title: "Launch Updates",
      description: "Get notified about our progress and launch date",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Form */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center">
                  <Gift className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-xl text-foreground">Cardly</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Join the Waitlist
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Be the first to know when Cardly launches. Stop forgetting your gift cards forever.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      disabled={isLoading}
                      className="h-12 px-8"
                    >
                      {isLoading ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    No spam. We'll only email you about the launch.
                  </p>
                </form>
              ) : (
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="font-heading font-semibold text-lg text-foreground">
                      You're on the list!
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Thanks for joining! We'll send you an email when Cardly is ready to launch.
                  </p>
                </div>
              )}

              {/* Social Proof */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Join <span className="text-foreground font-semibold">2,000+</span> others on the waitlist
                </p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-muted-foreground">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-foreground">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="order-1 lg:order-2">
              <div className="bg-card border border-border rounded-3xl p-8">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-6">
                  What you'll get
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
