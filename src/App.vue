<template>
  <v-app>
    <NavbarComponent/>
    <router-view></router-view>
    <CreateComponent/>
  </v-app>
</template>

<script>

import NavbarComponent from "@/components/NavbarComponent"
import CreateComponent from "@/components/CreateComponent"

export default {
  name: 'App',
  components: {
    NavbarComponent,
    CreateComponent
  },
  data () {
    return {
      
    }
  }
}
</script>
