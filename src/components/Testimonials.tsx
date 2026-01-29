import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Clientes Satisfechos
          </h2>
          <p className="text-xl text-muted-foreground">
            Empresas que confían en nuestras soluciones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-strong border border-border">
            <Quote className="w-12 h-12 text-primary mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              "Incrementamos nuestras conversiones en un 40% gracias a la
              automatización de WhatsApp implementada por FalcoDevs"
            </blockquote>
            <div className="border-t border-border pt-6">
              <p className="font-semibold text-lg"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
