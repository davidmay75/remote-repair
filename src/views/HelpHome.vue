<template>
  <v-container class="text-center">

        <div class="pa-10">
            <h3>
            What's giving you a problem?
            </h3>
        </div>


        <v-row align="center px-5">
            <v-col cols="12" sm="6">
                <div class="my-6">
                    <v-btn
                    large
                    color="primary"
                    dark
                    block
                    @click="$router.push({ name: 'Details' , params: { area: 'plumbing'} })"
                    >
                        Plumbing
                    </v-btn>
                </div>

                <div class="my-6">
                    <v-btn
                        large
                        color="primary"
                        dark
                        block
                    @click="$router.push({ name: 'Details' , params: { area: 'hvac'} })"
                    >
                        HVAC
                    </v-btn>
                </div>

                 <div class="my-6">
                    <v-btn
                        large
                        color="primary"
                        dark
                        block
                        @click="$router.push({ name: 'Details' , params: { area: 'electrical'} })"
                    >
                        Electrical
                    </v-btn>
                </div>

                <div class="my-6">
                    <v-btn
                        large
                        color="primary"
                        dark
                        block
                        @click="$router.push({ name: 'Details' , params: { area: 'other'} })"
                    >
                        Other
                    </v-btn>
                </div>

            </v-col>
        </v-row>

        

     
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e6: 1,
      }
    },
  }
</script>