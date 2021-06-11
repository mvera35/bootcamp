<template>
    <div class="fondo-login d-flex align-stretch">
        <Menu @opcion="prueba" />
	<Perfil v-if="opcion == 'perfil'"/>
	<Aplicaciones v-if="opcion == 'aplicaciones'"/>
	<Propuestas v-if="opcion == 'propuestas'" />
    </div>
</template>

<script>
import Menu from "@/components/PerfilUsuario/Menu";
import Perfil from "@/components/PerfilUsuario/Perfil";
import Aplicaciones from "@/components/PerfilUsuario/Aplicaciones";
import Propuestas from "@/components/PerfilUsuario/Propuestas";

export default {
    name: "PerfilUsuario",
    components: {
        Menu,
        Perfil,
	Aplicaciones,
	Propuestas,
    },

    data() {
        return { opcion: "perfil" };
    },

    methods: {
        prueba(opcion) {
            this.opcion = opcion;
        },
    },
};
</script>

<style scoped>
.fondo-login {
    height: 100vh;
    background: #dfe2f5;
}
</style>
