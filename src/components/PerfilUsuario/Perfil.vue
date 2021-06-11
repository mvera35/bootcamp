<template>
    <div class="container d-flex align-stretch justify-space-between">
        <div class="box central">
            <DatosUsuario size="20em" />
        </div>
        <div class="lados"></div>
    </div>
</template>

<script>
import DatosUsuario from "./DatosUsuario.vue";
export default {
    name: "Perfil",
    components: { DatosUsuario },
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
