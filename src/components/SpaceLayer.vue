<script setup lang='ts'>
import Planet from './SpaceLayer/Planet.vue';
import Plate from './SpaceLayer/Plate.vue';
import StarAnit from './SpaceLayer/StarAnti.vue';
import { useDataStore } from '../stores/data';
import space from '../assets/space.jpg';

const store = useDataStore();
</script>

<template>
  <div class="space relative w-full h-full bg-cover overflow-hidden" :style="{ backgroundImage: 'url(' + space + ')' }">
    <StarAnit />
    <Plate>
      <template v-for="(item, index) in store.getPlanets" :key="index">
        <Planet
          :angel="item.angel"
          :rotate-angel="item.rotateAngel"
          :image="item.image"
          :label="item.label"
          :showLabel="index === store.currentIndex"
        />
      </template>
    </Plate>
  </div>
</template>

<style lang="scss" scoped>
.space {
  perspective: var(--perspective);
}

</style>
