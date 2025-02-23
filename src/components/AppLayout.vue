<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
});
</script>

// ====TEMPLATE====================

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
      <img src="@assets/img/bg-1.jpg" alt="" />
      <slot></slot>
    </div>
  </div>
</template>

// ====STYLES====================
<style lang="scss" scoped>
@import "@assets/styles/main";
// -----------------------------

.root {
  display: flex;
  background-color: $bgColor;
  height: 100vh;

  // background-image: url("@assets/img/bg-1.jpg");
}

.img {
  width: 55%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.main {
  position: relative;
  width: 45%;
  padding: 32px 40px;
}

.btn {
  position: absolute;
  top: 32px;
  right: 40px;
  background-color: $accent;
  border-color: $accent;
  color: $text;
  font-size: 16px;
  font-family: "Exo 2", serif;
  letter-spacing: 0.5px;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: darken($accent, 15%);
    border-color: darken($accent, 10%);
  }
}
</style>
