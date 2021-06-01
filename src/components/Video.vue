<template>
  <div>
    <img class='video-thumbnail' :src='videoData.thumbnail' @click="openVideo">
    <teleport to="body">
      <div class="modal" v-if="show" @click="show = false">
        <div>
          <iframe class="video-window" :src='youtubeUrl + videoData.urlId + "?autoplay=1"' @onClick='other'>
        </iframe>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Video',
  components: {
  },
  props: {
    videoData: Object,
  },
  setup(props) {
    const youtubeUrl = ref('https://www.youtube.com/embed/');
    const show = ref(false);

    const openVideo = () => {
      show.value = ! show.value;
    }

    return {
      youtubeUrl,
      show,
      openVideo,
    };
  }
});
</script>

<style type="text/css">
.video-thumbnail {
  width: 100%;
}
.video-window{
   border: 0;
   height: 85%;
   position: absolute;
   width: 85%;
}
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>