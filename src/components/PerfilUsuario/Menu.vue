<template>
    <div class="box lados">
        <DatosUsuario size="10em"/>

        <div class="buttons d-flex">
            <v-btn
                color="#676767"
                outlined
                block
                x-large
                @click="enviar('perfil')"
            >
                <v-icon x-large>mdi-account-circle</v-icon>
                <h4>Mi Perfil</h4>
            </v-btn>
        </div>

        <div class="buttons d-flex">
            <v-btn
                color="#676767"
                outlined
                block
                x-large
                @click="enviar('aplicaciones')"
            >
                <v-icon x-large>mdi-briefcase-variant</v-icon>
                <h4>Mis Aplilcaciones</h4>
            </v-btn>
        </div>

        <div class="buttons d-flex">
            <v-btn
                color="#676767"
                outlined
                block
                x-large
                @click="enviar('propuestas')"
            >
                <v-icon x-large>mdi-clipboard-text-search</v-icon>
                <h4>Mis Propuestas</h4>
            </v-btn>
        </div>
    </div>
</template>

<script>
import DatosUsuario from "./DatosUsuario.vue";

export default {
    name: "Menu",
    components: {
        DatosUsuario,
    },
    data() {
        return {};
    },

    methods: {
        enviar(opcion) {
            this.$emit("opcion", opcion);
        },
    },
};
</script>

<style scoped>
.box {
    background: #fff;
}

.lados {
    width: 25%;
}

.buttons {
    padding: 2%;
}
</style>
