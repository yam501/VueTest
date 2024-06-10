<template>
  <div class="app">
    <Modal/>
  </div>

</template>

<script>

import {defineComponent} from "vue";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  components: {Modal},
})
</script>

<style>
.app{
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>