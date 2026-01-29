import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contacto = () => {
    return (
        <MainLayout>
            <SEO title="Contacto" description="¿Tienes una duda específica? Contáctanos." />
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl font-bold mb-12 text-center">Contacto Directo</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Email Corporativo</h3>
                                        <p className="text-muted-foreground">falcodevsspa@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Teléfono / WhatsApp</h3>
                                        <p className="text-muted-foreground">+56 9 2744 4800</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Ubicación</h3>
                                        <p className="text-muted-foreground">Región de Ñuble, Chile (Atención remota a todo el mundo)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-secondary/30 p-8 rounded-3xl border border-border flex flex-col items-center text-center justify-center">
                                <MessageSquare className="h-12 w-12 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-4">¿Buscas una cotización?</h3>
                                <p className="text-muted-foreground mb-8">
                                    Para proyectos nuevos, el mejor camino es comenzar con un diagnóstico gratuito de 20 minutos.
                                </p>
                                <Button asChild size="lg" className="rounded-full w-full">
                                    <Link to="/diagnostico">Solicitar Diagnóstico</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Contacto;
