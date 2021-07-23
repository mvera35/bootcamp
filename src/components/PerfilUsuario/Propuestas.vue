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
    <div class="lados"></div>
  </div>
</template>

<script>
export default {
  name: "Propuestas",
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
