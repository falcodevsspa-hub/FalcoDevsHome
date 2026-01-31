import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const products = [
    {
        title: "Flow Monitor",
        description: "Control industrial y monitoreo de procesos en tiempo real con dashboards avanzados.",
        href: "https://fluxmonitor.falcodevs.pro/",
        logo: "/fm-logo-grande.png",
        color: "from-blue-500/10 to-transparent"
    },
    {
        title: "Digital Agents",
        description: "Fuerza laboral autónoma basada en IA para ejecutar tareas complejas 24/7.",
        href: "https://agents.falcodevs.pro/",
        logo: "/logoFDA_transparent.png",
        color: "from-primary/10 to-transparent"
    },
    {
        title: "LandingExpress",
        description: "Despliegue de sucursales digitales de alta conversión en tiempo récord.",
        href: "https://express.falcodevs.pro/",
        logo: "/logoLE_transparent.png",
        color: "from-accent/10 to-transparent"
    }
];

const FeaturedSolutions = () => {
    return (
        <section className="py-24 bg-muted/20 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Ecosistema FalcoDevs</p>
                    <h2 className="text-3xl md:text-5xl font-bold">Nuestros Productos & Tecnologías</h2>
                    <p className="text-muted-foreground text-lg">
                        Una vistazo a las soluciones llave en mano que hemos desarrollado para resolver desafíos específicos de la industria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {products.map((item, i) => (
                        <div key={i} className={`relative group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all overflow-hidden`}>
                            {/* Background gradient hint */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                            <div className="relative space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="h-20 w-20 rounded-2xl bg-background/80 p-3 shadow-soft flex items-center justify-center">
                                        <img src={item.logo} alt={item.title} className="max-h-full max-w-full object-contain" />
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <Button asChild variant="link" className="p-0 h-auto text-primary font-bold group-hover:translate-x-1 transition-transform">
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        Explorar Solución <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSolutions;
