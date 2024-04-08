import { createSSRApp } from "vue";
import App from "./App.vue";
import uviewPlus from "@/uni_modules/uview-plus";
import pinia from "@/stores";
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  app.use(pinia)
  return {
    app,
    // Pinia,
  };
}
