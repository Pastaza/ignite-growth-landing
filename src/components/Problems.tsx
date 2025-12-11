import { Clock, AlertTriangle, Puzzle, RefreshCw } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: Clock,
      title: "Endless Development Cycles",
      description: "Projects drag on for months. Deadlines slip. Your competitors launch while you're still debugging.",
    },
    {
      icon: AlertTriangle,
      title: "Scattered Tools & Data",
      description: "Information lives in 10 different apps. Context switching kills productivity and morale.",
    },
    {
      icon: Puzzle,
      title: "Poor Team Alignment",
      description: "Engineering, product, and design speak different languages. Miscommunication causes rework.",
    },
    {
      icon: RefreshCw,
      title: "Manual, Repetitive Work",
      description: "Your team wastes hours on tasks that should be automated. Innovation takes a back seat.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Sound Familiar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern product teams are drowning in complexity. The tools meant to help 
            have become part of the problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-destructive/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-destructive/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
