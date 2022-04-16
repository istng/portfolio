<template>
  <div class="unpublished-card-container">
    <div class="coming-soon-text">
    {{ videoInfo.comingSoonText }}
    </div>
    <div class="info-container">
      <div class="synopsis-text">
        {{ videoInfo.synopsis }}
      </div>
      <div class="information-text">
        {{ videoInfo.information }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UnpublishedVideo",
  components: {
  },
  props: {
    videoInfo: Object,
  },
});
</script>

<style type="text/css">
.coming-soon-text {
  font-size: xx-large;
  text-shadow: 1px 1px black;
}
.synopsis-text,
.information-text {
  font-size: x-large;
  text-shadow: 1px 1px black;
}
</style>
