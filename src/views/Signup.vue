<template>
<v-container class="text-center">   

    <div class="py-6 ma-3">
        <h2>
            Here's how we can help!
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum perferendis culpa veniam cumque voluptas exercitationem quis, voluptatum distinctio 
        </p>
    </div>

<div class="inputs mx-5">
    <v-text-field
      v-model="name"
      :counter="50"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
          v-model="phoneNumber"
          :counter="7"
          :error-messages="errors"
          label="Phone Number"
          required
     ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :counter="50"
      label="Password"
      required
    ></v-text-field>
     
</div>

    <div class="ma-5">
        <v-btn large block rounded color="primary">
            Sign up
        </v-btn>
    </div>


</v-container>


</template>