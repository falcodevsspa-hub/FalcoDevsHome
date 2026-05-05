import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { trackConversion } from "@/utils/analytics";

const falcodevsLogo = "/logoHome.png";

const services = [
  { title: "Automatización de Procesos", href: "/servicios/automatizacion-procesos" },
  { title: "Agentes IA & Operaciones", href: "/servicios/agentes-ia-operaciones" },
  { title: "Integraciones Empresariales", href: "/servicios/integraciones-empresariales" },
  { title: "Software a Medida", href: "/servicios/software-a-medida" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const handleNavClick = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${isScrolled ? "scrolled" : ""} ${
        isDark
          ? isScrolled
            ? "border-cyan-300/20 bg-[rgba(10,15,30,0.75)] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            : "border-cyan-200/10 bg-[rgba(10,15,30,0.6)] backdrop-blur-xl"
          : isScrolled
            ? "border-[rgba(0,0,0,0.05)] bg-white backdrop-blur-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            : "border-[rgba(0,0,0,0.05)] bg-[rgba(255,255,255,0.95)] backdrop-blur-[8px]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* BRAND */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={falcodevsLogo}
              alt="FalcoDevs"
              className="h-9 w-9 md:h-10 md:w-10 object-contain drop-shadow-[0_0_10px_rgba(0,200,255,0.45)] transition-transform group-hover:scale-105"
            />
            <span className="text-xl md:text-2xl font-semibold tracking-tight">
              <span className="text-foreground">Falco</span>
              <span className="text-primary">Devs</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link to="/" className={`${isDark ? "text-foreground/90" : "text-slate-900"} transition-all duration-300 hover:text-cyan-500 ${isDark ? "hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]" : ""}`}>
              Inicio
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 ${isDark ? "text-foreground/90" : "text-slate-900"} transition-all duration-300 hover:text-cyan-500 ${isDark ? "hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]" : ""} outline-none`}>
                Soluciones <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link to={service.href} className="w-full cursor-pointer">
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/nosotros" className={`${isDark ? "text-foreground/90" : "text-slate-900"} transition-all duration-300 hover:text-cyan-500 ${isDark ? "hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]" : ""}`}>
              Nosotros
            </Link>

            <Button
              asChild
              variant="default"
              size="sm"
              className={`rounded-full px-5 border transition-all duration-300 hover:scale-[1.03] ${
                isDark
                  ? "border-cyan-300/40 bg-cyan-500/90 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_34px_rgba(34,211,238,0.55)]"
                  : "border-cyan-600/30 bg-cyan-500 text-white shadow-[0_8px_18px_rgba(6,182,212,0.28)] hover:bg-cyan-600 hover:shadow-[0_10px_24px_rgba(6,182,212,0.35)]"
              }`}
              onClick={() => trackConversion("navbar_cta_click")}
            >
              <Link to="/diagnostico">Solicitar Diagnóstico</Link>
            </Button>

            {/* THEME SWITCHER */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cambiar tema"
              onClick={toggleTheme}
              className="rounded-full border border-border/60 bg-card hover:border-primary/50"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* MOBILE NAV BUTTON */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cambiar tema"
              onClick={toggleTheme}
              className="rounded-full border border-border/60 bg-card hover:border-primary/50"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground transition-colors hover:text-primary"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-in slide-in-from-top-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left rounded-lg border border-border bg-card px-4 py-3 text-foreground"
            >
              Inicio
            </Link>

            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Soluciones
            </div>
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left rounded-lg border border-border bg-card px-4 py-3 text-foreground ml-2"
              >
                {service.title}
              </Link>
            ))}

            <Link
              to="/nosotros"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left rounded-lg border border-border bg-card px-4 py-3 text-foreground"
            >
              Nosotros
            </Link>

            <Link
              to="/diagnostico"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left rounded-lg bg-primary px-4 py-3 text-primary-foreground font-semibold text-center"
            >
              Solicitar Diagnóstico
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
