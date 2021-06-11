<template>
    <div>
        <v-img
            v-bind:height="imgSize"
            width="100%"
            src="https://picsum.photos/id/11/500/300"
        >
        </v-img>
        <div class="icon">
            <v-avatar color="indigo" size="150"> </v-avatar>
            <h1>Nombre de usuario</h1>
            <h2>Especialidad</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "DatosUsuario",
    props: { size: String },
    data() {
        return { imgSize: this.size };
    },
};
</script>

<style scoped>
.icon {
    margin-top: -75px;
    padding-bottom: 10%;
}
</style>
