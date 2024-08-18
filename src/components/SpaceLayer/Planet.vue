<script setup lang='ts'>
defineProps<{
  angel: string,
  rotateAngel: string,
  image: string,
  label: string,
  showLabel: boolean,
}>();
</script>

<template>
  <div
    class="planet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-repeat-x"
    :style="{
      '--planetAngel': angel,
      '--planetRotateAngel': rotateAngel,
    }"
  >
    <div
      class="bg absolute top-0 left-0 w-full h-full rounded-full bg-no-repeat bg-cover"
      :style="{ 'background-image': `url(${image})` }"
    />
    <div class="bg_shadow absolute top-0 left-0 w-full h-full rounded-full" />
    <transition name="fade">
      <div
        v-if="showLabel"
        class="text-white absolute -bottom-10 left-1/2 -translate-x-1/2 test"
      >
        {{ label }}
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.planet {
  width: var(--planet_size);
  height: var(--planet_size);
  transform:
    translateX(calc(var(--planet_size) / 2 * -1)) translateY(calc(var(--planet_size) / 2 * -1)) rotate(var(--planetAngel))
    translateX(calc(var(--plate_len) / 2)) rotateX(-90deg) rotateY(calc(var(--planetRotateAngel)))
    rotateX(-15deg) translateY(calc(var(--planet_size) / 3));
  transition-property: all;
  transition-duration: var(--transition_duration);
  .bg_shadow {
    -webkit-appearance: none;
    box-shadow: inset -25px -25px 50px #000e2f,
    inset 10px 10px 30px -10px #ffffffe8;
    -webkit-box-shadow: inset -25px -25px 50px #000e2f,
    inset 10px 10px 30px -10px #ffffffe8;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>