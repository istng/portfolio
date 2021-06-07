<template>
  <div class="home">
    <Header />
    <VideoCategory title="Cortos" :videos='shorts' videosWidth="33%"/>
    <VideoCategory title="YouTube" :videos='youtubes' videosWidth="50%"/>
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
import nacherrestre from '@/assets/nacherrestre.png';
import deshielo from '@/assets/deshielo.png';
import frutilla from '@/assets/frutilla.png';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    VideoCategory,
    Footer,
  },
  setup() {
    const shorts = ref([{thumbnail: nacherrestre, urlId: "-K-z-N3I4uI", title: "Nacherrestre"}, {thumbnail: deshielo, urlId: "Qv8q1ENfWBA", title: "Deshielo Acondicionado"}, {thumbnail: frutilla, urlId: "j4z3xv2l9_k", title: "Frutilla"}]);
    const youtubes = ref([{thumbnail: nakatomi, urlId: "ve8gZ3UEMlU", title: "nakatomi drive"}, {thumbnail: notshop, urlId: "rIZyQmS3L3w", title: "not in the shop"}]);
    return {
      shorts,
      youtubes,
    };
  }
});
</script>
