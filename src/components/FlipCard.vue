<template>
  <div v-bind:class="flipped ? 'flip-container flipped': 'flip-container'">
    <div class="flipper">
      <div class="front">
        <slot class="front-card" name="front"></slot>
        <div class="frontFlipBtn" 
            v-on:click="flipped=true">
            <img class="flip-icon" :src="flipbutton">
        </div>
      </div>
      <div class="back" v-on:click="flipped=false">
        <slot class="back-card" name="back"></slot>
        <div class="backFlipBtn" 
            >
            <img class="flip-icon" :src="flipbutton" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import flipbutton from '@/assets/flip-button.png';

export default defineComponent({
  name: 'FlipCard',
  setup() {
    const flipped = ref(false)
    return {
      flipped,
      flipbutton,
    }
  }
});
</script>

<style type='text/css' scoped>
i.frontFlipBtn,
i.backFlipBtn {
    position:absolute; 
    right: 20px; 
    top: 20px;
    color:#FFFFFF;
}
i.backFlipBtn {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.flip-container {
  min-height: 120px;
}
.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
  grid-column: 1;
  grid-row: 1;
  height: 100%;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}

.backFlipBtn {
  position:absolute;
  top:10%;
  left:90%;
  z-index: 2;
  display: none;
  visibility: hidden;
}
.back-card {
  position:absolute;
  top:0;
  left:0;
}

.frontFlipBtn {
  position:absolute;
  top:3%;
  left:91%;
  z-index: 2;
}
.front-card {
  position:absolute;
  top:0;
  left:0;
}
.flip-icon {
  width: 67%;
  opacity: 0.35;
}
.flip-icon:hover {
  width: 67%;
  opacity: 0.35;
  cursor: pointer;
}
</style>