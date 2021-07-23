<template>
    <v-btn
	elevation="1"
        class="ma-8"
        color="#010737"
	v-bind:absolute="absolute"
        v-bind:right="right"
        v-bind:bottom="bottom"
        fab
    >
        <v-icon x-large color="#FBFBFF">mdi-pencil-outline</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: "Editar",
    props: {
        absolute: {
            type: Boolean,
            default: false,
        },
        right: {
            type: Boolean,
            default: false,
        },
        bottom: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
</style>
