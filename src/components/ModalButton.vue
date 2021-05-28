<template>
  <button @click="modalOpen = true">
      Open full screen modal! (With teleport!)
  </button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal! 
        (My parent is "body")
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ModalButton',
  components: {
  },
  data() {
    return { 
      modalOpen: false
    }
});
</script>