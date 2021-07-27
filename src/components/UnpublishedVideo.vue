<template>
  <div>
    <div class="unpublished-video-container">
      <div>
        <FlipCard>
          <template v-slot:front>
            <span>
              <div class="video-thumbnail-container">
                <img class='video-thumbnail' :src='videoData.thumbnail'>
                <div class="coming-soon-text">
                  {{ comingSoonText }}
                </div>
              </div>
            </span>
          </template>
          <template v-slot:back>
            <span>
              <CreditsCard :credits='videoData.credits' :backThumbnail='videoData.blurredThumbnail' />
            </span>
          </template>
        </FlipCard>
        <h3 class="video-title">{{ videoData.title }}</h3>
      </div>
      <div class="video-info">
        <div class="sinopsis">
          {{ videoData.info.sinopsis }}
        </div>
        <div class="information">
          {{ videoData.info.information }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FlipCard from '@/components/FlipCard.vue';
import CreditsCard from '@/components/CreditsCard.vue';

export default defineComponent({
  name: 'Video',
  components: {
    FlipCard,
    CreditsCard,
  },
  props: {
    videoData: Object,
    comingSoonText: String,
  },
  setup(props) {
    const youtubeUrl = ref('https://www.youtube.com/embed/');
    const show = ref(false);

    const openVideo = () => {
      show.value = ! show.value;
    };

    return {
      youtubeUrl,
      show,
      openVideo,
    };
  }
});
</script>

<style type="text/css">
.video-info {
  font-size: 0.6em;
  padding-bottom: 1.2em;
}

.unpublished-video-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.video-thumbnail {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  border-radius: 25px;
}
.video-title {
  color: #e9a44d;
  text-align: center;
  font-weight: normal;
  margin-bottom: 0.4em;
}

.video-thumbnail-container {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  position: relative;
}
.coming-soon-text {
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  opacity: 0;
  background-color: #4B4B4B;
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;
}
@media (min-width: 770px) {
  .coming-soon-text:hover {
    opacity: 0.6;
  }
}

</style>