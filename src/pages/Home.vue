<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";

const rootStore = useRootStore();

rootStore.getIngredients();
</script>

<template>
  <AppLayout imgUrl="src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>
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
</style>
