import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Digital Agents",
    description: "Agentes de IA para ejecutar tareas operativas y repetitivas.",
    href: "https://agents.falcodevs.cl/",
    logo: "/logoFDA_transparent.png",
    status: "Disponible",
  },
  {
    title: "LandingExpress",
    description: "Landing pages rápidas, claras y orientadas a conversión.",
    href: "https://express.falcodevs.cl/",
    logo: "/logoLE_transparent.png",
    status: "Disponible",
  },
  {
    title: "Agendly",
    description: "Sistema simple de agendamiento online para negocios y profesionales.",
    href: "https://agendly.falcodevs.cl",
    logo: "/logoAgendly.png",
    status: "Disponible",
  },
  {
    title: "Flux Monitor",
    description: "Monitoreo industrial y control de procesos en tiempo real.",
    href: "#",
    logo: "/fm-logo-grande.png",
    status: "Incoming...",
    disabled: true,
  },
];

const FeaturedSolutions = () => {
  return (
    <section
      id="soluciones"
      className="border-t border-slate-200 bg-[#f7f9fb] px-6 py-24 text-[#07101f] transition-colors duration-500 dark:border-white/10 dark:bg-[#07101f] dark:text-white md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-cyan-400">
            Ecosistema FalcoDevs
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.07em] md:text-7xl lg:text-6xl">
            𝙽𝚞𝚎𝚜𝚝𝚛𝚘𝚜 𝙿𝚛𝚘𝚍𝚞𝚌𝚝𝚘𝚜
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#07101f]/60 dark:text-white/60">
            Herramientas propias creadas para monitorear, automatizar y construir
            presencia digital con foco en utilidad real.
          </p>
        </div>

        <div className="border-y border-slate-200 dark:border-white/10">
          {products.map((item, index) => {
            const content = (
              <div
                className={`group grid gap-6 border-b border-slate-200 py-8 transition-colors last:border-b-0 md:grid-cols-[0.15fr_0.95fr_1fr_0.25fr] md:items-center md:px-4 dark:border-white/10 ${
                  item.disabled
                    ? "cursor-default opacity-55"
                    : "hover:bg-white/70 dark:hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-sm font-semibold text-[#07101f]/35 dark:text-white/35">
                  0{index + 1}
                </span>

                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm dark:bg-white/5">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black tracking-[-0.06em] md:text-5xl">
                      {item.title}
                    </h3>

                    <span
                      className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                        item.disabled
                          ? "bg-slate-200 text-[#07101f]/50 dark:bg-white/10 dark:text-white/50"
                          : "bg-cyan-300 text-[#07101f]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <p className="max-w-lg text-base leading-relaxed text-[#07101f]/60 dark:text-white/60">
                  {item.description}
                </p>

                <div className="flex items-center justify-start md:justify-end">
                  {item.disabled ? (
                    <span className="text-sm font-semibold text-[#07101f]/35 dark:text-white/35">
                      Próximamente
                    </span>
                  ) : (
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-all group-hover:border-cyan-300 group-hover:bg-cyan-300 group-hover:text-[#07101f] dark:border-white/10">
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  )}
                </div>
              </div>
            );

            return item.disabled ? (
              <div key={item.title}>{content}</div>
            ) : (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;