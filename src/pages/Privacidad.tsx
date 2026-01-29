import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/SEO";

const Privacidad = () => {
    return (
        <MainLayout>
            <SEO title="Política de Privacidad" description="Transparencia en el manejo de tus datos corporativos." />
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-12">Política de Privacidad</h1>
                    <div className="prose prose-invert max-w-none text-muted-foreground space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Identidad del Responsable</h2>
                            <p>
                                FalcoDevs SpA, con domicilio en Chile, es responsable del tratamiento de los datos personales que usted nos proporcione.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Finalidad del Tratamiento</h2>
                            <p>
                                Los datos recolectados a través de nuestros formularios de contacto y diagnóstico se utilizan exclusivamente para:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Agendar y realizar las sesiones de diagnóstico solicitadas.</li>
                                <li>Enviar propuestas comerciales relacionadas con nuestros servicios.</li>
                                <li>Atender consultas técnicas y operativas.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Seguridad de los Datos</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas y organizativas para proteger su información contra pérdida, robo o uso no autorizado. Nunca vendemos ni compartimos sus datos con terceros con fines publicitarios.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Privacidad;
