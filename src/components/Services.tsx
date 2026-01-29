import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Cpu, Link as LinkIcon, Code2, LineChart, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Automatización de Procesos",
    description: "Elimina tareas manuales y repetitivas con flujos de trabajo inteligentes.",
    href: "/servicios/automatizacion-procesos",
    icon: Cpu,
  },
  {
    title: "Agentes IA & Operaciones",
    description: "Implementamos IA que no solo responde, sino que ejecuta tareas críticas.",
    href: "/servicios/agentes-ia-operaciones",
    icon: Bot,
  },
  {
    title: "Integraciones Empresariales",
    description: "Conectamos todo tu stack tecnológico para una visibilidad total.",
    href: "/servicios/integraciones-empresariales",
    icon: LinkIcon,
  },
  {
    title: "Software a Medida",
    description: "Desarrollamos herramientas específicas para tus reglas de negocio únicas.",
    href: "/servicios/software-a-medida",
    icon: Code2,
  },
  {
    title: "E-commerce & Conversión",
    description: "Plataformas de venta optimizadas para máximas tasas de conversión.",
    href: "/diagnostico",
    icon: LineChart,
  },
  {
    title: "Seguridad & Continuidad",
    description: "Protegemos tus datos y garantizamos que tu operación nunca se detenga.",
    href: "/seguridad",
    icon: ShieldCheck,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-bold">
            Soluciones Corporativas
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Ingeniería aplicada a la rentabilidad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl border border-border bg-card hover:bg-secondary/20 transition-all hover:shadow-xl flex flex-col"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {service.description}
              </p>
              <Button asChild variant="ghost" className="mt-auto justify-start p-0 hover:bg-transparent hover:text-primary transition-colors">
                <Link to={service.href} className="flex items-center gap-2">
                  Ver Detalles <span className="text-xl">→</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
