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
.unpublished-card-container {
  background-color: black;
  opacity: 0.75;
  padding: 100px;
  padding-top: 78px;
  border-radius: 10px;
}
.coming-soon-text {
  font-size: xx-large;
  text-shadow: 1px 1px black;
  text-align: center;
  padding-bottom: 20px;
}
.synopsis-text {
  padding-bottom: 2px;
}
.synopsis-text,
.information-text {
  font-size: x-large;
  text-shadow: 1px 1px black;
}
@media (max-width: 500px) {
  .unpublished-card-container {
    padding: 25px;
  }
}
</style>
