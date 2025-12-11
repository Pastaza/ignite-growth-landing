import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: "29",
      period: "per user/month",
      features: [
        "Up to 10 team members",
        "5 active projects",
        "Basic analytics",
        "Email support",
        "GitHub integration",
        "1GB storage",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      description: "For growing teams that need more power",
      price: "79",
      period: "per user/month",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced analytics & insights",
        "Priority support (4hr SLA)",
        "All integrations",
        "100GB storage",
        "Custom workflows",
        "SSO / SAML",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For organizations with advanced needs",
      price: "Custom",
      period: "tailored pricing",
      features: [
        "Everything in Pro",
        "Dedicated success manager",
        "Custom SLA (99.99% uptime)",
        "On-premise deployment option",
        "Advanced security controls",
        "Custom integrations",
        "Training & onboarding",
        "Audit logs & compliance",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-xl shadow-glow scale-105"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-cta text-primary-foreground text-sm font-semibold rounded-full shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span className="text-2xl text-muted-foreground">$</span>
                  )}
                  <span className="text-5xl font-heading font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            ✓ 14-day free trial &nbsp; ✓ No credit card required &nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
