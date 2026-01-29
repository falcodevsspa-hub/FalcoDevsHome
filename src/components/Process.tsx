import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Sesión técnica para detectar cuellos de botella y fricciones.",
    duration: "20 min"
  },
  {
    step: "02",
    title: "Piloto (Aceleración)",
    desc: "Implementamos una solución crítica en tiempo récord para validar impacto.",
    duration: "7-14 días"
  },
  {
    step: "03",
    title: "Escalamiento",
    desc: "Despliegue total del sistema y optimización continua de caja.",
    duration: "Continuo"
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Metodología de Alto Rendimiento</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pasamos de la idea a la ejecución sin burocracia, priorizando el retorno de inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-primary/10 absolute -top-10 -left-6 group-hover:text-primary/20 transition-colors">
                {item.step}
              </div>
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">
                  "{item.desc}"
                </p>
                <div className="inline-block bg-secondary px-3 py-1 rounded-full text-xs font-bold text-secondary-foreground">
                  Tiempo: {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button asChild size="lg" className="rounded-full px-12">
            <Link to="/diagnostico">Empezar con el Paso 1</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
