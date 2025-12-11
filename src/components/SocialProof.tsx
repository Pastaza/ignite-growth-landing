const SocialProof = () => {
  return (
    <section className="py-16 lg:py-20 bg-soft-gray border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Built for everyone who's ever said "I forgot I had that gift card"
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "$21B", label: "in gift cards go unused yearly" },
            { value: "47%", label: "of people forget their cards" },
            { value: "6 months", label: "avg. time cards sit unused" },
            { value: "$175", label: "lost per household annually" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-2 mt-10 pt-8 border-t border-border">
          <span className="text-sm text-muted-foreground">
            Don't be a statistic. <span className="font-semibold text-foreground">Cardly helps you spend smarter.</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
