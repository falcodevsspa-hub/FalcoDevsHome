import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Ingeniería y Automatización con IA"
        description="FalcoDevs: Aceleramos la rentabilidad de tu empresa mediante agentes IA, automatización de procesos y software a medida en Chile."
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FalcoDevs SpA",
        "url": "https://falcodevs.pro",
        "logo": "https://falcodevs.pro/logoHome.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+56-9-2744-4800",
          "contactType": "sales",
          "areaServed": "CL",
          "availableLanguage": "Spanish"
        }
      }} />
      <Navbar />
      <Hero />
      <FeaturedSolutions />
      <Services />
      <Sectors />
      <Process />
      <Footer />
    </div>
  );
};

export default Index;
