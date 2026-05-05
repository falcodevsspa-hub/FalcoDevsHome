import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Cpu, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import { trackConversion } from "@/utils/analytics";

const Hero = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#070d18] pb-20 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(21,155,232,0.22),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.12),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(8,48,112,0.38),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="hero-particles" />

<div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-6 lg:pr-8">
            <div className="hero-fade-up" style={{ animationDelay: "0.05s" }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_26px_rgba(34,211,238,0.18)]">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                Ingeniería, automatización e IA aplicada
              </div>
            </div>

            <h1
              className="hero-fade-up max-w-4xl text-4xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-6xl xl:text-7xl"
              style={{ animationDelay: "0.15s" }}
            >
              {" "}
                <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-green-600 bg-clip-text text-transparent">
              Automatiza,
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-300 to-green-200 bg-clip-text text-transparent">
              Ahorra 
    
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-green-600 bg-clip-text text-transparent">
              &
              </span>{" "}
                <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-green-600 bg-clip-text text-transparent">
              Escala
              </span>{" "}
            </h1>

            <p
              className="hero-fade-up max-w-2xl text-base leading-relaxed text-slate-300 md:text-xl"
              style={{ animationDelay: "0.25s" }}
            >
              Diseñamos agentes IA, dashboards y software a medida para ordenar procesos,
              reducir tareas repetitivas y convertir datos operativos en decisiones claras.
            </p>

            <div
              className="hero-fade-up flex flex-col items-start gap-3 pt-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.35s" }}
            >
              <Button
                asChild
                size="lg"
                className="group h-auto rounded-full border border-cyan-300/50 bg-cyan-400 px-8 py-5 text-base font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(34,211,238,0.5)]"
                onClick={() => trackConversion("hero_cta_click")}
              >
                <Link to="/diagnostico" className="flex items-center gap-2">
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto rounded-full border-cyan-300/35 bg-slate-950/20 px-8 py-5 text-cyan-100 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-300/10"
              >
                <a href="#soluciones">Ver soluciones</a>
              </Button>
            </div>

            <p className="hero-fade-up text-sm text-slate-400" style={{ animationDelay: "0.45s" }}>
              Diagnóstico inicial gratuito de 20 minutos para detectar oportunidades de automatización.
            </p>
          </div>

          <div className="hero-fade-up relative lg:-mt-10 xl:-mt-14" style={{ animationDelay: "0.25s" }}>
            <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/10 blur-3xl" />

              <div className="relative p-2">
                <div className="mb-5 flex items-center justify-between border-b border-cyan-200/15 pb-9">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    FalcoDevs Ops Layer
                  </p>
                  <p className="mt-1 text-xl font-semibold text-slate-100">
                    Flujo operativo inteligente
                  </p>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200 sm:flex">
                  <CheckCircle2 className="h-4 w-4" />
                  Activo
                </div>
              </div>

             <div className="grid gap-3 sm:grid-cols-3">

  <div className="flow-card rounded-2xl border border-cyan-200/15 bg-slate-900/75 p-4">
    <Database className="mb-3 h-5 w-5 text-cyan-300" />
    <p className="text-xs text-slate-400">Entrada</p>
    <p className="mt-1 text-base font-semibold text-cyan-100">
      Datos ordenados
    </p>
  </div>

  <div className="flow-card flow-card-delay-1 rounded-2xl border border-cyan-200/15 bg-slate-900/75 p-4">
    <Cpu className="mb-3 h-5 w-5 text-cyan-300" />
    <p className="text-xs text-slate-400">Proceso</p>
    <p className="mt-1 text-base font-semibold text-cyan-100">
      Reglas aplicadas
    </p>
  </div>

  <div className="flow-card flow-card-delay-2 rounded-2xl border border-cyan-200/15 bg-slate-900/75 p-4">
    <FileSpreadsheet className="mb-3 h-5 w-5 text-cyan-300" />
    <p className="text-xs text-slate-400">Salida</p>
    <p className="mt-1 text-base font-semibold text-cyan-100">
      Reporte listo
    </p>
  </div>
</div>

              <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-[#030914] p-4 font-mono text-sm text-emerald-200/90">
  <div className="terminal-line">
    <span className="text-cyan-300">&gt;</span> Recibiendo datos desde operación
    <span className="terminal-dots" />
  </div>

  <div className="terminal-line terminal-line-delay-1">
    <span className="text-cyan-300">&gt;</span> Aplicando validaciones automáticas
    <span className="terminal-dots" />
  </div>

  <div className="terminal-line terminal-line-delay-2">
    <span className="text-cyan-300">&gt;</span> Generando resumen para el equipo
    <span className="terminal-dots" />
  </div>
</div>

              <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-slate-900/60 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-200">Estado del sistema</p>
                  <p className="text-xs text-cyan-200">Sincronizado</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-400">
                      <span>Lectura de datos</span>
                      <span>Completa</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 w-full rounded-full bg-cyan-300/80" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-400">
                      <span>Validación</span>
                      <span>En curso</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 w-3/4 rounded-full bg-cyan-300/80" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-400">
                      <span>Reporte</span>
                      <span>Preparando</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 w-1/2 rounded-full bg-cyan-300/80" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-scan pointer-events-none absolute inset-x-10 top-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
