import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { trackConversion } from "@/utils/analytics";

const typingWords = [
  "Pymes reales.",
  "Procesos complejos",
  "Equipos que crecen",
  "Negocios locales",
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];

    if (isHolding) {
      const holdTimeout = setTimeout(() => {
        setIsHidden(true);

        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
          setIsHolding(false);
          setIsHidden(false);
        }, 350);
      }, 2800);

      return () => clearTimeout(holdTimeout);
    }

    if (charIndex < currentWord.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 90);

      return () => clearTimeout(typingTimeout);
    }

    setIsHolding(true);
  }, [charIndex, isHolding, wordIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f9fb] text-[#07101f] transition-colors duration-500 dark:bg-[#07101f] dark:text-white">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 md:px-10 md:pt-36">
        <div className="max-w-6xl">
          <h1 className="max-w-5xl font-['Manrope'] text-5xl font-medium leading-[0.95] tracking-[-0.065em] text-[#20162F] dark:text-white sm:text-7xl md:text-7xl lg:text-8xl">
  Software a medida para:
</h1>

<div className="mt-5 inline-flex min-h-[64px] items-center bg-cyan-300 px-4 py-2 font-mono text-4xl font-semibold leading-none tracking-[-0.045em] text-[#07101f] sm:text-5xl md:min-h-[84px] md:text-6xl lg:text-7xl">   <span
    className={`transition-opacity duration-300 ${
      isHidden ? "opacity-0" : "opacity-100"
    }`}
  >
    {displayText}
  </span>

  <span
    className={`ml-2 inline-block h-[0.9em] w-[3px] bg-[#07101f] transition-opacity duration-300 ${
      isHidden ? "opacity-0" : "opacity-100"
    }`}
    style={{
      animation: "slowBlink 1.7s ease-in-out infinite",
    }}
  />
</div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#07101f]/70 dark:text-white/70 md:text-xl">
            Diseñamos soluciones digitales simples, rápidas y útiles para
            empresas que necesitan ordenar procesos, vender mejor o automatizar
            tareas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/diagnostico"
              onClick={() => trackConversion("hero_cta_click")}
              className="rounded-full bg-[#07101f] px-8 py-4 text-base font-semibold text-white transition hover:bg-cyan-300 hover:text-[#07101f] dark:bg-cyan-300 dark:text-[#07101f] dark:hover:bg-white"
            >
              Solicitar diagnóstico
            </Link>

            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#07101f]/65 transition hover:text-cyan-400 dark:text-white/65 dark:hover:text-cyan-300"
            >
              Ver servicios
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
      <style>
  <style>
  {`
    @keyframes slowBlink {
      0%, 45% {
        opacity: 1;
      }
      46%, 100% {
        opacity: 0.2;
      }
    }
  `}
</style>
</style>
    </section>
  );
};

export default Hero;