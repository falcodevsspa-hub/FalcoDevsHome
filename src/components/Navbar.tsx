import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "react-router-dom";
import { trackConversion } from "@/utils/analytics";

const falcodevsLogo = "/logoHome.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
  { label: "Productos", href: "#soluciones" },
  { label: "Contacto", href: "#contacto" },
];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-[#07101f]/85"
          : "border-transparent bg-white/70 backdrop-blur-md dark:bg-[#07101f]/70"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
        >
          <img
            src={falcodevsLogo}
            alt="FalcoDevs"
            className="h-9 w-9 object-contain"
          />

          <span className="text-xl font-black tracking-[-0.04em] text-[#07101f] dark:text-white">
            FalcoDevs
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-7 text-sm font-medium text-[#07101f]/70 dark:text-white/70">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            asChild
            className="rounded-full bg-cyan-300 px-6 text-sm font-semibold text-[#07101f] shadow-none transition hover:scale-[1.03] hover:bg-cyan-200"
            onClick={() => trackConversion("navbar_cta_click")}
          >
            <Link to="/diagnostico">Hablemos</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Cambiar tema"
            onClick={toggleTheme}
            className="rounded-full text-[#07101f]/70 hover:bg-cyan-300/15 hover:text-[#07101f] dark:text-white/70 dark:hover:text-white"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cambiar tema"
            onClick={toggleTheme}
            className="rounded-full text-[#07101f]/70 hover:bg-cyan-300/15 dark:text-white/70"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-[#07101f] transition hover:bg-cyan-300/15 dark:text-white"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-3 dark:border-white/10 dark:bg-[#07101f] md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-[#07101f]/80 transition hover:bg-cyan-300/15 dark:text-white/80"
              >
                {item.label}
              </a>
            ))}

            <Link
              to="/diagnostico"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-cyan-300 px-5 py-3 text-center text-base font-semibold text-[#07101f]"
            >
              Hablemos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;