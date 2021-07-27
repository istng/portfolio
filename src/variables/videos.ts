import { ref } from 'vue';
/*set your video variables here*/
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

export const publishedShorts = ref([
  {thumbnail: deshielo, blurredThumbnail: deshieloblur, urlId: "k92daVzN_8Q", title: "Deshielo Acondicionado", 
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
export const unpublishedShorts = ref([
  {thumbnail: nacherrestre, blurredThumbnail: nacherrestreblur, title: "Nacherrestre (Título Provisional)",
  credits: {
    type: "short",
    directors: ["Iván Guralnik", "Gabriela Velazquez"], 
    writers: ["Gabriela Velazquez", "Iván Guralnik"], 
    editors: ["Iván Guralnik", "Gabriela Velazquez"], 
    cast: ["Ignacio Mariotti"], 
    others: [["Dirección Artística", ["Alan Lampert"]]],
    awards: []
    },
    info: {sinopsis: "Una noche solitaria, un jóven presencia lo que podrían ser señales extraterrestres en su casa.", information: "Corto realizado de noche, principalmente con luz artifical diegética, rodado en una sesión."},
  }, 
  {thumbnail: galeria, blurredThumbnail: galeriablur, title: "Galeria Boulevard (Título Provisional)", 
  credits: {
    type: "short",
    directors: ["Iván Guralnik", "Gabriela Velazquez"], 
    writers: ["Iván Guralnik", "Gabriela Velazquez"], 
    editors: ["Iván Guralnik", "Gabriela Velazquez"], 
    cast: ["Aldana Casarrubia", "Patricio Sabogal"], 
    others: [["Diseño de Sonido", ["Aldana Casarrubia"]]],
    awards: []
    },
    info: {sinopsis: "Una jóven recorre una galeria mientras espera encontrarse con su cita.", information: "Filmado en distintas galerias del barrio de Flores, CABA."},
  }, 
    {thumbnail: frutilla, blurredThumbnail: frutillablur, title: "Frutilla", 
    credits: {
      type: "short",
      directors: ["Gabriela Velazquez", "Iván Guralnik"], 
      writers: ["Gabriela Velazquez"], 
      editors: ["Iván Guralnik", "Gabriela Velazquez"], 
      cast: ["Aldana Casarrubia", "Elvis Alvarado"], 
      others: [["Productor", ["David Xu Barco"]]],
      awards: ["Aprobado para el ingreso a la ESCAC, Barcelona."]
      },
      info: {sinopsis: "Una fuerte discusión entre una pareja los lleva a reflexionar para sí mismos los lindos momentos que vivierons juntos.", information: "Escrito, rodado y editado en 24 horas como trabajo para el ingreso a la ESCAC, Barcelona."},
  }
]);
export const youtubes = ref([
  {thumbnail: nakatomi, blurredThumbnail: nakatomiblur, urlId: "ve8gZ3UEMlU", title: "nakatomi drive", 
  credits: {
    type: "youtube",
    creators: ["Iván Guralnik"], 
    scenes: ["Die Hard, 1988"],
    sounds: ["Autodrive, Herbie Hancock"]
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
    sounds: ["Prologue & Subtitle I, Dragon Ball Z OST"]
    }
  }
]);