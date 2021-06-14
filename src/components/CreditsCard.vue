<template>
  <div class="back-container">
    <img class="back-thumbnail" :src='backflip'>
    <div class="back-credits">
      <div v-if="credits.type == 'short'">
        <div v-if="credits.writers.length > 1">
          <br>
          <strong>Realizado por:</strong> {{ credits.directors.join(', ') }} <br>
        </div>
        <div v-else>
          <strong>Guión original:</strong> {{ credits.writers.join(', ') }} <br>
          <strong>Realizado por:</strong> {{ credits.directors.join(', ') }} <br>
        </div>
        <br>
        <strong>Cast:</strong> {{ credits.cast.join(', ') }} <br>
        <div v-for="other in credits.others" :key="other[1]">
          <strong>{{ other[0] }}:</strong> {{ other[1].join(', ') }} <br>
        </div>
        <br>
        <strong v-if="credits.awards.join(', ') != ''">Premios o menciones:</strong> {{ credits.awards.join(', ') }} <br>
      </div>
      <div v-if="credits.type == 'youtube'">
        <br>
        <strong>Idea y edición:</strong> {{ credits.creators.join(', ') }} <br>
        <br>
        <strong>Escenas:</strong> {{ credits.scenes.join(', ') }} <br>
        <br>
        <strong>Música:</strong> {{ credits.sounds.join(', ') }} <br>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import backflip from '@/assets/back-flip.png';

export default defineComponent({
  name: 'CreditsCard',
  components: {
  },
  props: {
    credits: Object,
  },
  setup(props) {
    return {
      backflip,
    };
  }
});
</script>

<style type="text/css">
.back-thumbnail {
  width: 100%;
  border-radius: 25px;
  opacity: 15%;
  position: absolute;
  top: 0;
  left: 0;
}
.back-credits {
  position: absolute;
  left: 5%;
  color: white;
}
.back-container {
  position: relative;
  color: black;
}
</style>