import { Store, Factory, Building2, Truck, Rocket } from "lucide-react";

const sectors = [
    { name: "Retail & E-commerce", icon: Store, desc: "Automatización de stock y pedidos." },
    { name: "Logística", icon: Truck, desc: "Optimización de rutas y seguimiento." },
    { name: "Manufactura", icon: Factory, desc: "Monitoreo de procesos y mermas." },
    { name: "Servicios Profesionales", icon: Building2, desc: "Gestión documental y CRM." },
    { name: "Startups & SaaS", icon: Rocket, desc: "Desarrollo ágil de producto." },
];

const Sectors = () => {
    return (
        <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Verticales de Especialidad</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Aplicamos nuestra ingeniería en sectores donde la eficiencia operativa es el diferencial competitivo.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                    {sectors.map((sector, i) => (
                        <div key={i} className="bg-background border border-border p-6 rounded-2xl text-center space-y-4 hover:border-primary/50 transition-colors group">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <sector.icon className="h-6 w-6 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-sm md:text-base">{sector.name}</h3>
                            <p className="text-xs text-muted-foreground">{sector.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectors;
