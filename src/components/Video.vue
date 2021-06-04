<template>
  <div>
    <div class="video-thumbnail-container" @click="openVideo">
      <img class='video-thumbnail' :src='videoData.thumbnail'>
      <img class="play-button" :src='playbutton'>
    </div>
      <h4 class="video-title">{{ videoData.title }}</h4>
    <teleport to="body">
      <div class="modal" v-if="show" @click="show = false">
        <div>
          <iframe class="video-window" :src='youtubeUrl + videoData.urlId + "?autoplay=1"' @onClick='other'></iframe>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import playbutton from '@/assets/play-button.png';

export default defineComponent({
  name: 'Video',
  components: {
  },
  props: {
    videoData: Object,
  },
  setup(props) {
    const youtubeUrl = ref('https://www.youtube.com/embed/');
    const show = ref(false);

    const openVideo = () => {
      show.value = ! show.value;
    }

    return {
      youtubeUrl,
      show,
      openVideo,
      playbutton,
    };
  }
});
</script>

<style type="text/css">
.video-thumbnail {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  border-radius: 25px;
}
.video-title {
  color: #e9a44d;
  text-align: center;
}

.video-thumbnail-container {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  position: relative;
}
.play-button {
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  width: 100%;
  border-radius: 25px;
  opacity: 0;
  background-color: #4B4B4B;
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;
}
.play-button:hover {
  opacity: 0.5;
  cursor: pointer;
}

.video-window{
   border: 0;
   height: 85%;
   position: absolute;
   width: 85%;
}
.modal {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal:hover {
  cursor: pointer;
}
</style>