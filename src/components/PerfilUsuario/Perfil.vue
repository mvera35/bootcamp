<template>
    <div class="container d-flex align-stretch justify-space-between">
        <div class="box central">
            <DatosUsuario size="20em" />
            <Informacion />
            <Informacion />
        </div>
        <div class="lados">
            <h2>Mis Proyectos</h2>
            <Proyecto />
            <Proyecto />
        </div>
    </div>
</template>

<script>
import DatosUsuario from "./DatosUsuario.vue";
import Informacion from "./InformacionUsuario.vue";
import Proyecto from "./InformacionProyecto.vue";
export default {
    name: "Perfil",
    components: {
        DatosUsuario,
        Informacion,
        Proyecto,
    },
};
</script>

<style scoped>
.container {
    width: 72%;
    padding: 0;
    margin-right: 0;
}
.box {
    background: #f8f8fa;
}

.central {
    width: 56%;
}

.lados {
    width: 41%;
}
</style>
