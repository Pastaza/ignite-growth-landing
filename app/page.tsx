import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://cardly.app/#organization',
      name: 'Cardly',
      url: 'https://cardly.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cardly.app/CardlyGooglePlayIcon.png',
      },
      sameAs: [
        'https://twitter.com/cardlyapp',
        'https://instagram.com/cardlyai.dev',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://cardly.app/#website',
      url: 'https://cardly.app',
      name: 'Cardly',
      publisher: {
        '@id': 'https://cardly.app/#organization',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Cardly',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'iOS, Android',
      description: 'The smart gift card manager that helps you track, remember, and spend every dollar. Never forget a gift card again.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Cardly free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We're still finalizing pricing, but we're committed to making Cardly accessible. Early waitlist members will receive special founding member pricing and exclusive perks.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I add my gift cards?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adding cards is super easy! You can snap a photo of physical cards, scan barcodes, forward email gift cards, or manually enter details. Cardly uses AI to automatically extract balance, expiration dates, and store information.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my gift card data be secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Security is our top priority. All data is encrypted end-to-end, and we never store full card numbers on our servers. We use bank-level security protocols to protect your information.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which stores and gift cards are supported?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cardly works with virtually any gift card—Amazon, Starbucks, Target, Walmart, restaurant chains, and thousands more. If it\'s a gift card, Cardly can track it.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do location-based reminders work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "When you enable location services, Cardly can detect when you're near a store where you have a gift card balance. You'll get a gentle notification reminding you to use it. You're always in control of location permissions.",
          },
        },
        {
          '@type': 'Question',
          name: 'When will Cardly launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We're currently in private beta and planning to launch publicly in early 2025. Join the waitlist to get early access and help shape the product!",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <SocialProof />
        <Problems />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
