<template>
  <div>
    <img id='video-thumbnail' :src='videoData.thumbnail' @click="openVideo">
    <teleport to="body">
      <div v-if="show" class="modal">
        <div>
          <iframe :src='youtubeUrl + videoData.urlId' @onClick='other'></iframe>
          <button @click="show = false">
            Close
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
    };
  }
});
</script>

<style type="text/css">
  #video-thumbnail {
    width: 300px;
  }

  #black-box {
    height: 200px;
    width: 200px;
    background-color: black;
  }
</style>