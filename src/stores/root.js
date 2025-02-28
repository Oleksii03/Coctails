import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENTS_URL, COCTAILS_BY_INGR_URL } from "@/constans";

export const useRootStore = defineStore("root", {
  state: () => ({
    ingredients: [],
    coctails: [],
  }),

  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL);
      this.ingredients = data?.data?.drinks;
    },

    async getCoctails(ingredient) {
      const data = await axios.get(`${COCTAILS_BY_INGR_URL}${ingredient}`);
      this.coctails = data?.data?.drinks;
    },
  },
});
