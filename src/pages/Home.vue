<script setup>
import { ref } from "vue";
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);
const ingredient = ref(null);
</script>

<template>
  <AppLayout imgUrl="src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>

        <div class="select-wrapper">
          <el-select
            v-model="ingredient"
            placeholder="Choose main ingredient"
            size="large"
            class="select"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
              class="option"
            />
          </el-select>
        </div>

        <p class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </p>

        <img class="img" src="@assets/img/coctails.png" alt="Coctails" />
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "@assets/styles/main";
// ---------------------------------
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info {
  padding: 80px 0;
  text-align: center;
}

.select-wrapper {
  margin-top: 42px;
}
.select {
  width: 220px;
}

.text {
  max-width: 516px;
  margin: 0 auto;
  padding-top: 50px;
  line-height: 36px;
  letter-spacing: 0.1em;
  color: $textMuted;
}

.img {
  margin: 60px auto 0;
}
</style>
