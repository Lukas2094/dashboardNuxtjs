import PerfectScrollbar from "vue3-perfect-scrollbar";
import VueTablerIcons from "vue-tabler-icons";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PerfectScrollbar);
    nuxtApp.vueApp.use(VueTablerIcons);
});
