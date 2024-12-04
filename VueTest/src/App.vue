<template>
  <div id="app">
    <Toast />
    <HomePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './views/Homepage.vue';
import Toast from 'primevue/toast';

export default defineComponent({
  name: 'App',
  components: {
    HomePage,
    Toast,
  },
});
</script>

<style>
.p-toast {
  position: fixed !important;
  top: 20px !important;
  right: 20px !important;
  z-index: 1000 !important;
  width: 300px !important;
  transition: all 0.3s ease-in-out !important;
}

.p-toast-summary {
  font-size: 20px !important;
  font-weight: bold !important;
}

.p-toast .p-toast-message {
  background-color: #1d8603 !important;
  color: white !important;
  border-radius: 8px !important;
  padding: 15px !important;
  border: none !important;
}

.p-toast-message-icon {
  display: none !important;
}

.p-carousel-next-button, .p-carousel-prev-button {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
  color: aqua !important;
  border: none !important;
  width: 30px !important;
  height: 30px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 10 !important;
  cursor: pointer !important;
}

.p-carousel-next-button{
  right: 10px;
}

.p-carousel-prev-button {
  left: 10px;
}

</style>