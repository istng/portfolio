<template>
  <div>
    <h4 class="bio-title">Bio</h4>
    <div class="bio-body-container">
      <p class="bio-body bio-body-spanish">Apasionado por el cine desde muy chico, alquilando cosntantemente VHS y siempre yendo al cine, terminé encontrando una admiración por las ciencias y la tecnología en series como Cosmos o Viaje a las Estrellas. Así, estudiando Ciencias de la Computación (Exactas, UBA), pero nunca dejando de lado el ver películas y cine, como tocar música con amigos. Llegando al fin de la carrera en Computación, encontré que mi verdadera pasión siempre estuvo en el cine y los medios audiovisuales.</p>
      <p class="bio-body bio-body-english">Passionate for films since a kid, constantly renting VHS and always going to the movies, I ended up admiring the ciencies and technology in series like Cosmos or Star Trek. Thus, I studied Computer Science (Exacts Faculty, UBA), but never setting aside watching movies, as playing music with friends. Coming to the end of the Computer Science career, I found that my true passion always was on cinema and audiovisual mediums.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Bio',
  components: {
  },
});
</script>

<style type="text/css">
.bio-title {
  color: white;
  text-align: center;
}
.bio-body {
  color: white;
  text-align: left;
}
.bio-body-container {
  display: flex;
}
@media (max-width: 768px) {
  .bio-body-container {
    flex-direction: column;
  }
}
</style>