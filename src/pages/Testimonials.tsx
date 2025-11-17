import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Testimonials = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<number>>(new Set());

  const toggleTestimonial = (index: number) => {
    setExpandedTestimonials(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
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
      name: "Deena P.",
      location: "Falls Church, VA",
      rating: 5,
      text: "I recently had two bathrooms completely redone by Hamilton Bath and the results have exceeded my expectations! I now have two Pinterest-worthy bathrooms that are beautiful and functional. Although the work took longer than expected because both bathrooms had hidden damage under the floors, Hamid kept me updated regularly and ultimately improved the structure as well as resolving an issue that would have led to significant damage. Miguel's craftsmanship was the most meticulous and expert I have seen. I have had several projects completed and none of them were finished as perfectly as this one. I will definitely use Hamilton Bath again when I'm ready to redo the other bathrooms.",
      project: "Master & Guest Bathroom Remodel"
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
    },
    {
      name: "Robert S.",
      location: "Arlington, VA",
      rating: 5,
      text: "Professional service from start to finish. Hamilton Bath transformed our outdated bathroom into a modern masterpiece. Their attention to detail is exceptional.",
      project: "Full Bathroom Renovation"
    },
    {
      name: "Sarah M.",
      location: "Alexandria, VA",
      rating: 5,
      text: "Excellent workmanship and great communication throughout the project. Our new bathroom exceeded all expectations. Highly recommend Hamilton Bath!",
      project: "Luxury Master Bath"
    },
    {
      name: "James & Carol B.",
      location: "Fairfax, VA",
      rating: 5,
      text: "We couldn't be happier with our bathroom remodel. The team was professional, punctual, and the results are stunning. Worth every penny!",
      project: "Elegant Bathroom Redesign"
    },
    {
      name: "Michelle L.",
      location: "Vienna, VA",
      rating: 5,
      text: "Hamilton Bath made our dream bathroom a reality. From design to completion, everything was handled with care and expertise. Absolutely love it!",
      project: "Spa-Inspired Retreat"
    },
    {
      name: "Thomas H.",
      location: "Falls Church, VA",
      rating: 5,
      text: "Outstanding quality and service. The team was respectful of our home and completed the project on schedule. Our bathroom looks incredible!",
      project: "Modern Bathroom Update"
    },
    {
      name: "Patricia G.",
      location: "Ashburn, VA",
      rating: 5,
      text: "From consultation to final walkthrough, Hamilton Bath was fantastic. They listened to our needs and delivered exactly what we wanted.",
      project: "Classic Bathroom Remodel"
    },
    {
      name: "William F.",
      location: "Herndon, VA",
      rating: 5,
      text: "The craftsmanship is top-notch. Hamilton Bath transformed our dated bathroom into a beautiful, functional space. Could not be more pleased!",
      project: "Contemporary Renovation"
    },
    {
      name: "Elizabeth R.",
      location: "Sterling, VA",
      rating: 5,
      text: "Professional, reliable, and skilled. Hamilton Bath delivered exceptional results. Our new bathroom is everything we hoped for and more.",
      project: "Upscale Bath Transformation"
    },
    {
      name: "Daniel & Karen J.",
      location: "Centreville, VA",
      rating: 5,
      text: "We interviewed several contractors and Hamilton Bath stood out. Their work quality and customer service are unmatched. Highly recommend!",
      project: "Full Master Suite Remodel"
    },
    {
      name: "Susan C.",
      location: "Manassas, VA",
      rating: 5,
      text: "Hamilton Bath exceeded our expectations in every way. Beautiful work, fair pricing, and wonderful to work with throughout the entire process.",
      project: "Transitional Bathroom Design"
    },
    {
      name: "Christopher M.",
      location: "Tysons, VA",
      rating: 5,
      text: "Impressive attention to detail and professionalism. Hamilton Bath turned our vision into reality with stunning results. Couldn't ask for better!",
      project: "Luxury Bathroom Upgrade"
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
                  
                  {/* Mobile: show full text */}
                  <p className="md:hidden text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Tablet & Desktop: show truncated text with show more */}
                  <div className="hidden md:block">
                    <p className="text-foreground mb-4 leading-relaxed">
                      "{expandedTestimonials.has(index) || testimonial.text.length <= 250
                        ? testimonial.text
                        : testimonial.text.substring(0, 250) + "..."}"
                    </p>
                    {testimonial.text.length > 250 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleTestimonial(index)}
                        className="text-primary hover:text-primary/90 p-0 h-auto font-medium mb-4"
                      >
                        {expandedTestimonials.has(index) ? "Show Less" : "Show More"}
                      </Button>
                    )}
                  </div>
                  
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
