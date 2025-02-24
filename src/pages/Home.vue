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

.el-select-dropdown,
.el-popper,
.el-scrollbar,
.el-scrollbar__view {
  color: $bgColor !important;
  padding: 5px !important;
  background-color: $bgColor !important;
}
</style>
