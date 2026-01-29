import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/SEO";
import { BadgeCheck, Users, Workflow, Globe } from "lucide-react";

const Nosotros = () => {
    return (
        <MainLayout>
            <SEO
                title="Sobre Nosotros"
                description="Conoce al equipo de FalcoDevs. Expertos en ingeniería TI, automatización de procesos y IA en Chile."
            />
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
                                    ¿Quiénes Somos?
                                </p>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                    Impulsando la innovación tecnológica desde <span className="text-primary">Chile</span>.
                                </h1>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                En <span className="text-foreground font-semibold">FalcoDevs</span> somos un equipo de ingenieros apasionados por la eficiencia. Nuestra misión es democratizar el acceso a tecnologías de vanguardia (IA, Automatización, Cloud) para empresas que buscan escalar sin aumentar proporcionalmente sus costos operativos.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: BadgeCheck,
                                        title: "Certificados Cloud",
                                        desc: "Arquitecturas seguras en AWS y Google Cloud.",
                                    },
                                    {
                                        icon: Workflow,
                                        title: "Foco en Procesos",
                                        desc: "No solo software, optimizamos tu forma de operar.",
                                    },
                                    {
                                        icon: Users,
                                        title: "Socio Tecnológico",
                                        desc: "Acompañamos tu crecimiento a largo plazo.",
                                    },
                                    {
                                        icon: Globe,
                                        title: "Talento Local",
                                        desc: "Entendemos los desafíos del mercado chileno.",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <item.icon className="h-5 w-5 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50" />
                            <div className="relative bg-card border border-border p-8 rounded-3xl shadow-xl space-y-6">
                                <h3 className="text-2xl font-bold">Nuestros Valores</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">✓</div>
                                        <div>
                                            <p className="font-bold">Honestidad Técnica</p>
                                            <p className="text-sm text-muted-foreground">Te diremos qué necesitas, no qué nos conviene vender.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">✓</div>
                                        <div>
                                            <p className="font-bold">Velocidad de Ejecución</p>
                                            <p className="text-sm text-muted-foreground">Entregamos valor en semanas, no en meses.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">✓</div>
                                        <div>
                                            <p className="font-bold">Seguridad por Diseño</p>
                                            <p className="text-sm text-muted-foreground">Tus datos son tu activo más valioso. Los protegemos como tal.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Nosotros;
