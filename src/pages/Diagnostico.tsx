import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";
import { trackConversion } from "@/utils/analytics";

const WHATSAPP_NUMBER = "56927444800";

type FormData = {
    name: string;
    company: string;
    whatsapp: string;
    email: string;
    problem: string;
    urgency: string;
    message: string;
};

const problemLabels: Record<string, string> = {
    manual: "Mucho trabajo manual / repetitivo",
    data: "Datos dispersos / falta de visibilidad",
    software: "Necesito un software que no existe",
    ia: "Quiero aplicar IA pero no se como",
    other: "Otro",
};

const urgencyLabels: Record<string, string> = {
    high: "Critica (Necesito para ayer)",
    medium: "Media (Proximas semanas)",
    low: "Baja (Explorando opciones)",
};

const Diagnostico = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        whatsapp: "",
        email: "",
        problem: "",
        urgency: "",
        message: "",
    });

    const openWhatsApp = () => {
        const whatsappMessage = `Nuevo diagnostico tecnologico solicitado\n\nNombre: ${formData.name}\nEmpresa: ${formData.company || "No indicado"}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}\nProblema principal: ${problemLabels[formData.problem] || formData.problem}\nUrgencia: ${urgencyLabels[formData.urgency] || formData.urgency}\nComentarios: ${formData.message || "Sin comentarios"}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const validateRequiredFields = () => {
        if (!formData.name.trim() || !formData.whatsapp.trim() || !formData.email.trim() || !formData.problem || !formData.urgency) {
            toast.error("Completa los campos obligatorios para enviar la solicitud.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateRequiredFields()) return;

        setIsLoading(true);
        trackConversion("form_submit", "diagnostico");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    company: formData.company,
                    whatsapp: formData.whatsapp,
                    email: formData.email,
                    problem: problemLabels[formData.problem] || formData.problem,
                    urgency: urgencyLabels[formData.urgency] || formData.urgency,
                    message: formData.message,
                }),
            });

            if (!response.ok) {
                throw new Error("No se pudo enviar el correo de diagnostico.");
            }

            toast.success("Solicitud enviada correctamente. Te contactaremos pronto.");
            openWhatsApp();
            setSubmitted(true);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Error al enviar el correo de diagnostico.";
            toast.error(`${message} Puedes continuar por WhatsApp.`);
            openWhatsApp();
        } finally {
            setIsLoading(false);
        }
    };

    if (submitted) {
        return (
            <MainLayout>
                <section className="py-24 flex items-center justify-center min-h-[60vh]">
                    <div className="text-center space-y-6 max-w-md mx-auto px-4">
                        <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold">¡Solicitud Recibida!</h1>
                        <p className="text-muted-foreground">
                            Hemos recibido tus datos. Un ingeniero se pondrá en contacto contigo en las próximas 24 horas hábiles para coordinar la sesión.
                        </p>
                        <Button asChild variant="outline">
                            <a href="/">Volver al Inicio</a>
                        </Button>
                    </div>
                </section>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <SEO
                title="Diagnóstico Gratuito"
                description="Agenda una sesión de 15 minutos para analizar los cuellos de botella tecnológicos de tu empresa."
            />
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <h1 className="text-4xl md:text-5xl font-bold">Solicitar Diagnóstico Tecnológico</h1>
                            <p className="text-xl text-muted-foreground">
                                Una sesión de 20 minutos donde identificaremos el proceso con mayor potencial de automatización en tu negocio.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Análisis de stack tecnológico actual.",
                                    "Identificación de 'fricciones' operativas.",
                                    "Propuesta de solución técnica preliminar.",
                                    "Estimación de Retorno de Inversión (ROI)."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-secondary/30 p-6 rounded-2xl border border-border">
                                <p className="italic text-muted-foreground">
                                    "El diagnóstico no tiene compromiso de compra. Nuestro objetivo es entregarte valor y claridad desde el primer minuto."
                                </p>
                                <p className="mt-4 font-bold">— Equipo FalcoDevs</p>
                            </div>
                        </div>

                        <div className="bg-card border border-border p-8 rounded-3xl shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nombre Completo</Label>
                                        <Input
                                            id="name"
                                            placeholder="Ej. Juan Perez"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Empresa</Label>
                                        <Input
                                            id="company"
                                            placeholder="Ej. Logistica SPA"
                                            value={formData.company}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="whatsapp">WhatsApp / Celular</Label>
                                        <Input
                                            id="whatsapp"
                                            placeholder="+56 9 1234 5678"
                                            required
                                            value={formData.whatsapp}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Corporativo</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="juan@empresa.cl"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="problem">¿Cuál es el principal problema hoy?</Label>
                                    <Select
                                        required
                                        value={formData.problem}
                                        onValueChange={(value) => setFormData((prev) => ({ ...prev, problem: value }))}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="manual">Mucho trabajo manual / repetitivo</SelectItem>
                                            <SelectItem value="data">Datos dispersos / falta de visibilidad</SelectItem>
                                            <SelectItem value="software">Necesito un software que no existe</SelectItem>
                                            <SelectItem value="ia">Quiero aplicar IA pero no sé cómo</SelectItem>
                                            <SelectItem value="other">Otro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="urgency">Urgencia</Label>
                                    <Select
                                        required
                                        value={formData.urgency}
                                        onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona el nivel de urgencia" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="high">Crítica (Necesito para ayer)</SelectItem>
                                            <SelectItem value="medium">Media (Próximas semanas)</SelectItem>
                                            <SelectItem value="low">Baja (Explorando opciones)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Comentarios adicionales</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Cuentanos brevemente sobre tu desafio..."
                                        className="min-h-[100px]"
                                        value={formData.message}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                                    />
                                </div>

                                <Button type="submit" className="w-full h-12 text-lg rounded-full" disabled={isLoading}>
                                    {isLoading ? "Enviando solicitud..." : "Enviar Solicitud"} <Send className="ml-2 h-4 w-4" />
                                </Button>
                                <p className="text-center text-xs text-muted-foreground pt-2">
                                    Al enviar, aceptas nuestra política de privacidad y tratamiento de datos.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Diagnostico;
