import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="FalcoDevs | Software claro para empresas reales"
        description="FalcoDevs diseña soluciones digitales simples, rápidas y útiles para empresas que necesitan ordenar procesos, vender mejor o automatizar tareas."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "FalcoDevs SpA",
          url: "https://falcodevs.cl",
          logo: "https://falcodevs.cl/logoHome.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+56-9-2744-4800",
            contactType: "sales",
            areaServed: "CL",
            availableLanguage: "Spanish",
          },
        }}
      />

      <Navbar />
      <Hero />
      <FeaturedSolutions />
      <Footer />
    </div>
  );
};

export default Index;