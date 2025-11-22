import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import realBath1 from "@/assets/real-bath-1.jpg";
import realBath2 from "@/assets/real-bath-2.jpg";
import realBath3 from "@/assets/real-bath-3.jpg";
import realBath4 from "@/assets/real-bath-4.jpg";
import realBath5 from "@/assets/real-bath-5.jpg";
import realBath6 from "@/assets/real-bath-6.jpg";
import realBath7 from "@/assets/real-bath-7.jpg";
import realBath8 from "@/assets/real-bath-8.jpg";
import realBath9 from "@/assets/real-bath-9.jpg";
import realBath10 from "@/assets/real-bath-10.jpg";
import realBath11 from "@/assets/real-bath-11.jpg";
import realBath12 from "@/assets/real-bath-12.jpg";
import realBath13 from "@/assets/real-bath-13.jpg";
import realBath14 from "@/assets/real-bath-14.jpg";
import realBath15 from "@/assets/real-bath-15.jpg";
import realBath16 from "@/assets/real-bath-16.jpg";
import realBath17 from "@/assets/real-bath-17.jpg";
import realBath18 from "@/assets/real-bath-18.jpg";
import realBath19 from "@/assets/real-bath-19.jpg";
import realBath20 from "@/assets/real-bath-20.jpg";
import realBath21 from "@/assets/real-bath-21.jpg";
import realBath22 from "@/assets/real-bath-22.jpg";

const Gallery = () => {
  const services = [
    "Complete bathroom remodels",
    "Steam Showers & Steam Room Conversions",
    "Custom tile and shower installations",
    "Tub-to-Shower Conversions",
    "Heated Bathroom Floors",
    "Custom Niches, Benches & Built-Ins",
    "Frameless Shower Door Coordination",
    "Plumbing & Valve Upgrades",
    "Bathroom Electrical & LED Lighting",
    "Pocket Door Installation & Wall Modifications",
    "Closet Reconfiguration & Extensions",
    "Bathroom Damage Repair & Insurance Restoration",
  ];

  const projects = [
    {
      before: before1,
      after: after1,
      title: "Full Bathroom Remodel",
      location: "Fairfax Station, VA",
      description: "Complete transformation with modern white subway tiles, new vanity, and updated fixtures.",
    },
    {
      before: before2,
      after: after2,
      title: "Master Bath Transformation",
      location: "Vienna, VA",
      description: "Luxury spa-like retreat with marble tiles, soaking tub, and brushed gold fixtures.",
    },
    {
      before: before3,
      after: after3,
      title: "Contemporary Bath Renovation",
      location: "McLean, VA",
      description: "Spacious design with navy accent wall, double vanity, and premium finishes.",
    },
  ];

  const galleryImages = [
    { src: realBath3, alt: "Luxury bathroom with freestanding tub and corner glass shower" },
    { src: realBath21, alt: "Spacious master bathroom with double vanity, freestanding tub, and large window" },
    { src: realBath20, alt: "Stunning bathroom with freestanding tub, dark tile shower, and marble floor" },
    { src: realBath22, alt: "Modern bathroom with white subway tile shower and checkered floor pattern" },
    { src: realBath13, alt: "Modern walk-in shower with mixed tile patterns and black fixtures" },
    { src: realBath12, alt: "Spacious walk-in shower with neutral tiles and barn door" },
    { src: realBath1, alt: "Modern bathroom with marble tile walk-in shower and built-in niche" },
    { src: realBath2, alt: "Contemporary shower with marble tiles, bench seating, and glass enclosure" },
    { src: realBath4, alt: "Modern bathroom with white subway tiles, built-in niches, and glass shower door" },
    { src: realBath5, alt: "Elegant master bathroom with marble tub surround and white cabinetry" },
    { src: realBath6, alt: "White tiled shower with striking black accent stripe and corner bench" },
    { src: realBath7, alt: "Classic freestanding tub with decorative mosaic floor tiles" },
    { src: realBath8, alt: "Luxury travertine shower with mosaic accent band and built-in bench" },
    { src: realBath9, alt: "Elegant shower niche detail with mosaic tile accent" },
    { src: realBath10, alt: "Master bathroom with freestanding tub and dramatic marble floor" },
    { src: realBath14, alt: "Elegant bathroom with marble shower and navy blue vanity" },
    { src: realBath15, alt: "Large walk-in shower with marble tiles and bench seating" },
    { src: realBath16, alt: "Luxury marble shower with built-in bench and decorative niches" },
    { src: realBath17, alt: "Contemporary marble shower with sliding glass door and mosaic floor" },
    { src: realBath18, alt: "Open concept shower with marble walls and hexagonal mosaic floor" },
    { src: realBath19, alt: "Herringbone tile shower detail with built-in niches and bronze fixtures" },
    { src: realBath10, alt: "Master bathroom with freestanding tub and dramatic marble floor" },
    { src: realBath11, alt: "Clean bathroom with white subway tile tub surround and black fixtures" },
    { src: realBath14, alt: "Elegant bathroom with marble shower and navy blue vanity" },
    { src: realBath15, alt: "Large walk-in shower with marble tiles and bench seating" },
    { src: realBath16, alt: "Luxury marble shower with built-in bench and decorative niches" },
    { src: realBath17, alt: "Contemporary marble shower with sliding glass door and mosaic floor" },
    { src: realBath18, alt: "Open concept shower with marble walls and hexagonal mosaic floor" },
    { src: realBath19, alt: "Herringbone tile shower detail with built-in niches and bronze fixtures" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our portfolio of completed bathroom renovations across Northern Virginia. Each project showcases
              our dedication to quality craftsmanship and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
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

          {/* Services Section */}
          <div className="mt-16 max-w-4xl mx-auto">
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

          {/* Additional Gallery Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">More Completed Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore additional bathroom renovations showcasing our expertise in design and craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow group"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-muted/30 flex items-center justify-center min-h-[300px]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto max-h-[500px] object-contain transition-transform duration-300 group-hover:scale-105"
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
