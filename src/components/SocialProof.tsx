const SocialProof = () => {
  const companies = [
    "Stripe",
    "Notion",
    "Linear",
    "Vercel",
    "Figma",
    "Slack",
  ];

  return (
    <section className="py-16 lg:py-20 bg-soft-gray border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by innovative teams at world-class companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {companies.map((company, index) => (
            <div
              key={company}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 bg-medium-gray rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">{company[0]}</span>
              </div>
              <span className="text-lg font-semibold">{company}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-8 mt-10 pt-8 border-t border-border">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">4.9/5</span> from 500+ reviews
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
