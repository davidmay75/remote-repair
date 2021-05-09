<template>
  <v-app id="inspire">
    <v-navigation-drawer  v-model="drawer" app color="secondary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">            
            HomeEZ
          </v-list-item-title>
          <v-list-item-subtitle>
            We're here to help!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pa-10" @click="$router.push({ name:'Home' })">
        <v-img 
             src="./assets/logo.png"
             contain       
            
             > 
        </v-img>
        
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
       items: [
          { title: 'Account', icon: 'mdi-account', to: '/' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' },
        ],
        right: null,
        }),
  }
</script>