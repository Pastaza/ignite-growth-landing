"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "I found $340 in forgotten gift cards when I first set up Cardly. That alone paid for years of any subscription they could ever charge. Absolute game changer.",
      name: "Jessica M.",
      role: "Busy Mom of 3",
      avatar: "JM",
    },
    {
      quote: "The location alerts are genius. I walked past a Target and Cardly reminded me I had $75 to spend. I would have completely forgotten otherwise.",
      name: "David K.",
      role: "Sales Manager",
      avatar: "DK",
    },
    {
      quote: "My wife and I used to have gift cards scattered everywhere. Now everything's in one place and we actually use them. We've saved over $500 this year alone.",
      name: "Michael T.",
      role: "Software Engineer",
      avatar: "MT",
    },
    {
      quote: "I get gift cards for every holiday and birthday. Before Cardly, half of them expired. Now? I haven't lost a single dollar in 8 months.",
      name: "Sarah L.",
      role: "Marketing Director",
      avatar: "SL",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            People Love Cardly
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Join thousands who've stopped losing money to forgotten gift cards.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-charcoal/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-primary-foreground/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center shadow-glow">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-primary-foreground font-medium leading-relaxed mb-8 mt-4">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-primary-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { value: "100+", label: "Waitlist signups" },
            { value: "$1+", label: "In cards tracked (beta)" },
            { value: "5★", label: "Beta user rating" },
            { value: "0", label: "Cards expired" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
