<template>
  <div>
    <h4 class="bio-title">Bio</h4>
    <div class="bio-body-container">
      <p class="bio-body" lang="es"> {{ text.spanish }} </p>
      <p class="bio-body" lang="en"> {{ text.english }} </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Bio',
  components: {
  },
  props: {
    text: Object,
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