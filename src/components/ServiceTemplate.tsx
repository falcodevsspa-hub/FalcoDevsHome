import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    includes: string[];
    excludes: string[];
    process: { step: string; title: string; description: string }[];
    faqs: { question: string; answer: string }[];
    seoTitle: string;
    seoDescription: string;
}

const ServiceTemplate = ({
    title,
    subtitle,
    description,
    includes,
    excludes,
    process,
    faqs,
    seoTitle,
    seoDescription
}: ServicePageProps) => {
    return (
        <MainLayout>
            <SEO title={seoTitle} description={seoDescription} />

            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "name": title,
                "description": description,
                "provider": {
                    "@type": "Organization",
                    "name": "FalcoDevs SpA"
                }
            }} />

            {faqs.length > 0 && (
                <JsonLd data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                }} />
            )}

            {/* Hero Section */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            {title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {subtitle}
                        </p>
                        <Button asChild size="lg" className="rounded-full">
                            <Link to="/diagnostico">Solicitar Diagnóstico Gratuito</Link>
                        </Button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            </section>

            {/* Content Section */}
            <section className="py-20 border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">¿Qué incluye este servicio?</h2>
                            <ul className="space-y-4">
                                {includes.map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-6">¿Qué NO incluye?</h2>
                            <ul className="space-y-4">
                                {excludes.map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start opacity-70">
                                        <XCircle className="h-6 w-6 text-destructive shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                            <h2 className="text-3xl font-bold mb-8">Nuestro Proceso</h2>
                            <div className="space-y-8">
                                {process.map((p, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                                {p.step}
                                            </div>
                                            {i < process.length - 1 && <div className="w-0.5 h-full bg-border my-2" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                                            <p className="text-muted-foreground">{p.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-secondary/20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-primary text-primary-foreground p-12 rounded-3xl space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">¿Listo para optimizar tus operaciones?</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Agenda un diagnóstico hoy y descubre cómo podemos ayudarte a escalar con tecnología.
                        </p>
                        <Button asChild variant="secondary" size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                            <Link to="/diagnostico" className="flex items-center gap-2">
                                Agendar ahora <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default ServiceTemplate;
