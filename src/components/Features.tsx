import { Zap, GitBranch, BarChart3, Shield, Workflow, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Builds",
      description: "Deploy in seconds, not minutes. Our optimized infrastructure ensures your code goes live instantly.",
      highlight: "10x faster",
    },
    {
      icon: GitBranch,
      title: "Smart Branching",
      description: "AI-powered branch management suggests optimal merge strategies and prevents conflicts before they happen.",
      highlight: "Zero conflicts",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track every metric that matters. From sprint velocity to deployment frequency, see it all in one place.",
      highlight: "360° visibility",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified. Your code and data are protected by industry-leading security standards.",
      highlight: "Bank-grade",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate repetitive tasks with our visual workflow builder. No code required.",
      highlight: "500+ templates",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in code review, async video comments, and real-time editing. Your remote team works as one.",
      highlight: "Seamless sync",
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
            Everything You Need to{" "}
            <span className="text-gradient">Ship Faster</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete toolkit designed for modern development teams. 
            Stop juggling tools and start shipping products.
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
