import { useState } from "react";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
        message: "Falta configurar el servicio de correo. Intenta mas tarde.",
      });
      toast({
        title: "Error de configuracion",
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
      console.error("Error al enviar el mensaje:", error);
      setFeedback({
        type: "error",
        message: "Hubo un problema al enviar tu mensaje. Intenta nuevamente.",
      });
      toast({
        title: "Error al enviar",
        description: "Revisa los datos o intenta mas tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="border-t border-white/[0.07] bg-[#07101f] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
            <MessageCircle className="h-3.5 w-3.5" />
            Hablemos
          </div>
          <h2 className="max-w-[18ch] font-['Manrope'] text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            "¿En qué podemos ayudarte?"
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[rgba(255,255,255,0.45)] md:text-lg">
            Cuéntanos tu desafío y te respondemos con una propuesta 
            concreta: alcance, fechas y costos definidos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 text-cyan-300">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)]">Email</p>
                <a href="mailto:contacto@falcodevs.cl" className="mt-1 block text-white transition hover:text-cyan-300">
                  contacto@falcodevs.cl
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 text-cyan-300">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)]">Teléfono</p>
                <a href="tel:+56927444800" className="mt-1 block text-white transition hover:text-cyan-300">
                  +56 9 2744 4800
                </a>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-cyan-300/60 bg-transparent px-6 font-semibold text-cyan-300 hover:border-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-200"
            >
              <a
                href="https://wa.me/56927444800?text=Hola%2C+quiero+saber+más+sobre+FalcoDevs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </Button>

            <p className="font-mono text-[11px] text-[rgba(255,255,255,0.45)]">
              Respondemos en menos de 24 horas hábiles.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[2rem] border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-8"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                placeholder="Nombre *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-white/10 bg-transparent text-white placeholder:text-white/30 focus:border-cyan-300/60"
              />
              <Input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-white/10 bg-transparent text-white placeholder:text-white/30 focus:border-cyan-300/60"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-white/10 bg-transparent text-white placeholder:text-white/30 focus:border-cyan-300/60"
              />
              <Input
                placeholder="Empresa"
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="border-white/10 bg-transparent text-white placeholder:text-white/30 focus:border-cyan-300/60"
              />
            </div>
            <Textarea
              placeholder="Mensaje *"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              required
              className="border-white/10 bg-transparent text-white placeholder:text-white/30 focus:border-cyan-300/60"
            />
            <Button
              type="submit"
              className="h-12 w-full rounded-full bg-cyan-300 font-black text-[#07101f] hover:bg-cyan-200"
              disabled={isSubmitting}
            >
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
                className={`rounded-[14px] border px-4 py-3 text-sm ${
                  feedback.type === "success"
                    ? "border-green-400/10 bg-green-400/10 text-green-200"
                    : "border-red-400/10 bg-red-400/10 text-red-200"
                }`}
              >
                {feedback.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
