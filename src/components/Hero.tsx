import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trackConversion } from "@/utils/analytics";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-b from-background via-background to-muted/20">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,193,255,0.08),transparent_25%),radial-gradient(circle_at_80%_0,rgba(0,193,255,0.06),transparent_25%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge & AWS */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Ingenieros Certificados AWS & Expertos en TI
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Aceleramos tu <span className="text-primary italic">rentabilidad</span>
            <span className="block">mediante automatización inteligente</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eliminamos cuellos de botella mediante Agentes IA y software a medida.
            <span className="block font-semibold text-foreground mt-2">Más eficiencia, menos errores operativos, mayor margen de utilidad.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-7 h-auto rounded-full shadow-xl hover:scale-105 transition-transform"
              onClick={() => trackConversion("hero_cta_click")}
            >
              <Link to="/diagnostico" className="flex items-center gap-2">
                Solicitar Diagnóstico Gratuito <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <p className="text-sm text-muted-foreground sm:ml-4">
              Sesión gratuita de 20 minutos <br className="hidden sm:block" /> con un ingeniero experto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
