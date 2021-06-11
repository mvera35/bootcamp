<template>
    <v-container class="fill-height" fluid>
      <v-row class="content">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window>
              <v-window-item>
                <v-row>
                     <v-col cols="12" md="4">
                    <div class="imagen">
                    </div>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h2 class=" display-2">Registrarse</h2>
                      <v-form>
                         <v-text-field label="Email" name="email" type="email" color="#0F1B68" >

                         </v-text-field>
                         <v-text-field label="Contraseña" name="password" type="password"  color="#0F1B68">

                         </v-text-field>
                          <v-text-field label="Repetir contraseña" name="password" type="password"  color="#0F1B68">

                         </v-text-field>
                      </v-form>
                    </v-card-text>
                    <div class="boton">
                      <v-btn rounded color="#000B54" dark>Ingresar</v-btn>
                    </div>
                </v-col>
                </v-row>
              </v-window-item>
              <v-window-item>

              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    name:'Ingreso'
}
</script>

<style>
*{
  text-align: center;
}
.boton{
  margin-bottom: 1rem;
}
.imagen{
  background-size: cover;
  background-image: url('../assets/registro.jpg');
  background-position: center;
  width: 21rem;
  height: 21rem;
}

.content{
  justify-content: center;
}
</style>