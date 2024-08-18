<script setup lang='ts'>
</script>

<template>
  <div class="plate absolute top-1/2 left-1/2 plate rounded-full">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.plate {
  transform-style: preserve-3d;
  width: var(--plate_len);
  height: var(--plate_len);
  transform: translate(-50%, -50%) rotateX(105deg) rotate(var(--plateRotate));
  transition-property: all;
  transition-duration: var(--transition_duration);
}
</style>
