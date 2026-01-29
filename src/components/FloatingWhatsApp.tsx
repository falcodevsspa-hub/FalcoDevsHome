import { MessageCircle } from "lucide-react";
import { trackConversion } from "@/utils/analytics";

const FloatingWhatsApp = () => {
    const phoneNumber = "+56927444800";
    const message = "Hola FalcoDevs, me gustaría solicitar un diagnóstico para mi empresa.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const handleClick = () => {
        trackConversion("whatsapp_click", "floating_button");
    };

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
                ¿Hablamos?
            </span>
        </a>
    );
};

export default FloatingWhatsApp;
