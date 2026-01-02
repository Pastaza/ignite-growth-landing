'use client';

import Link from 'next/link';
import { Button } from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Never Forget a Gift Card Again?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of users who are saving money and never losing track of their gift cards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login?signup=true">
            <Button size="lg" variant="secondary">
              Get Started Free
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
