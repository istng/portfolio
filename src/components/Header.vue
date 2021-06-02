<template>
  <div class="header-container">
    <h2 class="name-title">Iván Guralnik</h2>
    <h3 class="contact">gmail ig yt</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
}
.contact {
  color: #c08e4f;
  text-align: right;
}
.header-container {
  display: flex;
}
</style>