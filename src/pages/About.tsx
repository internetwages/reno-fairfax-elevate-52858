import { Award, Users, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every project reflects our commitment to excellence and attention to detail.",
    },
    {
      icon: Users,
      title: "Family Values",
      description: "As a family-owned business, we treat every client like part of our extended family.",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your happiness with the final result is our top priority and measure of success.",
    },
    {
      icon: CheckCircle,
      title: "Honest Communication",
      description: "We believe in transparency, clear expectations, and keeping you informed every step.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Hamilton Bath</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proudly serving Fairfax County and surrounding areas for over 20 years
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 24 years of hands-on remodeling experience, Hamilton Bath is proud to be one of Northern
                    Virginia’s trusted names in bathroom renovation. We specialize in full-service remodels, steam
                    rooms, tub-to-shower conversions, and clean, modern upgrades that are built to last.
                  </p>
                  <p>
                    What sets us apart is our commitment to craftsmanship, honest pricing, and respectful, clean job
                    sites. We listen to your goals, stay on schedule, and deliver quality work with zero hassle. Our
                    clients return and refer us because we don’t cut corners, and we don’t disappear after the job is
                    done.
                  </p>
                  <p>
                    Whether you're remodeling a small hall bath or building the master retreat you’ve always wanted,
                    we’re here to bring your vision to life, beautifully and affordably.
                  </p>
                  <p>
                    <b>The Hamilton Way.</b>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>


          {/* CTA Section */}
          <div className="mt-16 text-center bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Discuss Your Project</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Whether you're planning a complete remodel or a simple update, we'd love to hear about your vision.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
