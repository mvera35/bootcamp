<template>
  <v-card
    class="mx-auto mt-10"
    width="70%"
    max-height="500"
    outlined
    rounded="xl"
  >
    <div>
      <v-btn fab small absolute right elevation="0" color="#fff">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-list-item>
      <v-list-item-content>
        <div class="d-flex">
          <v-avatar size="55">
            <img
              alt="user"
              src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
            />
          </v-avatar>
          <div class="d-flex flex-column my-auto ml-2">
            <span class="text-left">Nombre de la empresa</span>
            <span class="text-left">Información</span>
          </div>
        </div>
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
  name: "CartaPuesto",
};
</script>
<style lang="scss" scoped></style>
