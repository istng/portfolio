<template>
  <div>
    <h3>{{ title }}</h3>
    <ul id="video-list">
      <li v-for="video in videos" :key="video">
        <Video :videoData='video' />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Video from '@/components/Video.vue';

export default defineComponent({
  name: 'VideoCategory',
  components: {
    Video
  },
  props: {
    title: String,
    videos: Array,
  },
});
</script>