import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Pages
import Automatizacion from "./pages/servicios/Automatizacion";
import AgentesIA from "./pages/servicios/AgentesIA";
import Integraciones from "./pages/servicios/Integraciones";
import SoftwareMedida from "./pages/servicios/SoftwareMedida";
import Nosotros from "./pages/Nosotros";
import Casos from "./pages/Casos";
import Diagnostico from "./pages/Diagnostico";
import Contacto from "./pages/Contacto";
import Privacidad from "./pages/Privacidad";
import Seguridad from "./pages/Seguridad";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* SERVICIOS */}
            <Route path="/servicios/automatizacion-procesos" element={<Automatizacion />} />
            <Route path="/servicios/agentes-ia-operaciones" element={<AgentesIA />} />
            <Route path="/servicios/integraciones-empresariales" element={<Integraciones />} />
            <Route path="/servicios/software-a-medida" element={<SoftwareMedida />} />

            {/* TRANSVERSALES */}
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/casos" element={<Casos />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* LEGAL */}
            <Route path="/politica-privacidad" element={<Privacidad />} />
            <Route path="/seguridad" element={<Seguridad />} />
            <Route path="/terminos" element={<Privacidad />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
