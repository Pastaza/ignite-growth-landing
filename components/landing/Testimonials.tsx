'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Frequent Shopper',
    content: 'I used to forget about gift cards all the time. Cardly has saved me hundreds of dollars!',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    role: 'Small Business Owner',
    content: 'Perfect for managing client gift cards. The expiration reminders are a lifesaver.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Budget Conscious',
    content: 'Finally, all my gift cards in one place. No more searching through emails!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about Cardly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/50 rounded-lg p-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-foreground">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
