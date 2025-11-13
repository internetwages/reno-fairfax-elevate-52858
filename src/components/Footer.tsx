import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Hamilton Bath</h3>
            <p className="text-primary-foreground/80 mb-4">
              Serving Fairfax County and Northern Virginia for over 20 years with premium bathroom renovation services.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Licensed & Insured • Family-Owned
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+17039467608" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    (703) 946-7608
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@hamiltonbath.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    info@hamiltonbath.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  Fairfax, Virginia<br />
                  Serving Northern Virginia
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="flex items-start space-x-2">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-primary-foreground/80">
                <p>Monday - Friday: 7am - 6pm</p>
                <p>Saturday: 8am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Hamilton Bath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
