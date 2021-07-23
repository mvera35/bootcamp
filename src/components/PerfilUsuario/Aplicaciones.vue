<template>
  <div class="container d-flex flex-column">
    <Carta />
    <Carta />
    <Carta />
    <Carta />
    <Carta />
  </div>
</template>

<script>
import Carta from "./CartaAplicacion.vue";
export default {
  name: "Aplicaciones",
  components: {
    Carta,
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  margin-right: 0;
}
</style>
