import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Testimonials = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<number>>(new Set());

  const toggleTestimonial = (index: number) => {
    setExpandedTestimonials((prev) => {
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
      name: "Sonja R.",
      location: "Arlington, VA",
      rating: 5,
      text: "Hamid and his team at Hamilton Bath remodeled two bathrooms for us - our main owner's suite bath and a small bath downstairs so we worked with two of his teams. Both were amazing. We had remodeled our main bath about 15 years ago and the shower pan had leaked so they had to repair some damage in addition to the other work. We couldn't be happier with the final result. Miguel is a true perfectionist - he made sure all the lines on the decorative tile matched perfectly etc. and made several suggestions that greatly improved the look of the tile. The level of craftsmanship was significantly higher that other contractors we have worked with. It's such a pleasure to work with a craftsman who cares so much about the quality of the work!! Also, both crews were very careful to avoid tracking dust around the house - putting drop cloths all the way from the front door to the work site and cleaning up at the end of every day. I could go on and on eben though I tend to be a bit of a perfectionist and rarely give 5 star reviews. Overall, we feel extremely fortunate to have found Hamid and his crew. And, if you're reading this, good luck with your project!",
      project: "Master & Guest Bathroom Remodel",
    },
    {
      name: "Lee Ann W.",
      location: "Leesburg, VA",
      rating: 5,
      text: "Hamilton Bath did a wonderful job on my master bathroom remodel. Hamid took the time to work with me on my design and budget. I'm extremely pleased with the final results and would definitely recommend.",
      project: "Master Bathroom Remodel",
    },
    {
      name: "Deena P.",
      location: "Falls Church, VA",
      rating: 5,
      text: "I recently had two bathrooms completely redone by Hamilton Bath and the results have exceeded my expectations! I now have two Pinterest-worthy bathrooms that are beautiful and functional. Although the work took longer than expected because both bathrooms had hidden damage under the floors, Hamid kept me updated regularly and ultimately improved the structure as well as resolving an issue that would have led to significant damage. \n\nMiguel's craftsmanship was the most meticulous and expert I have seen. I have had several projects completed and none of them were finished as perfectly as this one. I will definitely use Hamilton Bath again when I'm ready to redo the other bathrooms.",
      project: "Master & Guest Bathroom Remodel",
    },
    {
      name: "Joseph C.",
      location: "Ashburn, VA",
      rating: 5,
      text: "We had contracted with Hamilton Bath to do a complete renovation of our master bathroom. Hamid was extremely helpful during the planning and designing phase of the project. The construction went smoothly and the attention to detail and craftsmanship was outstanding. We are very pleased with the outcome and highly recommend Hamilton Bath.",
      project: "Master Bathroom Remodel",
    },
    {
      name: "Tom M.",
      location: "Vienna, VA",
      rating: 5,
      text: "Hamid was able to step in and successfully complete a kitchen floor project after another contractor had not delivered. I am very happy with the beautiful results, and can recommend Hamilton Bath without any hesitation.",
      project: "Flooring Installation",
    },
    {
      name: "Jackie & Nick G.",
      location: "Franconia, VA",
      rating: 5,
      text: "We contacted Hamilton Bath to replace our bathtub and fix our shower.  Hamid responded quickly and got us on their schedule soon as we had requested.  Hamid had many good and aesthetic suggestions for an update on shower, tub, and tile.  His workers arrived on time, worked hard all day, finished in a very timely manner, cleaned up well, and made the bathroom look beautiful.  The price was also reasonable.  So we recommend Hamilton Bath!",
      project: "Guest Bathroom Renovation",
    },
    {
      name: "Sean S.",
      location: "McLean, VA",
      rating: 5,
      text: "Highly recommend Hamilton Bath, Hamid and his team. It was very easy to work with Hamid from the beginning in terms of getting an estimate, coordinating, suggestions on tiles and final installation. Hamid and his team showed up on time and completed the work as planned, and exceeded our expectations.",
      project: "Flooring Installation",
    },
    {
      name: "Claire & Doug B.",
      location: "Vienna, VA",
      rating: 5,
      text: "We recently had our hall bathroom renovated by Hamilton Bath. We could not be happier with our decision to choose this company. They exceeded our expectations throughout the project.   Hamid is very kind and knowledgeable, and patiently explained the process to us. When we had questions, he was very quick to respond by e-mail or text. He was onsite at least once each day and was truly a pleasure to work with. \n\nMiguel and his team did the renovation work. Miguel is highly skilled and pays great attention to detail. They arrived on time and covered the entryway, stairs and upstairs hallway each morning. They cleaned up these areas and the work area each evening. \n\nMiguel worked extra hours to complete the project within the scheduled timeframe. We appreciated his work ethic and expertise. From start to finish it was a pleasant experience, and we now have a beautiful bathroom thanks to Hamilton Bath.",
      project: "Guest Bathroom Remodel",
    },
    {
      name: "Kevin D.",
      location: "Bethesda, MD",
      rating: 5,
      text: "Hamid and the team at Hamilton Bath helped me with a project to re-tile my shower. In short they are incredibly professional, high quality, time efficient, and are quick to respond with any questions or information. Would definitely recommend",
      project: "Master Bathroom Remodel",
    },
    {
      name: "Elener & Joe W.",
      location: "Chantilly, VA",
      rating: 5,
      text: "Hamilton Bath recently completed the remodel of our master bath and hall bath. We worked closely with Hamid on the design, his input was very valuable to us. Both Hamid and his crew were very professional, knowledgeable, respectful, neat, pleasant, arrived on time and did what they said they would do. Hamid was very good at communicating what was going to be done each day and was always very good about getting back to us with questions we had. I made some minor changes along the way and Hamid made them happen. I would recommend Hamilton Bath to anyone that needs a bathroom remodeling. We are extremely happy customers.",
      project: "Master & Guest Bathroom Remodel",
    },
    {
      name: "Rick S.",
      location: "Sterling, VA",
      rating: 5,
      text: "My experience with Hamilton Tile and Bath was nothing short of exceptional. From the moment I engaged with Hamid, the experience was marked by professionalism, expertise, and a genuine commitment to delivering excellence.  Hamid, the mastermind behind Hamilton Tile and Bath, was an absolute pleasure to work with. His expertise and passion for his craft were evident from the outset, as he guided me through the entire renovation process with patience and clarity. \n\nHe listened attentively to our vision and provided invaluable insights and recommendations, ensuring that every aspect of the project was tailored to our preferences and needs. The true heroes of the renovation, however, were Hamid's dedicated contractor, Miguel, and his team. Their meticulous attention to detail and unwavering commitment to quality craftsmanship were truly commendable. \n\nMiguel's expertise and professionalism were evident in every aspect of the renovation, from the precision of the tile work to the flawless installation of fixtures and fittings. They took their time to ensure that every detail was perfect, and the results speak for themselves. \n\nThanks to the outstanding work of Hamilton Tile and Bath, our bathroom has been transformed into a sanctuary of luxury and style. I cannot recommend Hamilton Tile and Bath highly enough to anyone seeking a superior bathroom renovation experience.",
      project: "Master Bathroom Remodel",
    },
    {
      name: "Emily H.",
      location: "Sterling, VA",
      rating: 5,
      text: "Remodeling a bathroom is a huge undertaking for both the contractor and the homeowner. After interviewing several companies, we chose Hamilton Bath to redo our master bathroom and secondary bathroom. We worked directly with Hamid and he was very professional, knowledgeable, and pleasant. He spent a lot time with us to go over our projects, and took the time to answer all our questions, and we asked lots of questions. \n\nThe cost, quick timeline, and knowledge of the projects were what sold us on his company. From start to finish both projects took less than a month. It is important to note that Hamilton Bath is not a one stop shop. For us it was a a good fit as it lowered the cost of the projects significantly. We were on a fast and short timeline so we only ordered item in stock and quick delivery eligible. We signed a contract and ordered materials on a Wednesday and the work started the following Monday. \n\nMiguel and Fredrico were the men completing our project were fantastic. Each day they covered the entryway, stairs, and surrounding areas with sheets and plastic to contain and prevent dirt. We did clear out a large space in our garage for materials and work space. Each day Miguel would check in with us, and Hamid would reach out to discuss any issues that may have arised. Daily communication and upfront communication about everything is key to a successful project. Hamid was more than willing to discuss issues and concerns and always made time for us. We were very pleased with Hamilton Bath and would highly recommend them.",
      project: "Master & Guest Bathroom Remodel",
    },
    {
      name: "Kim D.",
      location: "Arlington, VA",
      rating: 5,
      text: "We recently had our guest/hallway bath remodeled by Hamilton Bath.  We highly recommend them for any remodeling needs you might have.  At every step in the process, they greatly exceeded our expectations. They are very professional, knowledgeable, meticulous, and extremely hard-working. Hamid spent over an hour with us at the initial consultation, offering his expert advice on the best way to proceed with the project. \n\nThe two other companies we consulted with were in and out of our house in 10 minutes, which was disappointing.  This was our first remodel, so we found Hamid's knowledge and patience very reassuring.  He suggested Mosaic Tile for our materials, and they were excellent as well.  He also offered suggestions on how we could save money on our project. \n\nThe work began on schedule, and Hamid's employees were always on time, courteous, and very hard working.  They cleaned up the work area every day and were not intrusive at all.  Miguel is a master at his craft.  We were so impressed with his meticulous work.  Our bathroom turned out even better than we had imagined.  Hamid was always available to oversee the work and answer questions. \n\nThey followed the contract terms as written.  When an issue arose once they opened up the walls, they consulted with us immediately to resolve it.  We are so pleased with Hamilton Bath's work that we have scheduled them to do our Master Bath. \n\nI realized that this review is very long, but it is rare to find a company that is so excellent in its work and customer service.  It should be rewarded for that, so I hope this review will draw more clients to Hamilton Bath.  You will not be disappointed!",
      project: "Guest Bathroom Remodel",
    },
    {
      name: "Asha K.",
      location: "Vienna, VA",
      rating: 5,
      text: "Hamilton Bath recently completed a renovation / updating of our hallway bathroom.  It was a pleasure to work with Hamid! From my initial consultation through to the completion of the project Hamid was excellent and timely in his communication.  Every question (and I had a lot!) was answered patiently and thoroughly. Miguel was the installer that worked on our project and he did an exceptional job.  Every aspect of our bathroom looks fantastic.  The project was started on the agreed upon date, work continued without interruption (from their side), long hours were put in to ensure that the project caused as little disruption at our home as possible, and the job area was kept clean and organized. I would highly recommend Hamilton Bath for your next bathroom project!",
      project: "Guest Bathroom Remodel",
    },
    {
      name: "Jim H.",
      location: "Great Falls, VA",
      rating: 5,
      text: "Hamid and his crew from Hamilton Bath do excellent, meticulous work.  They remodeled one of our bathrooms recently.  The job went as smoothly as any job possibly could have thanks to Hamid's excellent supervision and communication.  Once the job started, it continued without interuption from one phase to the next until it was completed.  We didn't have to endure any delays waiting for different workers with different skills to arrive at our home.  The final product was beautiful.  We will certainly be using Hamilton Bath for our remaining bathrooms!",
      project: "Guest Bathroom Remodel",
    },
    {
      name: "Leslie S.",
      location: "Chantilly, VA",
      rating: 5,
      text: "Hamilton Bath, Hamid & team did an amazing job on our 2 bathrooms in May. We are super happy!",
      project: "Guest Bathroom Remodel",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from homeowners across Northern Virginia who have experienced the
              Hamilton Bath difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Mobile: show full text */}
                  <p className="md:hidden text-foreground mb-4 leading-relaxed whitespace-pre-line">
                    "{testimonial.text}"
                  </p>

                  {/* Tablet & Desktop: show truncated text with show more */}
                  <div className="hidden md:block">
                    <p className="text-foreground mb-4 leading-relaxed whitespace-pre-line">
                      "
                      {expandedTestimonials.has(index) || testimonial.text.length <= 250
                        ? testimonial.text
                        : testimonial.text.substring(0, 250) + "..."}
                      "
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-6">Join our satisfied clients and transform your bathroom today.</p>
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
