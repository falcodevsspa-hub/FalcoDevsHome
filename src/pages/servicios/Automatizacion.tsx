import ServiceTemplate from "@/components/ServiceTemplate";

const Automatizacion = () => {
    return (
        <ServiceTemplate
            title="Automatización de Procesos"
            subtitle="Elimina tareas repetitivas y libera a tu equipo para lo que realmente importa."
            description="Diseñamos flujos de trabajo inteligentes que conectan tus herramientas actuales para operar sin intervención manual."
            seoTitle="Automatización de Procesos con IA en Chile"
            seoDescription="Optimiza tu empresa con flujos de trabajo automáticos. Reducción de costos operativos y eliminación de errores manuales con tecnología de punta."
            includes={[
                "Mapeo de procesos actuales y detección de cuellos de botella.",
                "Diseño de flujos automatizados (n8n, Make, Zapier).",
                "Conexión entre CRMs, ERPs y hojas de cálculo.",
                "Alertas automáticas en Slack, Discord o WhatsApp.",
                "Documentación técnica y capacitación de uso.",
                "Soporte post-implementación por 30 días."
            ]}
            excludes={[
                "Migración masiva de bases de datos legadas no estructuradas.",
                "Gestión de pagos de suscripciones de herramientas de terceros.",
                "Limpieza manual de datos históricos (Data Cleaning)."
            ]}
            process={[
                {
                    step: "1",
                    title: "Diagnóstico",
                    description: "Entendemos tus procesos actuales e identificamos las mayores fricciones."
                },
                {
                    step: "2",
                    title: "Diseño de Solución",
                    description: "Creamos un plano técnico de cómo se conectarán tus herramientas."
                },
                {
                    step: "3",
                    title: "Implementación & Test",
                    description: "Construimos la automatización y la probamos en entorno controlado."
                }
            ]}
            faqs={[
                {
                    question: "¿Necesito cambiar mi software actual?",
                    answer: "No necesariamente. Trabajamos integrando las herramientas que ya usas para que la transición sea orgánica."
                },
                {
                    question: "¿Cuánto tiempo toma ver resultados?",
                    answer: "La mayoría de nuestras automatizaciones piloto están listas en 7-14 días."
                },
                {
                    question: "¿Es seguro dar acceso a mis datos?",
                    answer: "Totalmente. Utilizamos protocolos de seguridad estándar y frameworks de encriptación para asegurar que tu información corporativa esté protegida."
                }
            ]}
        />
    );
};

export default Automatizacion;
