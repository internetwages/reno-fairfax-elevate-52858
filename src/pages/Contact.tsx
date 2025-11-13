import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    toast.success("Thank you! We'll contact you within 24 hours to schedule your free estimate.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      details: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get Your Free Estimate
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          placeholder="(703) 555-1234"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-remodel">Full Bathroom Remodel</SelectItem>
                            <SelectItem value="shower">Shower/Tub Installation</SelectItem>
                            <SelectItem value="vanity">Vanity & Countertops</SelectItem>
                            <SelectItem value="tile">Tile & Flooring</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="details">Project Details</Label>
                      <Textarea
                        id="details"
                        value={formData.details}
                        onChange={(e) => handleChange("details", e.target.value)}
                        placeholder="Tell us about your vision, timeline, and any specific requirements..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Request Free Estimate
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+17035551234" className="text-muted-foreground hover:text-accent transition-colors">
                        (703) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@hamiltonbath.com" className="text-muted-foreground hover:text-accent transition-colors">
                        info@hamiltonbath.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Service Area</p>
                      <p className="text-muted-foreground">
                        Fairfax, Vienna, McLean, Reston, Burke, and surrounding Northern Virginia areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Mon-Fri: 7am - 6pm<br />
                        Sat: 8am - 4pm<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Response within 24 hours</li>
                    <li>• Free in-home consultation</li>
                    <li>• Detailed project estimate</li>
                    <li>• No obligation to proceed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
