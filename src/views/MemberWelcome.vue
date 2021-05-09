<template>
  <div class="MemberWelcome">
    <div class="title ma-10">
      <h1 class="text-center">Welcome back!</h1>
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
                        Manage Account
                    </v-btn>
                </div>

                <div class="my-6">
                    <v-btn
                    large
                    color="primary"
                    dark
                    block
                    @click="$router.push('help')"
                    >
                        Get Help!
                    </v-btn>
                </div>

                <div class="my-6">
                    <v-btn
                    large
                    color="primary"
                    dark
                    block
                   @click="$router.push('resources')"
                    >
                        Resources
                    </v-btn>
                </div>

                

            </v-col>
        </v-row>
    






  </div>
</template>