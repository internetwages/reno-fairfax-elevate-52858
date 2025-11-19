import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical bathroom renovation take?",
      answer: "Most bathroom renovations take between 2-4 weeks, depending on the scope of work. We'll provide you with a detailed timeline during your consultation."
    },
    {
      question: "Do I need to provide materials or do you source them?",
      answer: "We can handle everything! We'll help you select materials and manage all sourcing, or we can work with materials you've already chosen. Whatever works best for you."
    },
    {
      question: "What areas do you service?",
      answer: "We serve Vienna, Fairfax, Herndon, Reston, Chantilly, Centreville, Oakton, McLean, Falls Church, Arlington, Ashburn, and surrounding Northern Virginia areas."
    },
    {
      question: "Will I have access to my bathroom during renovation?",
      answer: "In most cases, your bathroom will be out of commission during the renovation. We work efficiently to minimize downtime and can discuss temporary bathroom solutions if needed."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes! We handle all necessary permits and coordinate inspections with local authorities to ensure your renovation meets all building codes."
    },
    {
      question: "What is your warranty policy?",
      answer: "We stand behind our work with comprehensive warranties. Specific warranty terms depend on the materials and scope of work, which we'll discuss in detail during your consultation."
    },
    {
      question: "Can you work with my existing layout or do bathrooms need to be gutted?",
      answer: "We can work with your existing layout or completely reimagine the space. Our team will assess your bathroom and discuss the best options based on your goals and budget."
    },
    {
      question: "How much does a bathroom renovation cost?",
      answer: "Costs vary based on size, materials, and scope of work. We offer free consultations and detailed estimates so you'll know exactly what to expect before we begin."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Hamilton Bath is fully licensed and insured. We maintain all necessary certifications and insurance to protect you and your property."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including checks, credit cards, and bank transfers. Payment schedules are discussed and agreed upon before work begins."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our bathroom renovation services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
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
