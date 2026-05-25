import { Link } from "react-router-dom";

const falcodevsLogo = "/logoHome.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-[#07101f] dark:border-white/10 dark:bg-[#07101f] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Marca */}
          <div className="max-w-md space-y-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3"
            >
              <img
                src={falcodevsLogo}
                alt="Logo FalcoDevs"
                className="h-9 w-9 object-contain"
                loading="lazy"
              />

              <span className="text-xl font-black tracking-[-0.04em]">
                FalcoDevs
              </span>
            </Link>

            <p className="text-sm leading-6 text-[#07101f]/65 dark:text-white/65">
              Desarrollo de software, productos digitales y soluciones web para
              negocios que necesitan vender, ordenar procesos y crecer con IA.
            </p>
          </div>

          {/* Navegación real */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 text-sm font-semibold">Navegación</h4>

              <ul className="space-y-2 text-sm text-[#07101f]/65 dark:text-white/65">
                <li>
                  <a
                    href="#soluciones"
                    className="transition-colors hover:text-cyan-400"
                  >
                    Productos
                  </a>
                </li>

                <li>
                  <a
                    href="#contacto"
                    className="transition-colors hover:text-cyan-400"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Contacto</h4>

              <ul className="space-y-2 text-sm text-[#07101f]/65 dark:text-white/65">
                <li>
                  <a
                    href="mailto:contacto@falcodevs.cl"
                    className="transition-colors hover:text-cyan-400"
                  >
                    contacto@falcodevs.cl
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/56927444800"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-cyan-400"
                  >
                    +56 9 2744 4800
                  </a>
                </li>

                <li>Chile</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-[#07101f]/50 dark:border-white/10 dark:text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} FalcoDevs SpA. Todos los derechos reservados.
          </p>

          <div className="flex gap-5">
            <a
              href="https://wa.me/56927444800"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cyan-400"
            >
              WhatsApp
            </a>

            <a
              href="mailto:contacto@falcodevs.cl"
              className="transition-colors hover:text-cyan-400"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;