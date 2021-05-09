<template>
  <v-container class="text-center">

    <v-img
    src="../assets/homelogo.jpg">
    </v-img>

    <div class="title ma-10">
      <h2>
        Welcome!
      </h2>
    </div>


       <v-row
        align="center"
        justify="center"
        class="mt-10"
      >
        <v-col>
          <v-btn-toggle
            v-model="toggle_exclusive"
            rounded
            
          >
            <v-btn color="primary" @click="$router.push('welcome')" >login</v-btn>
            <v-btn color="primary" @click="$router.push('signup')" >Sign up</v-btn>
            
          </v-btn-toggle>
        </v-col>                
      </v-row>



  </v-container>
 
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      
    },
    data () {
      return {
        toggle_exclusive: undefined,
      }
    },
  }
</script>
