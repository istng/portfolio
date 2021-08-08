<template>
  <div>
    <FlipCard>
      <template v-slot:front>
        <span>
          <div class="video-thumbnail-container" @click="openVideo">
            <img class="video-thumbnail" :src="videoData.thumbnail" />
            <img class="play-button" :src="playbutton" />
          </div>
        </span>
      </template>
      <template v-slot:back>
        <span>
          <CreditsCard
            :credits="videoData.credits"
            :backThumbnail="videoData.blurredThumbnail"
          />
        </span>
      </template>
    </FlipCard>
    <h3 class="video-title">{{ videoData.title }}</h3>

    <teleport to="body">
      <div class="modal" v-if="show" @click="show = false">
        <div>
          <img class="close-button" :src="closebutton" />
        </div>
        <div>
          <iframe
            class="video-window"
            :src="youtubeUrl + videoData.urlId + '?autoplay=1'"
          ></iframe>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FlipCard from "@/components/FlipCard.vue";
import CreditsCard from "@/components/CreditsCard.vue";
import playbutton from "@/assets/play-button.png";
import closebutton from "@/assets/close-button.png";

export default defineComponent({
  name: "Video",
  components: {
    FlipCard,
    CreditsCard,
  },
  props: {
    videoData: Object,
  },
  setup(props) {
    const youtubeUrl = ref("https://www.youtube.com/embed/");
    const show = ref(false);

    const openVideo = () => {
      show.value = !show.value;
    };

    return {
      youtubeUrl,
      show,
      openVideo,
      playbutton,
      closebutton,
    };
  },
});
</script>

<style type="text/css">
.video-thumbnail {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  border-radius: 25px;
}
.video-title {
  color: #e9a44d;
  text-align: center;
  font-weight: normal;
  margin-top: 0.4em;
}

.video-thumbnail-container {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  position: relative;
}
.play-button {
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  width: 100%;
  border-radius: 25px;
  opacity: 0;
  background-color: #4b4b4b;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
}
@media (min-width: 770px) {
  .play-button:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  .close-button {
    display: none;
    visibility: hidden;
  }
}

.close-button {
  width: 8%;
  z-index: 4;
  position: absolute;
  top: 30%;
  left: 3.5%;
  filter: contrast(52%);
}
.video-window {
  border: 0;
  height: 85%;
  width: 85%;
  position: absolute;
}
@media (max-width: 768px) {
  .video-window {
    border: 0;
    height: 35%;
    width: 85%;
    position: absolute;
  }
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal:hover {
  cursor: pointer;
}
</style>
