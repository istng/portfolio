<template>
  <div class="home">
    <Header />
    <VideoCategory title="Cortos Publicados" :videos='publishedShorts' videosWidth="33%" />
    <VideoCategory title="Cortos Inéditos" :videos='unpublishedShorts' videosWidth="33%" />
    <VideoCategory title="Ediciones" :videos='edits' videosWidth="33%" />
    <Bio :text='bioText' />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '@/components/Header.vue';
import VideoCategory from '@/components/VideoCategory.vue';
import Bio from '@/components/Bio.vue';
import Footer from '@/components/Footer.vue';
/*custom variables to import*/
import { publishedShorts, unpublishedShorts, edits } from '@/variables/videos.ts';
import { bioText } from '@/variables/bioText.ts';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    VideoCategory,
    Bio,
    Footer,
  },
  setup() {
    return {
      publishedShorts,
      unpublishedShorts,
      edits,
      bioText,
    };
  }
});
</script>
