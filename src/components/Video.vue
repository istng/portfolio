<template>
  <div>
    <iframe :src="youtubeUrl + urlId"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Video',
  components: {
  },
  props: {
    urlId: String,
  },
  setup(props) {
    const youtubeUrl = ref('https://www.youtube.com/embed/');

    return {
      youtubeUrl,
    };
  }
});
</script>