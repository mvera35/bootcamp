<template>
  <div>
<div class="fondo-login">
 <Login :Titulo="Titulo" backgroundImage="Inicio.png" :email="email" :password="password"/>
 </div>      
  </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
data() {
    return {
        Titulo: 'Ingresar',
        email: '',
        password: ''
    }
},
    components:{
        Login

    },

}
</script>

<style>

</style>