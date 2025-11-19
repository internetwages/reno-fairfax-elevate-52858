import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Users, Shield, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EstimateForm from "@/components/EstimateForm";
import heroImage from "@/assets/hero-bathroom-new.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const Index = () => {
  const features = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Users, text: "Locally Owned" },
    { icon: Award, text: "20+ Years Experience" },
    { icon: CheckCircle, text: "Satisfaction Guaranteed" },
  ];

  const featuredTestimonials = [
    {
      name: "Sonja R.",
      location: "Arlington, VA",
      rating: 5,
      text: "Hamid and his team at Hamilton Bath remodeled two bathrooms for us. Miguel is a true perfectionist - he made sure all the lines on the decorative tile matched perfectly. The level of craftsmanship was significantly higher than other contractors we have worked with. It's such a pleasure to work with a craftsman who cares so much about the quality of the work!",
      project: "Master & Guest Bathroom Remodel",
    },
    {
      name: "Joseph C.",
      location: "Ashburn, VA",
      rating: 5,
      text: "Remodeling a bathroom is a huge undertaking for both the contractor and the homeowner. After interviewing several companies, we chose Hamilton Bath to redo our master bathroom and secondary bathroom. We worked directly with Hamid and he was very professional, knowledgeable, and pleasant. He spent a lot time with us to go over our projects, and took the time to answer all our questions, and we asked lots of questions.\n\nThe cost, quick timeline, and knowledge of the projects were what sold us on his company. From start to finish both projects took less than a month. It is important to note that Hamilton Bath is not a one stop shop. For us it was a a good fit as it lowered the cost of the projects significantly. We were on a fast and short timeline so we only ordered item in stock and quick delivery eligible. We signed a contract and ordered materials on a Wednesday and the work started the following Monday.\n\nMiguel and Fredrico were the men completing our project were fantastic. Each day they covered the entryway, stairs, and surrounding areas with sheets and plastic to contain and prevent dirt. We did clear out a large space in our garage for materials and work space. Each day Miguel would check in with us, and Hamid would reach out to discuss any issues that may have arised. Daily communication and upfront communication about everything is key to a successful project. Hamid was more than willing to discuss issues and concerns and always made time for us. We were very pleased with Hamilton Bath and would highly recommend them.",
      project: "Master & Guest Bathroom Remodel",
    },
    {
      name: "Deena P.",
      location: "Falls Church, VA",
      rating: 5,
      text: "I recently had two bathrooms completely redone by Hamilton Bath and the results have exceeded my expectations! I now have two Pinterest-worthy bathrooms that are beautiful and functional. Miguel's craftsmanship was the most meticulous and expert I have seen. I have had several projects completed and none of them were finished as perfectly as this one.",
      project: "Master & Guest Bathroom Remodel",
    },
    {
      name: "Claire & Doug B.",
      location: "Vienna, VA",
      rating: 5,
      text: "We recently had our hall bathroom renovated by Hamilton Bath. We could not be happier with our decision to choose this company. Hamid is very kind and knowledgeable, and patiently explained the process to us. Miguel and his team did the renovation work. Miguel is highly skilled and pays great attention to detail. From start to finish it was a pleasant experience, and we now have a beautiful bathroom thanks to Hamilton Bath.",
      project: "Guest Bathroom Remodel",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-[var(--gradient-hero)]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Transform Your Bathroom
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6">
              Experience 24 Years of Trusted Craftsmanship
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Hamilton Bath delivers premium bathroom renovations in Fairfax and Northern Virginia
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                Get a Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                  </div>
                  <p className="font-semibold text-sm md:text-base text-foreground">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini Gallery Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Our Craftsmanship
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project reflects our commitment to quality, attention to detail, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Before/After 1 */}
            <Card className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-0">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={before1} alt="Before renovation" className="w-full h-64 object-cover" />
                    <div className="absolute top-2 left-2 bg-muted px-3 py-1 rounded-md text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={after1} alt="After renovation" className="w-full h-64 object-cover" />
                    <div className="absolute top-2 right-2 bg-accent px-3 py-1 rounded-md text-sm font-semibold text-accent-foreground">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">Full Bathroom Remodel</p>
                  <p className="text-xs text-muted-foreground">Fairfax Station, VA</p>
                </div>
              </CardContent>
            </Card>

            {/* Before/After 2 */}
            <Card className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-0">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={before2} alt="Before renovation" className="w-full h-64 object-cover" />
                    <div className="absolute top-2 left-2 bg-muted px-3 py-1 rounded-md text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={after2} alt="After renovation" className="w-full h-64 object-cover" />
                    <div className="absolute top-2 right-2 bg-accent px-3 py-1 rounded-md text-sm font-semibold text-accent-foreground">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">Master Bath Transformation</p>
                  <p className="text-xs text-muted-foreground">Vienna, VA</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button variant="outline" size="lg">
                View More Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read about the experiences of homeowners who trusted us with their bathroom renovations
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 flex-grow line-clamp-6 whitespace-pre-line">
                          {testimonial.text}
                        </p>
                        <p className="text-sm font-medium text-primary mt-auto">{testimonial.project}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">
                Read All Testimonials
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready To Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Schedule your free estimate today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Estimate
            </Button>
            <a 
              href="tel:+17039467608" 
              className="flex items-center gap-2 text-lg font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (703) 946-7608
            </a>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section id="estimate-form" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Get Your Free Estimate
              </h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>
            <EstimateForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
