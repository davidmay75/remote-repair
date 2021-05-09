<template>
<v-container class="text-center">
  <div class="mt-5">
    <h1>
      Resources
    </h1>
  </div>
 <v-row align="center" class="pa-5" >   
            <v-col cols="12" sm="6" class="">
              
                <div class="my-6">
                    <v-btn
                    large
                    color="primary"
                    dark
                    block
                    v-on:click="alertText = 'Go to Training page'"
                    >
                        Training
                    </v-btn>
                </div>

                <div class="my-6">
                    <v-btn
                    large
                    color="primary"
                    dark
                    block
                    v-on:click="alertText = 'Go to Pro-pics page'"
                    >
                        Pro-pics
                    </v-btn>
                </div>

                <div class="my-6">
                    <v-btn
                    large
                    color="primary"
                    dark
                    block
                    v-on:click="alertText = 'Go to Material page'"
                    >
                        Material
                    </v-btn>
                </div>

            </v-col>
        </v-row>

        <v-alert
          dense
          text
          type="success"
          v-if="alertText != ''"
          v-on:click="alertText = ''"
        >
      {{alertText}}
    </v-alert>
    
</v-container>           
</template>

<script>
  export default {
    data () {
      return {        
        alertText: ""
      }
    },
  }
</script>