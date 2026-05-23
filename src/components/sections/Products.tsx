import { useState } from "react";
import {
  ArrowUpRight,
  Clock,
  Sparkles,
  Zap,
  Globe,
  Calendar,
  Activity,
} from "lucide-react";

// ─── Easing constant ─────────────────────────────────────────────────────────
const LIQUID = "0.55s cubic-bezier(0.25, 1, 0.5, 1)";

// ─── Data ─────────────────────────────────────────────────────────────────────
const products = [
  {
    id: "01",
    title: "Agents",
    description:
      "Agentes de IA para ejecutar tareas operativas, automatizar flujos y reducir trabajo repetitivo.",
    href: "https://agents.falcodevs.cl/",
    logo: "/logoFDA_transparent.png",
    status: "Disponible",
    tag: "IA Operativa",
    available: true,
    Icon: Zap,
  },
  {
    id: "02",
    title: "LandingExpress",
    description:
      "Landing pages rápidas, claras y orientadas a conversión para pymes, servicios y negocios locales.",
    href: "https://express.falcodevs.cl/",
    logo: "/logoLE_transparent.png",
    status: "Disponible",
    tag: "Web & Conversión",
    available: true,
    Icon: Globe,
  },
  {
    id: "03",
    title: "Agendly",
    description:
      "Sistema simple de agendamiento online para negocios, profesionales y servicios que viven de reservas.",
    href: "https://agendly.falcodevs.cl",
    logo: "/logoAgendly.png",
    status: "Disponible",
    tag: "Reservas Online",
    available: true,
    Icon: Calendar,
  },
  {
    id: "04",
    title: "Flux Monitor",
    description:
      "Monitoreo industrial y control de procesos en tiempo real para operaciones más visibles y medibles.",
    href: "#",
    logo: "/fm-logo-grande.png",
    status: "Próximamente",
    tag: "Industrial",
    available: false,
    Icon: Activity,
  },
];

// ─── ProductRow ───────────────────────────────────────────────────────────────
function ProductRow({ item }: { item: (typeof products)[number] }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { Icon } = item;

  const Wrapper = item.available ? "a" : "div";
  const wrapperProps = item.available
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative border-b border-slate-200/70 dark:border-white/[0.07]"
        style={{ cursor: item.available ? "pointer" : "default" }}
      >
        {/* ── Hover wash (cyan tint left → transparent) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,211,238,0.06) 0%, transparent 65%)",
            opacity: hovered ? 1 : 0,
            transition: `opacity ${LIQUID}`,
          }}
        />

        {/* ── Left accent bar ── */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400"
          style={{
            transform: hovered ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: `transform ${LIQUID}`,
          }}
        />

        <div className="relative px-10 md:px-10 py-10 md:py-7">

          {/* ── Main flex row ── */}
          <div className="flex items-center gap-4 md:gap-7 lg:gap-8">

            {/* Index number */}
            <span
               className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] text-slate-300/60
                          dark:text-white/15 shrink-0 select-none w-5 text-right"
            >
              {item.id}
            </span>

            {/* ── Logo — free-floating, no box ── */}
            <div
              className="shrink-0"
              style={{
                filter:
                  item.available && hovered
                    ? "drop-shadow(0 6px 18px rgba(34,211,238,0.38))"
                    : "none",
                transform: hovered
                  ? "translateY(-3px) scale(1.07)"
                  : "translateY(0) scale(1)",
                transition: `all ${LIQUID}`,
              }}
            >
              {!imgError ? (
                <img
                  src={item.logo}
                  alt={item.title}
                  className={`h-10 w-10 md:h-11 md:w-11 object-contain ${
                    !item.available ? "opacity-25 grayscale" : ""
                  }`}
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback icon — shown only if img 404s */
                <div
                  className={`h-10 w-10 md:h-11 md:w-11 rounded-[14px] flex items-center justify-center ${
                    item.available
                      ? "bg-cyan-300/10 text-cyan-400 dark:text-cyan-300"
                      : "bg-slate-100 dark:bg-white/5 text-slate-300 dark:text-white/20"
                  }`}
                >
                  <Icon className="h-5 w-5 md:h-[22px] md:w-[22px]" />
                </div>
              )}
            </div>

            {/* ── Product name ── */}
<div className="flex-1 min-w-0 overflow-hidden">
  <h3
    className={`font-['Manrope'] font-semibold tracking-[-0.065em] leading-[1.2]
      transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap
      pb-1 pt-0.5
      text-[1.55rem] md:text-[2.1rem] lg:text-[2.6rem]
      ${
        item.available
          ? "text-[#20162F] dark:text-white"
          : "text-[#20162F]/25 dark:text-white/20"
      }`}
  >
    {item.title}
  </h3>
</div>

            {/* Tag — desktop only */}
            <span
               className="hidden lg:block shrink-0 font-mono text-[10px] tracking-[0.22em]
                          uppercase text-slate-400/70 dark:text-white/20 min-w-[118px] text-right"
            >
              {item.tag}
            </span>

            {/* Status badge */}
            <span
              className={`shrink-0 text-[10px] font-black uppercase tracking-[0.18em]
                          px-3 py-[5px] rounded-full ${
                            item.available
                              ? "bg-cyan-300 text-[#07101f]"
                              : "bg-slate-100 dark:bg-white/[0.06] text-slate-400 dark:text-white/25"
                          }`}
            >
              {item.status}
            </span>

            {/* CTA button */}
            {item.available ? (
              <div
                className="shrink-0 h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center"
                style={{
                  border: `1px solid ${
                    hovered ? "#22d3ee" : "rgba(148,163,184,0.35)"
                  }`,
                  background: hovered ? "#22d3ee" : "transparent",
                  transform: hovered ? "scale(1.1)" : "scale(1)",
                  transition: `all ${LIQUID}`,
                }}
              >
                <ArrowUpRight
                  className="h-4 w-4"
                  style={{
                    color: hovered
                      ? "#07101f"
                      : "rgba(148,163,184,0.6)",
                    transition: `color ${LIQUID}`,
                  }}
                />
              </div>
            ) : (
              <div
                className="shrink-0 h-9 w-9 rounded-full flex items-center justify-center
                           border border-slate-200 dark:border-white/[0.07] opacity-35"
              >
                <Clock className="h-3.5 w-3.5 text-slate-400 dark:text-white/30" />
              </div>
            )}
          </div>

          {/* ── Expandable description (revealed on hover) ── */}
          <div
            style={{
              maxHeight: hovered ? 64 : 0,
              opacity: hovered ? 1 : 0,
              overflow: "hidden",
              transition: `max-height ${LIQUID}, opacity 0.38s ease`,
            }}
          >
            <p
              className="text-sm md:text-[15px] leading-relaxed
                         text-[#07101f]/48 dark:text-white/38 max-w-2xl"
              style={{
                margin: "11px 0 0",
                paddingLeft: "calc(20px + 44px + 2rem + 2rem)",  /* index + logo + two gaps */
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

function ProductCardMobile({ item }: { item: (typeof products)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { Icon } = item;

  return (
    <article
      className={`rounded-2xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-sm transition-colors dark:border-white/[0.08] dark:bg-white/[0.02] ${
        item.available ? "" : "opacity-75"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="pt-1 font-mono text-[10px] tracking-[0.22em] text-slate-400 dark:text-white/30 shrink-0">
          {item.id}
        </span>

        <div className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center bg-white dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.08]">
          {!imgError ? (
            <img
              src={item.logo}
              alt={item.title}
              className={`h-8 w-8 object-contain ${
                !item.available ? "opacity-60 grayscale" : ""
              }`}
              onError={() => setImgError(true)}
            />
          ) : (
            <Icon
              className={`h-5 w-5 ${
                item.available
                  ? "text-cyan-500 dark:text-cyan-300"
                  : "text-slate-400 dark:text-white/30"
              }`}
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span
              className={`text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${
                item.available
                  ? "bg-cyan-300 text-[#07101f]"
                  : "bg-slate-100 text-slate-500 dark:bg-white/[0.08] dark:text-white/50"
              }`}
            >
              {item.status}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 dark:text-white/30">
              {item.tag}
            </span>
          </div>

          <h3
            className={`font-['Manrope'] text-xl leading-tight tracking-[-0.03em] ${
              item.available ? "text-[#20162F] dark:text-white" : "text-[#20162F]/70 dark:text-white/70"
            }`}
          >
            {item.title}
          </h3>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300/70 text-slate-500 transition-transform duration-300 dark:border-white/[0.2] dark:text-white/70"
          aria-expanded={expanded}
          aria-label={expanded ? "Cerrar detalle" : "Ver detalle"}
        >
          <ArrowUpRight
            className={`h-4 w-4 transition-transform duration-300 ${
              expanded ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>

        {item.available ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#07101f]"
          >
            Abrir
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:border-white/[0.1] dark:text-white/45">
            <Clock className="h-3.5 w-3.5" />
            Pronto
          </div>
        )}
      </div>

      <div
        style={{
          maxHeight: expanded ? 160 : 0,
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: `max-height ${LIQUID}, opacity 0.3s ease`,
        }}
      >
        <p className="pt-3 text-sm leading-relaxed text-[#07101f]/65 dark:text-white/55">
          {item.description}
        </p>
      </div>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
const Products = () => {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden border-t border-slate-200/70 dark:border-white/[0.07]
                 bg-[#f7f9fb] dark:bg-[#07101f] text-[#07101f] dark:text-white
                 transition-colors duration-500 py-24"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[520px]
                      -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[140px]
                      dark:bg-cyan-300/[0.06]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div
          className="px-6 md:px-10 pb-14 flex flex-col md:flex-row
                     justify-between md:items-end gap-8"
        >
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full
                         border border-cyan-300/25 bg-cyan-300/[0.08]
                         px-4 py-2 text-[11px] font-bold uppercase
                         tracking-[0.22em] text-cyan-500 dark:text-cyan-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Ecosistema FalcoDevs
            </div>

            <h2
              className="font-['Manrope'] font-semibold leading-[0.92]
                         tracking-[-0.065em] text-[#20162F] dark:text-white
                         text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl
                         max-w-[14ch]"
            >
              Productos digitales
            </h2>
          </div>

          <p
             className="max-w-[360px] text-base md:text-lg leading-relaxed
                        text-[rgba(7,16,31,0.55)] dark:text-[rgba(255,255,255,0.45)]"
           >
            Herramientas propias creadas para automatizar, ordenar procesos,
            mejorar ventas y construir presencia digital útil.
          </p>
        </div>

        {/* ── Product list (desktop / tablet) ── */}
        <div className="hidden md:block border-t border-slate-200/70 dark:border-white/[0.07]">
          {products.map((item) => (
            <ProductRow key={item.id} item={item} />
          ))}
        </div>

        {/* ── Product cards (mobile) ── */}
        <div className="block md:hidden border-t border-slate-200/70 dark:border-white/[0.07] px-6 pt-6">
          <div className="flex flex-col gap-4">
            {products.map((item) => (
              <ProductCardMobile key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
