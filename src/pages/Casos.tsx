import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Clock, ShieldCheck } from "lucide-react";

const cases = [
    {
        title: "Automatización de Gestión de Inventario",
        client: "Distribuidora Regional",
        issue: "Proceso manual de ingreso de facturas y actualización de stock que tomaba 15 horas semanales.",
        solution: "Implementación de un Agente IA que extrae datos de PDF y sincroniza con el ERP automáticamente.",
        result: "Reducción del tiempo de gestión a 10 minutos semanales. Error humano eliminado al 100%.",
        metric: "98% Ahorro de Tiempo",
        icon: Clock
    },
    {
        title: "Dashboard de Inteligencia de Negocios",
        client: "Retail Especializado",
        issue: "Datos dispersos en 3 plataformas diferentes, dificultando la toma de decisiones rápidas.",
        solution: "Integración vía middleware de Shopify, Holded y Google Sheets en un solo tablero en tiempo real.",
        result: "Visibilidad total del margen por producto actualizado cada hora.",
        metric: "12% Aumento en Margen",
        icon: BarChart3
    }
];

const Casos = () => {
    return (
        <MainLayout>
            <SEO
                title="Casos de Éxito"
                description="Descubre cómo ayudamos a empresas a optimizar sus procesos y aumentar su rentabilidad con tecnología."
            />
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold">Casos que demuestran resultados</h1>
                        <p className="text-xl text-muted-foreground">
                            No nos enfocamos en el código, sino en el impacto que genera en tu caja.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {cases.map((item, i) => (
                            <div key={i} className="bg-card border border-border p-8 rounded-3xl shadow-soft hover:shadow-strong transition-all group">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-primary font-semibold mb-6">{item.client}</p>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <p className="text-xs uppercase font-bold text-muted-foreground mb-1">El Desafío</p>
                                        <p className="text-sm">{item.issue}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase font-bold text-muted-foreground mb-1">La Solución</p>
                                        <p className="text-sm">{item.solution}</p>
                                    </div>
                                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                        <p className="text-xs uppercase font-bold text-primary mb-1">Resultado Clave</p>
                                        <p className="text-lg font-bold text-primary">{item.metric}</p>
                                        <p className="text-sm">{item.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center bg-secondary/30 p-12 rounded-3xl max-w-4xl mx-auto">
                        <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-6" />
                        <h2 className="text-2xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
                        <p className="text-muted-foreground mb-8">
                            Empezamos con un piloto de bajo riesgo para que veas el valor antes de escalar.
                        </p>
                        <Button asChild size="lg" className="rounded-full">
                            <Link to="/diagnostico" className="flex items-center gap-2">
                                Solicitar Diagnóstico <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Casos;
