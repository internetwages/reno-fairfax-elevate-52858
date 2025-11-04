import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const Gallery = () => {
  const projects = [
    {
      before: before1,
      after: after1,
      title: "Full Bathroom Remodel",
      location: "Fairfax Station, VA",
      description: "Complete transformation with modern white subway tiles, new vanity, and updated fixtures."
    },
    {
      before: before2,
      after: after2,
      title: "Master Bath Transformation",
      location: "Vienna, VA",
      description: "Luxury spa-like retreat with marble tiles, soaking tub, and brushed gold fixtures."
    },
    {
      before: before3,
      after: after3,
      title: "Contemporary Bath Renovation",
      location: "McLean, VA",
      description: "Spacious design with navy accent wall, double vanity, and premium finishes."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Work
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our portfolio of completed bathroom renovations across Northern Virginia. Each project showcases our dedication to quality craftsmanship and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative">
                      <img 
                        src={project.before} 
                        alt={`Before - ${project.title}`} 
                        className="w-full h-80 md:h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-muted px-4 py-2 rounded-md text-base font-semibold shadow-md">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={project.after} 
                        alt={`After - ${project.title}`} 
                        className="w-full h-80 md:h-96 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-accent px-4 py-2 rounded-md text-base font-semibold text-accent-foreground shadow-md">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-accent font-medium mb-3">{project.location}</p>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
