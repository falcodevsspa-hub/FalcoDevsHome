import ServiceTemplate from "@/components/ServiceTemplate";

const SoftwareMedida = () => {
    return (
        <ServiceTemplate
            title="Software a Medida"
            subtitle="Si no existe en el mercado, lo construimos para ti."
            description="Desarrollamos aplicaciones web y herramientas internas diseñadas específicamente para tus reglas de negocio únicas."
            seoTitle="Desarrollo de Software a Medida en Chile"
            seoDescription="Software escalable, seguro y fácil de usar. Creamos soluciones digitales que se adaptan a tu negocio, no al revés."
            includes={[
                "Desarrollo Frontend (React, Vite, Next.js).",
                "Arquitectura Backend robusta y escalable.",
                "Diseño de experiencia de usuario (UX/UI).",
                "Alojamiento en la nube (AWS, Google Cloud o VPS).",
                "Mantenimiento técnico y actualizaciones de seguridad.",
                "Código fuente 100% propiedad del cliente."
            ]}
            excludes={[
                "Compra de dominios y hosting (asesoramos, pero el cliente es dueño).",
                "Marketing digital o gestión de redes sociales.",
                "Soporte técnico para hardware de oficina."
            ]}
            process={[
                {
                    step: "1",
                    title: "Levantamiento",
                    description: "Definimos épicas, historias de usuario y alcances del proyecto."
                },
                {
                    step: "2",
                    title: "Sprint de Desarrollo",
                    description: "Entregas iterativas cada 2 semanas para validación constante."
                },
                {
                    step: "3",
                    title: "QA & Deploy",
                    description: "Pruebas rigurosas de seguridad y rendimiento antes del lanzamiento final."
                }
            ]}
            faqs={[
                {
                    question: "¿El software será de mi propiedad?",
                    answer: "Sí, al finalizar el proyecto entregamos el repositorio completo y los accesos de administración. Tú eres el dueño total de la propiedad intelectual."
                },
                {
                    question: "¿Cómo manejan los cambios durante el proyecto?",
                    answer: "Trabajamos con metodologías ágiles que permiten ajustar el rumbo según el feedback de cada sprint, asegurando que el producto final cumpla tus expectativas."
                }
            ]}
        />
    );
};

export default SoftwareMedida;
