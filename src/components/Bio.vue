<template>
  <div>
    <h4 class="bio-title">Bio</h4>
    <p class="bio-body">Acá va la bio, y en inglés</p>
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
  text-align: center;
}
</style>