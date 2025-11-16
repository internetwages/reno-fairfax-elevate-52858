import { Award, Users, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every project reflects our commitment to excellence and attention to detail."
    },
    {
      icon: Users,
      title: "Family Values",
      description: "As a family-owned business, we treat every client like part of our extended family."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your happiness with the final result is our top priority and measure of success."
    },
    {
      icon: CheckCircle,
      title: "Honest Communication",
      description: "We believe in transparency, clear expectations, and keeping you informed every step."
    }
  ];

  const services = [
    "Complete bathroom remodels",
    "Custom tile and shower installations",
    "Vanity and countertop replacement",
    "Flooring installation",
    "Fixture upgrades and replacements",
    "Accessibility modifications",
    "Custom finishes and details",
    "Lighting and ventilation improvements"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Hamilton Bath
            </h1>
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
                    Hamilton Bath was founded over two decades ago with a simple mission: to help Northern Virginia homeowners create beautiful, functional bathrooms that enhance their daily lives. What started as a small, family-run operation has grown into one of the region's most trusted bathroom renovation specialists.
                  </p>
                  <p>
                    Our founder, James Hamilton, began his career in construction over 30 years ago. After years of working with larger contractors, he recognized that many homeowners were looking for something different—a contractor who would truly listen to their needs, provide honest guidance, and deliver exceptional craftsmanship without compromise.
                  </p>
                  <p>
                    Today, Hamilton Bath remains proudly family-owned and operated. We've had the privilege of transforming hundreds of bathrooms across Fairfax, Vienna, McLean, Reston, and throughout Northern Virginia. While we've grown, our core values remain unchanged: quality work, honest communication, and treating every client's home with the respect it deserves.
                  </p>
                  <p>
                    As a licensed and insured contractor, we take pride in staying current with the latest materials, techniques, and design trends. But what truly sets us apart is our commitment to understanding your unique vision and bringing it to life with meticulous attention to detail.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
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

          {/* Services Section */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Services</h2>
                <p className="text-muted-foreground mb-6">
                  We offer comprehensive bathroom renovation services to meet all your needs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Discuss Your Project
            </h2>
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
