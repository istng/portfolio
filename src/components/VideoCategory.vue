<template>
  <div>
    <h2 class="category-title">{{ title }}</h2>
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
    Video,
  },
  props: {
    title: String,
    videos: Array,
    videosWidth: String,
    categoryType: String,
    comingSoonText: String,
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
  /*make space between title and video list smaller*/
  margin-top: 0;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}
.video-item-list {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  min-width: 20rem;
  max-width: v-bind(videosWidth);
  box-sizing: border-box;
}

.category-title {
  color: white;
  text-align: left;
  margin-left: 2rem;
}
@media (width: 411px) {
  .category-title {
    margin-left: 3rem;
  }
}
@media (width: 540px) and (height: 720px) {
  .category-title {
    margin-left: 7rem;
  }
}
</style>