<template>
    <v-container class="fill-height" fluid>
      <v-row class="content">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window>
              <v-window-item>
                <v-row>
                     <v-col cols="12" md="4">
                    <div class="imagen" :style="inlineStyle" >
                    </div>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h2 class=" display-2">{{Titulo}}</h2>
                      <v-form @submit.prevent ="registerButton">
                         <v-text-field label="Email" name="email" type="email" color="#0F1B68" v-model="email" >
                         </v-text-field>
                         <v-text-field label="Contraseña" name="password" type="password"  color="#0F1B68" v-model="password">
                         </v-text-field>
                      </v-form>
                    </v-card-text>
                    <div class="boton">
                      <v-btn rounded color="#000B54" dark @click="loginButtonPressed">Ingresar</v-btn>
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
import {auth} from '../firebase'
export default {
  name:'Ingreso',
  props:{
    Titulo: String,
    backgroundImage:String,

  },
  data() {
    return {
      email: '',
      password: '',
      
    }
  },
  computed:{
    bgImage(){
      return require('../assets/' + this.backgroundImage)
    },
    inlineStyle(){
      return {
        backgroundImage: `url(${this.bgImage})`
      };
    }
  },

created(){
    auth.onAuthStateChanged(userAuth =>{
        if(userAuth){
         auth.currentUser.getIdTokenResult()            
         .then(tokenResult =>{
             console.log(tokenResult.claims);
         })
        }
    })
},
   methods: {
        async loginButtonPressed() {
            try {     
         await auth.signInWithEmailAndPassword(this.email,this.password)

            } catch (error) {
                console.log(error);
            }
        }
    }
};
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
  background-position: center;
  width: 17rem;
  height: 25rem;
}

.content{
  justify-content: center;
}
</style>