import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you provide free estimates?",
      answer: "Yes. All onsite assessments, consultations, and written estimates are free.",
    },
    {
      question: "How long does a typical bathroom renovation take?",
      answer:
        "Most projects take 7–10 business days, depending on tile complexity, plumbing changes, and inspection requirements.",
    },
    {
      question: "Do I need to provide materials or do you source them?",
      answer:
        "We'll help you select materials and manage all sourcing, or we can work with materials you've already chosen. Whatever works best for you.",
    },
    {
      question: "Do you help with design or tile selections?",
      answer:
        "Yes. We work closely with design consultants at The Mosaic Tile Company, where clients can choose tile, fixtures, and patterns with expert guidance, and you will receive our contractor discount.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We service most locations within a 25-mile radius of Vienna, VA, including Fairfax, Herndon, Reston, Chantilly, Centreville, Oakton, McLean, Falls Church, Arlington, and Ashburn.",
    },
    {
      question: "Do you install steam showers and heated floors",
      answer:
        "Absolutely — we specialize in: Steam room conversions, Heated floor systems, Rain showers, Body jets, Custom benches & niches, Sloped steam ceilings, and Schluter waterproof systems.",
    },
    {
      question: "Do you coordinate glass shower doors?",
      answer:
        "Yes. We partner with Precision Glass, who provides measurements, fabrication, and installation. Clients pay them directly using our contractor discount. Note: You may also choose any glass company you prefer.",
    },
    {
      question: "What is your warranty policy?",
      answer:
        " All workmanship is covered by a 1-year labor warranty. Manufacturer warranties apply to all fixtures and materials.",
    },
    {
      question: "Can you work with my existing layout or do bathrooms need to be gutted?",
      answer:
        "We can work with your existing layout or completely reimagine the space. Our team will assess your bathroom and discuss the best options based on your goals and budget.",
    },
    {
      question: "How much does a bathroom renovation cost?",
      answer:
        "Costs vary based on size, materials, and scope of work. We offer free consultations and detailed estimates so you'll know exactly what to expect before we begin.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, Hamilton Bath is fully licensed and insured. We maintain all necessary certifications and insurance to protect you and your property.",
    },
    {
      question: "Do you handle permits?",
      answer: "Yes. When required, we obtain and manage all plumbing, electrical, and mechanical permits.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our bathroom renovation services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help! Contact us for personalized answers and a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
