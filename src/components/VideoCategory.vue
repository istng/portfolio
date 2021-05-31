<template>
  <div>
    <h3>{{ title }}</h3>
    <div class="video-list-container">
    <ul class="video-list">
      <li class="video-item-list" v-for="video in videos" :key="video.urlId">
        <Video :videoData='video' />
      </li>
    </ul>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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

<style type="text/css">
.video-list-container {
  /*DOUBT: if this is moved to video-list, images loose consistent size*/
  display: flex;
  justify-content: center;
}
.video-list {
  /*remove list bullet and left space*/
  list-style-type: none;
  padding-left: 0;
  /*make list to behave as columns*/
  -webkit-columns: v-bind(videos.length) 200px;
  -moz-columns: v-bind(videos.length) 200px;
  columns: v-bind(videos.length) 200px;
  /*make space between title and video list smaller*/
  margin-top: 0;
}
</style>