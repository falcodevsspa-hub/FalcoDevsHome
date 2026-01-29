import { Shield, Zap, Cloud, TrendingUp, Headphones } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Soluciones escalables",
    description: "que crecen con tu negocio",
  },
  {
    icon: Zap,
    title: "Tecnología de vanguardia",
    description: "con IA integrada",
  },
  {
    icon: Cloud,
    title: "Profesionales certificados en AWS",
    description: "para despliegues en la nube",
  },
  {
    icon: Shield,
    title: "Automatización",
    description: "que reduce costos operativos",
  },
  {
    icon: Headphones,
    title: "Soporte técnico",
    description: "especializado",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FalcoDevs?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 border border-border"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
