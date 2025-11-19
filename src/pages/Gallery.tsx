import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";

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

  const galleryImages = [
    { src: gallery1, alt: "Modern bathroom with white subway tiles and glass shower" },
    { src: gallery2, alt: "Luxury spa bathroom with marble and gold fixtures" },
    { src: gallery3, alt: "Contemporary bathroom with navy blue accent tiles" },
    { src: gallery4, alt: "Elegant master bathroom with walk-in shower" },
    { src: gallery5, alt: "Modern bathroom with floating vanity and vessel sink" },
    { src: gallery6, alt: "Classic white bathroom with carrara marble" },
    { src: gallery7, alt: "Spacious master bathroom with double vanity and soaking tub" },
    { src: gallery8, alt: "Luxurious walk-in shower with grey subway tiles and rainfall showerhead" },
    { src: gallery9, alt: "Elegant powder room with pedestal sink and decorative mirror" },
    { src: gallery10, alt: "Contemporary bathroom with freestanding soaking tub and natural light" },
    { src: gallery11, alt: "Spacious master bathroom with marble tiles and brushed gold fixtures" },
    { src: gallery12, alt: "Modern guest bathroom with vessel sink and geometric mirror" },
    { src: gallery13, alt: "Modern bathroom renovation with white marble countertops and chrome fixtures" },
    { src: gallery14, alt: "Luxurious spa bathroom with walk-in shower and black hexagon tiles" },
    { src: gallery15, alt: "Elegant bathroom featuring clawfoot bathtub and vintage-style fixtures" },
    { src: gallery16, alt: "Contemporary bathroom with wood-look porcelain tiles and matte black fixtures" },
    { src: gallery17, alt: "Bright bathroom with white shiplap walls and farmhouse-style vanity" },
    { src: gallery18, alt: "Modern master bathroom with large walk-in shower and blue mosaic accent tiles" },
    { src: gallery19, alt: "Sophisticated bathroom with grey quartz countertops and pendant lighting" },
    { src: gallery20, alt: "Luxury bathroom with freestanding tub next to floor-to-ceiling windows" },
    { src: gallery21, alt: "Sleek bathroom with concrete-look tiles and floating shelves" },
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

          {/* Additional Gallery Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                More Completed Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore additional bathroom renovations showcasing our expertise in design and craftsmanship
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
