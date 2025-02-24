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
    <div class="img">
      <img :src="imgUrl" alt="Cocktail" />
    </div>

    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
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
  flex-direction: column;
  background-color: $bgColor;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.img {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  @media (max-width: 767px) {
    order: 2;
    max-height: 450px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 767px) {
      max-height: 450px;
    }
  }
}

.main {
  position: relative;
  // width: 45%;
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
