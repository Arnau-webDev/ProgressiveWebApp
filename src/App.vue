<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/location">Location</router-link>|
      <router-link to="/teams">Teams</router-link>|
      <router-link to="/schedule/all">Schedule</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    // Icons
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

#nav,
#nav > * {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media only screen and (min-width: 1040px) {
  body {
    background-size: cover;
  }
}
</style>
