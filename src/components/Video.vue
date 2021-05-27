<template>
  <div>
    <img id='video-thumbnail' :src='videoData.thumbnail'>
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

    return {
      youtubeUrl,
    };
  }
});
</script>

<style type="text/css">
  #video-thumbnail {
    width: 300px;
  }
</style>