import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  ssr: false,
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
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
});
