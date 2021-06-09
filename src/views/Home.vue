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
        type: "short",
        directors: ["Iván Guralnik", "Gabriela Velazquez"], 
        writers: ["Gabriela Velazquez", "Iván Guralnik"], 
        editors: ["Iván Guralnik", "Gabriela Velazquez"], 
        cast: ["Ignacio Mariotti"], 
        others: [["Dirección Artística", ["Alan Lampert"]]],
        awards: []
        }
      }, 
      {thumbnail: deshielo, urlId: "Qv8q1ENfWBA", title: "Deshielo Acondicionado", 
      credits: {
        type: "short",
        directors: ["Iván Guralnik", "Gabriela Velazquez"], 
        writers: ["Iván Guralnik", "Gabriela Velazquez"], 
        editors: ["Iván Guralnik", "Gabriela Velazquez"], 
        cast: ["Franco Frizzo"], 
        others: [],
        awards: ["Cuarto lugar en..."]
        }
      }, 
        {thumbnail: frutilla, urlId: "j4z3xv2l9_k", title: "Frutilla", 
        credits: {
          type: "short",
          directors: ["Gabriela Velazquez", "Iván Guralnik"], 
          writers: ["Gabriela Velazquez"], 
          editors: ["Iván Guralnik", "Gabriela Velazquez"], 
          cast: ["Elvis X", "Aldana Y"], 
          others: [["Productor", ["David Xu Barco"]]],
          awards: ["Aprobado como trabajo para ingreso a..."]
          }
      }
    ]);
    const youtubes = ref([
      {thumbnail: nakatomi, urlId: "ve8gZ3UEMlU", title: "nakatomi drive", 
      credits: {
        type: "youtube",
        creators: ["Iván Guralnik"], 
        scenes: ["Die Hard, 1988"],
        sounds: ["Future Shock, Herbie Hancock"]
        }
      }, 
      {thumbnail: notshop, urlId: "rIZyQmS3L3w", title: "not in the shop", 
      credits: {
        type: "youtube",
        creators: ["Iván Guralnik"], 
        scenes: ["Star Trek: Deep Space 9, 1993"],
        sounds: ["Dragon Ball Z OST, Prologue & Subtitle I"]
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
