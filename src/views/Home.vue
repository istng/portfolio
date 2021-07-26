<template>
  <div class="home">
    <Header />
    <VideoCategory title="Cortos Publicados" :videos='publishedShorts' videosWidth="33%"/>
    <VideoCategory title="Cortos Inéditos" :videos='unpublishedShorts' videosWidth="33%"/>
    <VideoCategory title="YouTube" :videos='youtubes' videosWidth="33%"/>
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
import obscured from '@/assets/obscured-by-sights.png';
import notshop from '@/assets/not-in-the-shop.png';
import nacherrestre from '@/assets/nacherrestre.png';
import deshielo from '@/assets/deshielo.png';
import galeria from '@/assets/galeria-cita.png';
import frutilla from '@/assets/frutilla.png';
import nakatomiblur from '@/assets/nakatomi-drive-blur.png';
import obscuredblur from '@/assets/obscured-by-sights-blur.png';
import notshopblur from '@/assets/not-in-the-shop-blur.png';
import nacherrestreblur from '@/assets/nacherrestre-blur.png';
import deshieloblur from '@/assets/deshielo-blur.png';
import galeriablur from '@/assets/galeria-cita-blur.png';
import frutillablur from '@/assets/frutilla-blur.png';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    VideoCategory,
    Bio,
    Footer,
  },
  setup() {
    const publishedShorts = ref([
      {thumbnail: deshielo, blurredThumbnail: deshieloblur, urlId: "Qv8q1ENfWBA", title: "Deshielo Acondicionado", 
      credits: {
        type: "short",
        directors: ["Iván Guralnik", "Gabriela Velazquez"], 
        writers: ["Iván Guralnik", "Gabriela Velazquez"], 
        editors: ["Iván Guralnik", "Gabriela Velazquez"], 
        cast: ["Franco Frizzo"], 
        others: [],
        awards: ["Cuarto lugar en la Octava Edición del Festival Internacional de Cine sobre el Trabajo."]
        }
      }
    ]);
    const unpublishedShorts = ref([
      {thumbnail: nacherrestre, blurredThumbnail: nacherrestreblur, urlId: "-K-z-N3I4uI", title: "Nacherrestre (Título Provisional)",
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
      {thumbnail: galeria, blurredThumbnail: galeriablur, urlId: "Qv8q1ENfWBA", title: "Galeria Boulevard (Título Provisional)", 
      credits: {
        type: "short",
        directors: ["Iván Guralnik", "Gabriela Velazquez"], 
        writers: ["Iván Guralnik", "Gabriela Velazquez"], 
        editors: ["Iván Guralnik", "Gabriela Velazquez"], 
        cast: ["Aldana Casarrubia", "Patricio Sabogal"], 
        others: [["Diseño de Sonido", ["Aldana Casarrubia"]]],
        awards: []
        }
      }, 
        {thumbnail: frutilla, blurredThumbnail: frutillablur, urlId: "j4z3xv2l9_k", title: "Frutilla", 
        credits: {
          type: "short",
          directors: ["Gabriela Velazquez", "Iván Guralnik"], 
          writers: ["Gabriela Velazquez"], 
          editors: ["Iván Guralnik", "Gabriela Velazquez"], 
          cast: ["Aldana Casarrubia", "Elvis Alvarado"], 
          others: [["Productor", ["David Xu Barco"]]],
          awards: ["Aprobado para el ingreso a la ESCAC, Barcelona."]
          }
      }
    ]);
    const youtubes = ref([
      {thumbnail: nakatomi, blurredThumbnail: nakatomiblur, urlId: "ve8gZ3UEMlU", title: "nakatomi drive", 
      credits: {
        type: "youtube",
        creators: ["Iván Guralnik"], 
        scenes: ["Die Hard, 1988"],
        sounds: ["Future Shock, Herbie Hancock"]
        }
      }, 
      {thumbnail: obscured, blurredThumbnail: obscuredblur, urlId: "NUVFjVWOpos", title: "obscured by sights", 
      credits: {
        type: "youtube",
        creators: ["Iván Guralnik"], 
        scenes: ["The Sopranos, 1999"],
        sounds: ["Obscured By Clouds, Pink Floyd"]
        }
      },
      {thumbnail: notshop, blurredThumbnail: notshopblur, urlId: "rIZyQmS3L3w", title: "not in the shop", 
      credits: {
        type: "youtube",
        creators: ["Iván Guralnik"], 
        scenes: ["Star Trek: Deep Space 9, 1993"],
        sounds: ["Dragon Ball Z OST, Prologue & Subtitle I"]
        }
      }
    ]);
    return {
      publishedShorts,
      unpublishedShorts,
      youtubes,
    };
  }
});
</script>
