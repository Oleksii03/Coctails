import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Coctail from "@/pages/Coctail.vue";
import CoctailRandom from "@/pages/CoctailRandom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/coctails/:rid",
      name: "coctail",
      component: Coctail,
    },
    {
      path: "/random",
      name: "coctailRandom",
      component: CoctailRandom,
    },
  ],
});

export default router;
