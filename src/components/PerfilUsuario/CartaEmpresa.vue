<template>
  <v-card class="mx-auto mt-10" max-width="450" outlined rounded="xl">
    <div>
      <v-btn fab small absolute right elevation="0" color="#fff">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-list-item three-line>
      <v-list-item-content>
        <v-avatar size="100">
          <img
            alt="user"
            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          />
        </v-avatar>
        <v-list-item-title class="text-h6 my-auto"
          >Nombre de la empresa</v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <div class="mx-auto mb-2">
        <v-btn large color="indigo darken-4"
          ><span class="white--text">Ver Perfil</span></v-btn
        >
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CartaEmpresa",
};
</script>
<style lang="scss" scoped></style>
