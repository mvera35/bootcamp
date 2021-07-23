<template>
  <div class="container d-flex align-stretch justify-space-between">
    <div class="box central">
      <div class="bar mx-auto">
        <v-text-field
          hide-details
          append-icon="mdi-magnify"
          label="Buscar"
          solo
        >
        </v-text-field>
      </div>
    </div>
    <div class="lados">
      <div class="mt-10">
        <span class="text-h4 font-weight-bold grey--text text--darken-3">
          Empresas
        </span>
      </div>
      <CartaEmpresa />
      <CartaEmpresa />
    </div>
  </div>
</template>

<script>
import CartaEmpresa from "./CartaEmpresa.vue";
export default {
  name: "Propuestas",
  components: {
    CartaEmpresa,
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  margin-right: 0;
}
.box {
  background: #f8f8fa;
}

.central {
  width: 60%;
}

.lados {
  width: 40%;
}

.bar {
  width: 50%;
}
</style>
