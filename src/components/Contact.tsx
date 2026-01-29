import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    empresa: "",
    message: "",
  });

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({ type: "error", message: "Por favor completa nombre, email y mensaje." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFeedback(null);

    // ⬇️ Leer y validar variables de entorno
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Faltan variables de entorno de EmailJS:", {
        serviceId,
        templateId,
        publicKey,
      });
      setFeedback({
        type: "error",
        message: "Falta configurar el servicio de correo. Intenta más tarde.",
      });
      toast({
        title: "Error de configuración",
        description: "Faltan datos de EmailJS en las variables de entorno.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "No especificado",
        empresa: formData.empresa || "No especificado",
        message: formData.message,
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        console.error("EmailJS error:", response.status, errorText);
        throw new Error(errorText || "No se pudo enviar el mensaje");
      }

      setFeedback({ type: "success", message: "Mensaje enviado. Te contactaremos pronto." });
      toast({
        title: "Mensaje enviado",
        description: "Te contactaremos a la brevedad.",
      });
      setFormData({ name: "", email: "", phone: "", empresa: "", message: "" });
    } catch (error) {
      console.error("❌ Error al enviar el mensaje:", error);
      setFeedback({
        type: "error",
        message: "Hubo un problema al enviar tu mensaje. Intenta nuevamente.",
      });
      toast({
        title: "Error al enviar",
        description: "Revisa los datos o intenta más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Contacto</p>
          <h2 className="text-4xl md:text-5xl font-semibold">Conversemos sobre tu proyecto</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cuéntanos lo que necesitas y diseñaremos la mejor forma de potenciar tu presencia digital.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 rounded-2xl border border-border bg-card/60 p-8 shadow-soft backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a
                  href="mailto:falcodevsspa@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  falcodevsspa@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Teléfono</h3>
                <a
                  href="tel:+56927444800"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +56 9 2744 4800
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/30 p-4 text-sm text-muted-foreground">
              Respuesta en menos de 24 horas hábiles. Trabajamos con equipos ágiles y trato directo con quienes implementan.
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-card/60 p-8 shadow-soft backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Nombre *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Input
                placeholder="Empresa"
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              />
            </div>
            <Textarea
              placeholder="Mensaje *"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              required
            />
            <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </span>
              )}
            </Button>
            {feedback && (
              <div
                className={`rounded-lg border px-4 py-3 text-sm ${
                  feedback.type === "success"
                    ? "border-green-500/40 bg-green-500/10 text-green-200 md:text-green-700 dark:text-green-100"
                    : "border-destructive/40 bg-destructive/10 text-destructive"
                }`}
              >
                {feedback.message}
              </div>
            )}
            <p className="text-sm text-muted-foreground">WhatsApp: +56 9 2744 4800</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

