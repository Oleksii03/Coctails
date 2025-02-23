// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import vueDevTools from "vite-plugin-vue-devtools";

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/Coctails",

//   plugins: [vue(), vueDevTools()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//       "@assets": path.resolve(__dirname, "src/assets"),
//       "@styles": path.resolve(__dirname, "src/styles"),
//       "@js": path.resolve(__dirname, "src/js"),
//     },
//   },
// });

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import * as path from "path"; // Додано імпорт

// https://vite.dev/config/
export default defineConfig({
  base: "/Coctails",

  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@js": path.resolve(__dirname, "src/js"),
    },
  },
});
