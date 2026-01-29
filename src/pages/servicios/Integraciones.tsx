import ServiceTemplate from "@/components/ServiceTemplate";

const Integraciones = () => {
    return (
        <ServiceTemplate
            title="Integraciones Empresariales"
            subtitle="Conectamos tus islas de información para una visibilidad total de tu negocio."
            description="Hacemos que tus sistemas se hablen entre sí, eliminando la duplicidad de datos y los procesos manuales entre departamentos."
            seoTitle="Integración de Sistemas y APIs para Empresas"
            seoDescription="Conecta tu CRM, ERP, E-commerce y herramientas de marketing. Sincronización de datos en tiempo real para una toma de decisiones informada."
            includes={[
                "Conexión vía Webhooks y APIs REST/GraphQL.",
                "Sincronización bidireccional de bases de datos.",
                "Migración de datos estructurados entre plataformas.",
                "Monitoreo de salud de integraciones 24/7.",
                "Dashboards de control centralizados.",
                "Gestión de autenticación OAuth y API Keys."
            ]}
            excludes={[
                "Desarrollo de drivers para hardware propietario antiguo.",
                "Reparación de errores en software de terceros.",
                "Ingeniería inversa de protocolos no documentados."
            ]}
            process={[
                {
                    step: "1",
                    title: "Mapa de API",
                    description: "Documentamos los puntos de contacto disponibles en tu stack actual."
                },
                {
                    step: "2",
                    title: "Capa de Middleware",
                    description: "Desarrollamos la lógica de conexión que garantiza que el dato llegue íntegro."
                },
                {
                    step: "3",
                    title: "Pruebas de Estrés",
                    description: "Validamos que la integración soporte altos volúmenes de datos sin caídas."
                }
            ]}
            faqs={[
                {
                    question: "¿Qué pasa si mis sistemas no tienen API abierta?",
                    answer: "Exploramos alternativas como integraciones vía base de datos directa, RPA (Robotic Process Automation) o exportaciones automatizadas programadas."
                },
                {
                    question: "¿Cómo aseguran que no se pierdan datos?",
                    answer: "Implementamos sistemas de reintento automático y colas de mensajes (Queues) para que ningún dato se pierda en caso de una falla temporal de conexión."
                }
            ]}
        />
    );
};

export default Integraciones;
