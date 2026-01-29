import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/SEO";
import { ShieldCheck, Lock, EyeOff, Server } from "lucide-react";

const Seguridad = () => {
    return (
        <MainLayout>
            <SEO title="Seguridad de la Información" description="Cómo protegemos los datos de tu empresa y garantizamos la continuidad operacional." />
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl font-bold">Seguridad Corporativa</h1>
                        <p className="text-xl text-muted-foreground">Tu confianza es nuestro activo más valioso.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 rounded-3xl bg-secondary/30 border border-border space-y-4">
                            <Lock className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">Encriptación en Tránsito</h3>
                            <p className="text-sm text-muted-foreground">Utilizamos protocolos TLS 1.3 para toda comunicación entre tus sistemas y nuestras automatizaciones.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-secondary/30 border border-border space-y-4">
                            <EyeOff className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">Mínimo Acceso Necesario</h3>
                            <p className="text-sm text-muted-foreground">Aplicamos el principio de "Least Privilege" (Menor Privilegio): solo accedemos a los datos estrictamente necesarios para la función.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-secondary/30 border border-border space-y-4">
                            <Server className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">Hosting Soberano</h3>
                            <p className="text-sm text-muted-foreground">Priorizamos el alojamiento en infraestructuras con certificaciones SOC2 y cumplimiento GDPR.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-secondary/30 border border-border space-y-4">
                            <ShieldCheck className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">Auditorías de Código</h3>
                            <p className="text-sm text-muted-foreground">Cada línea de código que escribimos pasa por una revisión manual de seguridad antes de ser desplegada.</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <h2 className="text-2xl font-bold text-foreground">Nuestro Compromiso</h2>
                        <p>
                            En FalcoDevs entendemos que la automatización implica manejar procesos críticos de tu negocio. Por eso, no solo nos enfocamos en que el software funcione, sino en que sea resiliente y seguro.
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Seguridad;
