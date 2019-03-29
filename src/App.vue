<template>
  <v-app id="app">
    <v-content>
      <Navbar/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: transparent;
  padding: 0;
}

body {
  padding: 0;
  margin: 0;
  /* background: rgb(182, 252, 219); */
  background-image: url("./assets/soccer.jpg");
  /* background-color: lightgreen; */
  background-color: burlywood;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
}

@media only screen and (min-width: 1040px) {
  body {
    background-size: cover;
  }
}
</style>
