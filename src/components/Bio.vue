<template>
  <div>
    <h4 class="bio-title">Bio</h4>
    <div class="bio-body-container">
      <p class="bio-body" lang="es">Apasionado por ver películas desde muy chico, el cine y el videoclub eran mi segunda casa. Terminé encontrando una admiración por las ciencias y la tecnología en series como Cosmos y Viaje a las Estrellas. Así, estudié Ciencias de la Computación (Exactas, UBA), pero nunca dejé de lado mi amor por el septimo arte. Llegando al fin de la carrera en Computación, encontré que mi verdadera pasión siempre estuvo en el cine y los medios audiovisuales.</p>
      <p class="bio-body" lang="en">Passionate for films since a kid, the movies and video stores were my second home. I ended up admiring the sciences and technology in series like Cosmos or Star Trek. Thus, I studied Computer Science (Exacts Faculty, UBA), but I never set aside my love for the seventh art. Coming to the end of the Computer Science career, I found that my true passion always was on cinema and audiovisual mediums.</p>
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
.bio-body-container {
  display: flex;
}
.bio-body {
  color: white;
  text-align: left;
  flex-basis: 50%;
  hyphens: auto;
}
.bio-body:not(:first-child) {
  margin-left: 0.75rem;
}
.bio-body:not(:last-child) {
  margin-right: 0.75rem;
}
@media (max-width: 768px) {
  .bio-body-container {
    flex-direction: column;
  }
  .bio-body:not(:first-child) {
    margin-left: 0;
  }
  .bio-body:not(:last-child) {
    margin-right: 0;
  }
}
</style>