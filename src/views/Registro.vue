<template>
    <div class="fondo-login">
     <Ingreso :Titulo="Titulo" backgroundImage="registro.jpg"/>

    </div>
</template>

<script>
import Ingreso from '../components/Ingreso.vue'
export default {
  data() {
    return {
      Titulo: 'Registro'
    }
  },
  name: 'Registro',
  components:{
    Ingreso
  }
}
</script>

<style scoped>

</style>