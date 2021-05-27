<template>
  <div class="home">
    <Header />
    <VideoCategory title="Cortos" :videos='shorts'/>
    <VideoCategory title="YouTube" :videos='youtubes'/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '@/components/Header.vue';
import VideoCategory from '@/components/VideoCategory.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    VideoCategory,
    Footer,
  },
  setup() {
    const shorts = ref(["-K-z-N3I4uI","Qv8q1ENfWBA","j4z3xv2l9_k"]);
    const youtubes = ref(["ve8gZ3UEMlU","rIZyQmS3L3w"]);
    return {
      shorts,
      youtubes,
    };
  }
});
</script>
