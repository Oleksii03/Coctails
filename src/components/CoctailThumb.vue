<script setup>
const props = defineProps({
  coctail: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="root">
    <div
      :style="`background-image: url(${coctail.strDrinkThumb})`"
      class="pic"
    ></div>
    <div class="name">{{ coctail.strDrink }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@assets/styles/main";
// ---/-imports--------------

.root {
  margin-top: 50px;

  .pic {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    aspect-ratio: 1/1;
    border-radius: 4px;
    overflow: hidden;
  }

  .name {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
    color: $textMuted;
  }
}
</style>
