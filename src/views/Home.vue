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
import nakatomi from '@/assets/nakatomi-drive.png';
import notshop from '@/assets/not-in-the-shop.png';
import wip from '@/assets/wip.png';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    VideoCategory,
    Footer,
  },
  setup() {
    const shorts = ref([{thumbnail: wip, urlId: "-K-z-N3I4uI", title: "Nacherrestre"}, {thumbnail: wip, urlId: "Qv8q1ENfWBA", title: "Deshielo Acondicionado"}, {thumbnail: wip, urlId: "j4z3xv2l9_k", title: "Frutilla"}]);
    const youtubes = ref([{thumbnail: nakatomi, urlId: "ve8gZ3UEMlU", title: "nakatomi drive"}, {thumbnail: notshop, urlId: "rIZyQmS3L3w", title: "not in the shop"}]);
    return {
      shorts,
      youtubes,
    };
  }
});
</script>
