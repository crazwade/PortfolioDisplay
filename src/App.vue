<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useDataStore } from './stores/data';
import { version } from '../package.json';

const store = useDataStore();

onMounted(() => {
  store.initPlanet();
});
</script>

<template>
  <RouterView />
  <div class="fixed bottom-0 right-0 text-white opacity-15">
    ver{{ version }}
  </div>
</template>

<style lang="scss">
:root {
  --transition_duration: 3000ms;
  --plate_len: 120vw;
  --planet_size: 40vw;
  --plateRotate: 90deg;
  --perspective: 120vh;
  --planetAngel: 0deg;
  --planetRotateAngel: 90deg;
  @media (min-width:480px){
    --plate_len: 105vw;
    --planet_size: 30vw;
  }
  @media (min-width:780px){
    --plate_len: 80vw;
    --planet_size: 22vw;
  }
  @media (min-width:1200px){
    --plate_len: 78vw;
    --planet_size: 23vw;
    --perspective: 150vh;
  }
}
</style>