'use client';

import Link from 'next/link';
import { Button } from './ui/Button';
import Features from './landing/Features';
import Testimonials from './landing/Testimonials';
import SocialProof from './landing/SocialProof';
import CTABanner from './landing/CTABanner';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Never Forget a Gift Card Again
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Track all your gift cards in one place. Get reminders before they expire.
            Stop losing money to forgotten cards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login?signup=true">
              <Button size="lg">
                Get Started Free
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SocialProof />
      <Features />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
