import { Link } from "react-router-dom";

const falcodevsLogo = "/logoHome.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={falcodevsLogo}
                alt="Logo FalcoDevs"
                className="h-9 w-9 object-contain"
                loading="lazy"
              />
              <span className="text-xl font-bold tracking-tight">FalcoDevs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Aceleramos negocios mediante la automatización inteligente y el desarrollo de software de alto impacto.
            </p>
            <div className="text-sm space-y-1">
              <p>falcodevsspa@gmail.com</p>
              <p>+56 9 2744 4800</p>
              <p>Chile (Ñuble / Santiago)</p>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="font-semibold mb-4">Soluciones</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/servicios/automatizacion-procesos" className="hover:text-primary transition-colors">Automatización de Procesos</Link></li>
              <li><Link to="/servicios/agentes-ia-operaciones" className="hover:text-primary transition-colors">Agentes IA & Operaciones</Link></li>
              <li><Link to="/servicios/integraciones-empresariales" className="hover:text-primary transition-colors">Integraciones Empresariales</Link></li>
              <li><Link to="/servicios/software-a-medida" className="hover:text-primary transition-colors">Software a Medida</Link></li>
            </ul>
          </div>

          {/* Compañía */}
          <div>
            <h4 className="font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/casos" className="hover:text-primary transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/diagnostico" className="hover:text-primary transition-colors">Diagnóstico Gratuito</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Seguridad</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/politica-privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/seguridad" className="hover:text-primary transition-colors">Seguridad de la Información</Link></li>
              <li><Link to="/terminos" className="hover:text-primary transition-colors">Términos del Servicio</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FalcoDevs SpA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
