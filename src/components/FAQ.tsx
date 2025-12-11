import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to get started?",
      answer: "Most teams are up and running within 24 hours. Our onboarding flow is designed to be intuitive, and we offer live support during your first week to ensure a smooth transition. For enterprise deployments, we provide dedicated onboarding assistance.",
    },
    {
      question: "Can I migrate my existing projects?",
      answer: "Absolutely. We have built-in migration tools for GitHub, GitLab, Bitbucket, Jira, and most popular development tools. Our migration assistant walks you through the process step-by-step, and we offer white-glove migration support for enterprise customers.",
    },
    {
      question: "What integrations do you support?",
      answer: "We integrate with 100+ tools including Slack, GitHub, GitLab, Jira, Linear, Figma, AWS, GCP, Azure, and more. We also offer a robust API and webhooks for custom integrations.",
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and offer enterprise-grade encryption at rest and in transit. We also support SSO/SAML, audit logs, and role-based access controls.",
    },
    {
      question: "What happens after my free trial ends?",
      answer: "You'll have the option to choose a paid plan that fits your needs. Your data and projects remain intact—nothing is lost. If you decide not to continue, you can export all your data before your account is closed.",
    },
    {
      question: "Do you offer discounts for startups or nonprofits?",
      answer: "Yes! We offer 50% off for early-stage startups (under $5M in funding) and 30% off for registered nonprofits. Contact our sales team to learn more about eligibility.",
    },
    {
      question: "Can I use Velocity for on-premise deployments?",
      answer: "Yes, our Enterprise plan includes an on-premise deployment option. This is ideal for organizations with strict data residency requirements or those in regulated industries.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include email support. Pro plans get priority support with a 4-hour SLA. Enterprise customers receive a dedicated Customer Success Manager, 24/7 phone support, and custom SLAs.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Velocity. Can't find an answer? Contact our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
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
