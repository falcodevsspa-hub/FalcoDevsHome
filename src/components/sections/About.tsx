import { Users } from "lucide-react";

const About = () => {
  return (
    <section
      id="nosotros"
      className="border-t border-slate-200/70 bg-[#f7f9fb] py-24 dark:border-white/[0.07] dark:bg-[#07101f]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-500 dark:text-cyan-300">
          <Users className="h-3.5 w-3.5" />
          Equipo FalcoDevs
        </div>

        <h2 className="max-w-[18ch] font-['Manrope'] text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.065em] text-[#20162F] dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Ingeniería aplicada a negocios que necesitan moverse rápido.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[rgba(7,16,31,0.55)] dark:text-[rgba(255,255,255,0.45)] md:text-lg">
          Somos ingenieros que hablan directo, construimos rápido y respondemos por lo que entregamos.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-200/70 pt-10 dark:border-white/[0.07] md:grid-cols-3 md:gap-0 md:pt-12">
          <div className="md:px-6 md:first:pl-0 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-slate-200/70 md:dark:[&:not(:last-child)]:border-white/[0.07]">
            <p className="font-['Manrope'] text-4xl font-semibold text-[#20162F] dark:text-white md:text-5xl">3</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(7,16,31,0.55)] dark:text-[rgba(255,255,255,0.45)]">
              Productos activos
            </p>
          </div>
          <div className="md:px-6 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-slate-200/70 md:dark:[&:not(:last-child)]:border-white/[0.07]">
            <p className="font-['Manrope'] text-4xl font-semibold text-[#20162F] dark:text-white md:text-5xl">+20</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(7,16,31,0.55)] dark:text-[rgba(255,255,255,0.45)]">
              Automatizaciones entregadas
            </p>
          </div>
          <div className="md:px-6 md:last:pr-0">
            <p className="font-['Manrope'] text-4xl font-semibold text-[#20162F] dark:text-white md:text-5xl">24h</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(7,16,31,0.55)] dark:text-[rgba(255,255,255,0.45)]">
              Tiempo de respuesta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
