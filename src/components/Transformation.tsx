import { X, Check } from "lucide-react";

const Transformation = () => {
  const comparisons = [
    {
      before: "6-month development cycles",
      after: "Ship in weeks, not months",
    },
    {
      before: "10+ disconnected tools",
      after: "One unified platform",
    },
    {
      before: "Constant context switching",
      after: "Deep focus, less meetings",
    },
    {
      before: "Manual deployments & errors",
      after: "Automated CI/CD pipelines",
    },
    {
      before: "Siloed teams, poor alignment",
      after: "Seamless collaboration",
    },
    {
      before: "Reactive firefighting",
      after: "Proactive, data-driven decisions",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Transformation
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            What Changes When You Switch
          </h2>
          <p className="text-lg text-muted-foreground">
            See the dramatic difference Velocity makes for teams just like yours.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Before Column */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">Before Velocity</h3>
                    <p className="text-sm text-muted-foreground">The old way of working</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <p className="text-foreground">{item.before}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* After Column */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">After Velocity</h3>
                    <p className="text-sm text-muted-foreground">The new reality</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{item.after}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
            {[
              { value: "73%", label: "Faster time to market" },
              { value: "2.4x", label: "More deployments per day" },
              { value: "45%", label: "Reduction in bugs" },
              { value: "89%", label: "Team satisfaction rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-2">
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

export default Transformation;
