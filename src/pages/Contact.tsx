import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2, FileSearch, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          details: formData.details,
        },
      });

      if (error) {
        console.error("Error submitting form:", error);
        toast.error("Something went wrong. Please try again or call us directly.");
        return;
      }

      setShowSuccessDialog(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        details: ""
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (field: string, value: string) => {
    if (field === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [field]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
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

                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Request Free Estimate"
                      )}
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
                      <a href="tel:+17039467608" className="text-muted-foreground hover:text-accent transition-colors">
                        (703) 946-7608
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:hamiltonbath@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                        hamiltonbath@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Service Area</p>
                      <p className="text-muted-foreground">
                        Vienna, Fairfax, Herndon, Reston, Chantilly, Centreville, Oakton, McLean, Falls Church, Arlington, and Ashburn
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

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-center">
              Your project inquiry has been received successfully.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <h3 className="font-semibold text-lg text-center">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileSearch className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Review Project Details</p>
                  <p className="text-sm text-muted-foreground">Our team will carefully review your requirements</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Contact Within 24 Hours</p>
                  <p className="text-sm text-muted-foreground">We'll reach out to discuss your project</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Schedule Consultation</p>
                  <p className="text-sm text-muted-foreground">Free in-home visit at your convenience</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Receive Detailed Estimate</p>
                  <p className="text-sm text-muted-foreground">Complete pricing breakdown for your project</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowSuccessDialog(false)} 
              className="w-full"
              size="lg"
            >
              Got It!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
