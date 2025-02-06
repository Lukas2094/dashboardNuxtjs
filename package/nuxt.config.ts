import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title:
        "Dashboard Nuxt.js 3",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [vuetify()],
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
});
