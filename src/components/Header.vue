<template>
    <div class="name-title-container">
      <h1 class="name-title">Iván Guralnik</h1>
    </div>
  <div class="header-container">
    <div>
      <p class="pompadur"> cine, jazz, programación </p>
    </div>
    <h3 class="contact">
      <a class="contact-link" href="https://www.youtube.com/channel/UC0paZQh-P3ruttlq26UmNig" target=”_blank”><font-awesome-icon :icon="['fab', 'youtube']"/></a> <a class="contact-link" href="https://www.instagram.com/ivangk.gk/" target=”_blank”><font-awesome-icon :icon="['fab', 'instagram']"/></a> <a href="mailto:ivanstng@gmail.com"><font-awesome-icon :icon="['far', 'envelope']"/></a>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faInstagram);
library.add(faYoutube);
library.add(faEnvelope);

export default defineComponent({
  name: 'Header',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const copy = async () => {
      await navigator.clipboard.writeText("ivanstng@gmail.com");
    };
    return {
      copy,
    };
  }
});
</script>

<style type="text/css">
.name-title {
  margin-top: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .name-title {
    margin-top: 1.9rem;
  }
}
.pompadur {
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  color: white;
}
.contact {
  margin-top: 0.6rem; 
  margin-bottom: 0.6rem; 
  color: #e9a44d;
  word-spacing: 0.8rem;
  text-align: right;
}
.contact-link {
  color: #e9a44d;
}
.header-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
a, a:hover, a:visited, a:active {
  color: inherit;
  text-decoration: none;
 }
</style>