<template>
    <v-card
        class="mx-auto"
        color="#f8f8fa"
        elevation="0"
        width="80%"
        rounded="xl"
    >
        <v-img
            width="100%"
            height="200"
            src="https://picsum.photos/id/11/500/300"
        >
        </v-img>

        <v-container class="d-flex">
            <v-card-title class="grey--text font-weight-bold text-h6 mr-auto">
                Nombre de Proyecto
            </v-card-title>

            <v-card-actions>
                <v-btn icon @click="show = !show">
                    <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                </v-btn>
            </v-card-actions>
        </v-container>

        <v-expand-transition>
            <v-card-text v-show="show">
                <div class="div-line"></div>
                <p class="black--text font-weight-regular text-justify text-h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </v-card-text>
        </v-expand-transition>
        <div class="div-space"></div>
    </v-card>
</template>

<script>
export default {
    name: "Proyecto",
    data() {
        return {
            show: false,
        };
    },
};
</script>

<style scoped>
.div-line {
    border-bottom: 1px solid #9e9e9e;
    margin: 0 0 15px 0;
}

.div-space {
    margin-bottom: 100px;
}
</style>
