import ServiceTemplate from "@/components/ServiceTemplate";

const AgentesIA = () => {
    return (
        <ServiceTemplate
            title="Agentes IA & Operaciones"
            subtitle="Inteligencia Artificial aplicada a la ejecución de tareas críticas en tu negocio."
            description="Implementamos agentes autónomos que no solo responden preguntas, sino que ejecutan acciones basadas en datos."
            seoTitle="Agentes de IA para Operaciones Empresariales"
            seoDescription="Implementa agentes inteligentes que automatizan soporte, ventas y análisis de datos en tiempo real. IA aplicada a resultados de negocio."
            includes={[
                "Implementación de Agentes GPT personalizados (Custom GPTs).",
                "Integración de IA con sistemas internos vía API.",
                "Automatización de atención al cliente de primer nivel.",
                "Análisis predictivo de datos operativos.",
                "Entrenamiento de modelos con tu propia base de conocimientos.",
                "Configuración de guardrails para asegurar respuestas corporativas."
            ]}
            excludes={[
                "Desarrollo de modelos fundacionales desde cero (Training LLMs).",
                "Hardware físico para procesamiento local.",
                "Moderación manual de contenidos generados."
            ]}
            process={[
                {
                    step: "1",
                    title: "Auditoría de Datos",
                    description: "Revisamos la calidad y accesibilidad de la información que alimentará a la IA."
                },
                {
                    step: "2",
                    title: "Prototipo de Agente",
                    description: "Creamos una versión beta del agente para validar su lógica y tono."
                },
                {
                    step: "3",
                    title: "Despliegue Operativo",
                    description: "Lanzamos el agente al flujo de trabajo real con monitoreo constante."
                }
            ]}
            faqs={[
                {
                    question: "¿Los agentes pueden cometer errores (alucinaciones)?",
                    answer: "Configuramos restricciones estrictas (guardrails) y bases de datos vectoriales (RAG) para asegurar que el agente solo responda con información verídica y verificable."
                },
                {
                    question: "¿Con qué idiomas trabajan?",
                    answer: "Nuestros sistemas son nativos en español, pero pueden operar en más de 50 idiomas con fluidez profesional."
                },
                {
                    question: "¿Qué IA utilizan?",
                    answer: "Seleccionamos el mejor modelo para cada caso (OpenAI, Anthropic, Google Vertx o Llama 3) priorizando latencia, costo y seguridad."
                }
            ]}
        />
    );
};

export default AgentesIA;
