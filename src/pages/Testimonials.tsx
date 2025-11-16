import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kevin D.",
      location: "Bethesda, MD",
      rating: 5,
      text: "Hamid and the team at Hamilton Bath helped me with a project to re-tile my shower. In short they are incredibly professional, high quality, time efficient, and are quick to respond with any questions or information. Would definitely recommend",
      project: "Master Bathroom Remodel"
    },
    {
      name: "Lee Ann W.",
      location: "Leesburg, VA",
      rating: 5,
      text: "Hamilton Bath did a wonderful job on my master bathroom remodel. Hamid took the time to work with me on my design and budget. I'm extremely pleased with the final results and would definitely recommend.",
      project: "Master Bathroom Remodel"
    },
    {
      name: "Jennifer K.",
      location: "McLean, VA",
      rating: 5,
      text: "We had a tight timeline and a specific vision. Hamilton Bath delivered beyond our expectations. The craftsmanship is outstanding, and they kept the work area clean throughout the project.",
      project: "Guest Bathroom Update"
    },
    {
      name: "David & Linda P.",
      location: "Reston, VA",
      rating: 5,
      text: "After interviewing several contractors, we chose Hamilton Bath for their experience and honest communication. Best decision we made! Our new bathroom is beautiful and functional.",
      project: "Accessible Bathroom Remodel"
    },
    {
      name: "Amanda T.",
      location: "Burke, VA",
      rating: 5,
      text: "The quality of work speaks for itself. Hamilton Bath turned our cramped, outdated bathroom into a spa-like retreat. They were patient with all our questions and made great design suggestions.",
      project: "Contemporary Bath Transformation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from homeowners across Northern Virginia who have experienced the Hamilton Bath difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-sm text-accent mt-1 font-medium">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-secondary rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our satisfied clients and transform your bathroom today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
