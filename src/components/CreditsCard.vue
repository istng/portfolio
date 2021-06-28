<template>
  <div class="back-container">
    <img class="back-thumbnail" :src='backThumbnail'>
    <div class="back-credits-container">
      <div class="back-credits">
        <div v-if="credits.type == 'short'">
          <div class="credits-section">
            <div class="credits-line" v-if="credits.writers.length > 1">
              <strong>Realizado por:</strong> {{ credits.directors.join(', ') }}
            </div>
            <template v-else>
              <div class="credits-line">
                <strong>Guión original:</strong> {{ credits.writers.join(', ') }}
              </div>
              <div class="credits-line">
                <strong>Realizado por:</strong> {{ credits.directors.join(', ') }}
              </div>
            </template>
          </div>
          <div class="credits-section">
            <div class="credits-line">
              <strong>Cast:</strong> {{ credits.cast.join(', ') }}
            </div>
            <div class="credits-line" v-for="other in credits.others" :key="other[1]">
              <strong>{{ other[0] }}:</strong> {{ other[1].join(', ') }}
            </div>
          </div>
          <div class="credits-section" v-if="credits.awards.length > 0">
            <div class="credits-line">
              <strong>Premios o menciones:</strong> {{ credits.awards.join(', ') }}
            </div>
          </div>
        </div>
        <div v-if="credits.type == 'youtube'">
          <strong>Idea y edición:</strong> {{ credits.creators.join(', ') }} <br>
          <br>
          <strong>Escenas:</strong> {{ credits.scenes.join(', ') }} <br>
          <br>
          <strong>Música:</strong> {{ credits.sounds.join(', ') }} <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreditsCard',
  components: {
  },
  props: {
    credits: Object,
    backThumbnail: String,
  },
});
</script>

<style type="text/css">
.back-container {
  position: relative;
  height: 100%;
  color: black;
}
.back-container:hover {
  cursor: pointer;
}
.back-thumbnail {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.back-credits-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}
.back-credits {
  color: white;
  padding: 5%;
}
.credits-section:not(:last-child) {
  margin-bottom: 1rem;
}
@media (max-width: 768px) {
  .back-credits {
    font-size: 0.9rem;
  }
.credits-section:not(:last-child) {
  margin-bottom: 0.8rem;
}
}
</style>