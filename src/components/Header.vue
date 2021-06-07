<template>
  <div class="header-container">
    <div>
      <h2 class="name-title">Iván Guralnik</h2>
      <p class="pompadur"> cine, ciencia, jazz, programación </p>
    </div>
    <h3 class="contact">
      <a class="contact-link" href="https://www.youtube.com/channel/UC0paZQh-P3ruttlq26UmNig" target=”_blank”>igk</a> <a class="contact-link" href="https://www.instagram.com/ivangk.gk/" target=”_blank”>@ivangk.gk</a> ivanstng@gmail.com
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: {
  },
});
</script>

<style type="text/css">
.name-title, .contact {
  flex-grow: 1;
  min-width: 25%;
}
.name-title {
  color: white;
  text-align: left;
  margin-bottom: 0;
}
.pompadur {
  margin-top: 0.4rem; 
}
.contact {
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
}
</style>