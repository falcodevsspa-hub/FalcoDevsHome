import { BadgeCheck, Users, Workflow, Globe } from "lucide-react";

const About = () => {
    return (
        <section id="nosotros" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
                                ¿Quiénes Somos?
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Impulsando la innovación tecnológica desde{" "}
                                <span className="text-primary">Chile</span> para el mundo.
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            En <span className="text-foreground font-semibold">FalcoDevs</span> somos un equipo emergente de ingenieros apasionados por la eficiencia. Aunque somos nuevos como marca, nuestra experiencia consolidada en TI y automatización nos permite entregar soluciones de nivel enterprise con la agilidad de una startup.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: BadgeCheck,
                                    title: "Certificados AWS",
                                    desc: "Expertos en arquitectura cloud segura y escalable.",
                                },
                                {
                                    icon: Workflow,
                                    title: "Flujos de Negocio",
                                    desc: "Optimizamos procesos operativos con precisión quirúrgica.",
                                },
                                {
                                    icon: Users,
                                    title: "Trato Directo",
                                    desc: "Hablas con los ingenieros que construyen tu solución.",
                                },
                                {
                                    icon: Globe,
                                    title: "Visión Global",
                                    desc: "Tecnología de vanguardia aplicada a realidades locales.",
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
                        <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                        <div className="relative bg-card border border-border p-8 rounded-3xl shadow-strong space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Nuestra Propuesta de Valor</h3>
                                <p className="text-muted-foreground italic">
                                    "No solo escribimos código, diseñamos el motor que impulsa el crecimiento de tu empresa."
                                </p>
                            </div>

                            <div className="space-y-4 border-t border-border pt-6">
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span>Automatización de Procesos</span>
                                    <span className="text-primary">100%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full w-[100%] shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                </div>

                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span>Eficiencia Operativa</span>
                                    <span className="text-primary">95%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full w-[95%]" />
                                </div>

                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span>Satisfacción de Cliente</span>
                                    <span className="text-primary">100%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full w-[100%]" />
                                </div>
                            </div>

                            <div className="pt-4 text-center">
                                <p className="text-sm text-muted-foreground">
                                    Transformamos mermas en márgenes de utilidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
