import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Users, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bathroom.jpg";
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
              Experience 20 Years of Trusted Craftsmanship
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
      <section className="py-16 md:py-24">
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
                View All Projects
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
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. We'll discuss your vision, assess your space, and provide a detailed project plan.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
