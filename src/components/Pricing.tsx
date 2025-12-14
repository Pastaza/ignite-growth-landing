import { Check, Star, Sparkles, Users } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Basic",
      badge: "Free Tier",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      icon: null,
      highlighted: false,
      features: [
        {
          category: "Gift Card Management",
          items: [
            "Add up to 10 gift cards",
            "Edit card details (balance, expiration, notes)",
            "Delete cards with confirmation",
            "View in organized layout",
          ],
        },
        {
          category: "Balance Tracking",
          items: [
            "View current balance for each card",
            "See initial vs. current balance",
            "Visual progress bars",
            "Total value calculation",
          ],
        },
        {
          category: "Expiration Alerts",
          items: [
            "Color-coded expiration status",
            "🔴 Expired/Critical (< 7 days)",
            "🟡 Warning (< 30 days)",
            "🟢 Safe (> 30 days)",
          ],
        },
        {
          category: "Categories",
          items: [
            "6 preset categories (Retail, Restaurant, Entertainment, Gas, Grocery, Other)",
            "Filter by single category",
          ],
        },
        {
          category: "Other Features",
          items: [
            "Basic search",
            "Sort by recently added or store name",
            "Mobile responsive design",
            "Google OAuth sign in",
            "LocalStorage data persistence",
          ],
        },
      ],
    },
    {
      name: "Saver",
      badge: "⭐ Pro Tier",
      price: "$2.99",
      period: "/month",
      yearlyPrice: "$29/year",
      yearlySaving: "save 19%",
      description: "Everything in Free, plus:",
      icon: Star,
      highlighted: true,
      features: [
        {
          category: "Unlimited Gift Cards",
          items: ["Track unlimited gift cards (no 10-card limit)"],
        },
        {
          category: "Advanced Dashboard",
          items: [
            "Full dashboard view with all metrics",
            "Total balance across all cards",
            "Number of active cards",
            "Total value at risk (expiring soon)",
            "Total spent calculation",
            "Balance distribution by category with progress bars",
            "Cards expiring soon list",
            "Recent activity tracking",
          ],
        },
        {
          category: "Enhanced Search & Filter",
          items: [
            "Full-text search across store names, categories, and notes",
            "Sort by: Balance (high to low)",
            "Sort by: Expiration date",
            "Filter by: Multiple categories at once",
            "Filter by: Expiration status (show only expiring cards)",
          ],
        },
        {
          category: "Card Details",
          items: [
            "Store card number (last 4 digits)",
            "Add detailed notes to each card",
            "Track updated timestamps",
          ],
        },
      ],
    },
    {
      name: "Power User",
      badge: "💎 Premium Tier",
      price: "$5.99",
      period: "/month",
      yearlyPrice: "$59/year",
      yearlySaving: "save 17%",
      description: "Everything in Pro, plus:",
      icon: Sparkles,
      highlighted: false,
      features: [
        {
          category: "Coming Soon Features",
          items: [
            "Transaction tracking with spending history",
            "Export data to CSV",
            "Dark mode toggle",
            "Import gift cards from file",
            "Email notifications for expiring cards",
          ],
        },
        {
          category: "Early Adopter Benefit",
          items: ["Lifetime access to all future features as they're released"],
        },
      ],
    },
    {
      name: "Family Plan",
      badge: "🏢 Family",
      price: "$9.99",
      period: "/month",
      yearlyPrice: "$99/year",
      description: "Everything in Premium, plus:",
      icon: Users,
      highlighted: false,
      features: [
        {
          category: "Family Features",
          items: [
            "Up to 5 Google accounts",
            "Shared card pools (when implemented)",
            "Family dashboard view",
            "Each family member can add/edit shared cards",
          ],
        },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and upgrade when you need more. All plans include core gift card tracking features.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            All prices are in NZD (New Zealand Dollars)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 lg:p-8 border transition-all duration-300 ${
                tier.highlighted
                  ? "bg-gradient-hero-subtle border-primary shadow-xl scale-[1.02]"
                  : "bg-card border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {tier.badge}
                </span>
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-heading font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="text-muted-foreground">{tier.period}</span>
                {tier.yearlyPrice && (
                  <div className="mt-1">
                    <span className="text-sm text-muted-foreground">
                      or {tier.yearlyPrice}
                    </span>
                    {tier.yearlySaving && (
                      <span className="ml-2 text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {tier.yearlySaving}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <div className="space-y-4">
                {tier.features.map((featureGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                      {featureGroup.category}
                    </p>
                    <ul className="space-y-2">
                      {featureGroup.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground list-none">
            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>No credit card required to join waitlist</span>
            </li>
            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>Early access to beta</span>
            </li>
            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>Special founding member pricing</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
