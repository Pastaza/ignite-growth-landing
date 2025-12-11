import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Cardly free?",
      answer: "We're still finalizing pricing, but we're committed to making Cardly accessible. Early waitlist members will receive special founding member pricing and exclusive perks. Join the waitlist to be the first to know!",
    },
    {
      question: "How do I add my gift cards?",
      answer: "Adding cards is super easy! You can snap a photo of physical cards, scan barcodes, forward email gift cards, or manually enter details. Cardly uses AI to automatically extract balance, expiration dates, and store information.",
    },
    {
      question: "Will my gift card data be secure?",
      answer: "Absolutely. Security is our top priority. All data is encrypted end-to-end, and we never store full card numbers on our servers. We use bank-level security protocols to protect your information.",
    },
    {
      question: "Which stores and gift cards are supported?",
      answer: "Cardly works with virtually any gift card—Amazon, Starbucks, Target, Walmart, restaurant chains, and thousands more. If it's a gift card, Cardly can track it.",
    },
    {
      question: "How do location-based reminders work?",
      answer: "When you enable location services, Cardly can detect when you're near a store where you have a gift card balance. You'll get a gentle notification reminding you to use it. You're always in control of location permissions.",
    },
    {
      question: "Can I share gift cards with family members?",
      answer: "Yes! Cardly makes it easy to gift or transfer cards to friends and family. Perfect for when you receive a card to a store you don't shop at.",
    },
    {
      question: "What happens to expired gift cards?",
      answer: "With Cardly, you'll get reminders well before expiration so you can use your balance. But if a card does expire, we'll archive it and help you check if the store offers any recovery options—some do!",
    },
    {
      question: "When will Cardly launch?",
      answer: "We're currently in private beta and planning to launch publicly in early 2025. Join the waitlist to get early access and help shape the product!",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Cardly. More questions? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
