import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";
import prerender from "@prerenderer/rollup-plugin";
import Renderer from "@prerenderer/renderer-puppeteer";

const routes = [
  "/",
  "/servicios/automatizacion-procesos",
  "/servicios/agentes-ia-operaciones",
  "/servicios/integraciones-empresariales",
  "/servicios/software-a-medida",
  "/nosotros",
  "/casos",
  "/diagnostico",
  "/contacto",
  "/politica-privacidad",
  "/seguridad",
];

export default defineConfig(({ mode }) => {
  const isVercel = process.env.VERCEL === "1";
  const shouldPrerender = mode !== "development" && !isVercel; // 👈 NO prerender en Vercel

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      Sitemap({
        hostname: "https://falcodevs.pro",
        dynamicRoutes: routes,
      }),
      shouldPrerender &&
        prerender({
          routes,
          renderer: new Renderer({
            renderAfterTime: 1000,
          }),
          staticDir: path.join(__dirname, "dist"),
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
