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
@font-face {
  font-weight: 400;
  font-family: Roboto;
  src: url("./fonts/Roboto-Regular.ttf");
}

@font-face {
  font-weight: 700;
  font-family: Roboto;
  src: url("./fonts/Roboto-Bold.ttf");
}

@font-face {
  font-weight: 300;
  font-family: Roboto;
  src: url("./fonts/Roboto-Light.ttf");
}

.app{
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", "Arial", sans-serif;
}

</style>