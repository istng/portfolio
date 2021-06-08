<template>
  <div class="home">
    <Header />
    <VideoCategory title="Cortos" :videos='shorts' videosWidth="33%"/>
    <VideoCategory title="YouTube" :videos='youtubes' videosWidth="50%"/>
    <Bio />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '@/components/Header.vue';
import VideoCategory from '@/components/VideoCategory.vue';
import Bio from '@/components/Bio.vue';
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
    Bio,
    Footer,
  },
  setup() {
    const shorts = ref([
      {thumbnail: nacherrestre, urlId: "-K-z-N3I4uI", title: "Nacherrestre",
      credits: {
        directors: ["Gabriela Velazquez", "Iván Guralnik"], 
        writers: ["Gabriela Velazquez", "Iván Guralnik"], 
        cast: ["Ignacio Mariotti"], 
        others: ["Alan Lampert"]
        }
      }, 
      {thumbnail: deshielo, urlId: "Qv8q1ENfWBA", title: "Deshielo Acondicionado", 
      credits: {
        directors: ["Gabriela Velazquez", "Iván Guralnik"], 
        writers: ["Gabriela Velazquez", "Iván Guralnik"], 
        cast: ["Franco Frizzo"], 
        others: []
        }
      }, 
        {thumbnail: frutilla, urlId: "j4z3xv2l9_k", title: "Frutilla", 
        credits: {
          directors: ["Gabriela Velazquez"], 
          writers: ["Gabriela Velazquez"], 
          cast: ["Elvis X", "Aldana Y"], 
          others: ["David Xu Barco"]
          }
      }
    ]);
    const youtubes = ref([
      {thumbnail: nakatomi, urlId: "ve8gZ3UEMlU", title: "nakatomi drive", 
      credits: {
        scenes: "Die Hard, 1988",
        sound: "Future Shock, Herbie Hancock"
        }
      }, 
      {thumbnail: notshop, urlId: "rIZyQmS3L3w", title: "not in the shop", 
      credits: {
        scenes: "Star Trek: Deep Space 9, 1993",
        sound: "Dragon Ball Z OST, Prologue & Subtitle I"
        }
      }
    ]);
    return {
      shorts,
      youtubes,
    };
  }
});
</script>
