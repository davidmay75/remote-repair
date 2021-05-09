<template>
<v-container>


    <v-row>
        <v-col class="text-center">
            <h3>We can help with your {{$route.params.area}} issue! </h3>
            <p>
                Please give us some more information about the problem we will be helping you with.    
            </p>
        </v-col>

       <v-col
        class="d-flex"
        cols="12"
        sm="6"
        >
            <v-select
                :items="locations"
                label="location"
                dense
                outlined
                rounded
            ></v-select>
      </v-col>

      <v-col>
            <v-textarea
            rounded
                outlined
                name="input-7-4"
                label="Please provide any details on your issue"
                value=""
            ></v-textarea>
        </v-col>

    </v-row>

    <div class="text-center bottom">
        <v-btn color="primary" large block rounded>
            Submit and call technician
        </v-btn>
    </div>



    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        
        locations: [
          'Kitchen',
          'Bathroom',
          'Crawl',
          'Basement',
          'Outside',
          'Garage',
          'Bedroom',
          'Shed',
          'Other'
        ],
      }
    },
  }
</script>

<style>
#bottom {
  position: relative;
  bottom: 0;
  left: 0;
}

</style>