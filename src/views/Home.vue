<template>
  <div class="home">
    <Header />
    <VideoCategory title="Cortos Publicados" :videos='publishedShorts' videosWidth="33%" categoryType="published"/>
    <VideoCategory title="Cortos Inéditos" :videos='unpublishedShorts' videosWidth="33%" categoryType="unpublished"/>
    <VideoCategory title="YouTube" :videos='youtubes' videosWidth="33%" categoryType="published"/>
    <Bio :spanishText='spanishText' :englishText='englishText' />
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
import { publishedShorts } from '@/variables/videos.ts';
import { unpublishedShorts } from '@/variables/videos.ts';
import { youtubes } from '@/variables/videos.ts';
import { spanishText, englishText } from '@/variables/bioText.ts';

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
      youtubes,
      spanishText,
      englishText,
    };
  }
});
</script>
