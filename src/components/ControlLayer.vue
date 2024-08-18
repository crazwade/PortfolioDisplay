<script setup lang='ts'>
import { useDataStore } from '../stores/data';

const store = useDataStore();
</script>

<template>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
    <div class="controlUI flex flex-row w-full h-full">
      <div
        class="control w-[50vw] bg-gray-300 opacity-10"
        :class="[store.isRolling ? 'cursor-not-allowed' : 'cursor-w-resize']"
        @click="store.rotatePlate('right')"
      />
      <div @click="store.gotoPJ" class="w-full cursor-pointer" />
      <div
        class="control w-[50vw] bg-gray-300 opacity-10"
        :class="[store.isRolling ? 'cursor-not-allowed' : 'cursor-e-resize']"
        @click="store.rotatePlate('left')"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
