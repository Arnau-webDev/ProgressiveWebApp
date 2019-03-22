<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/myNewPath">My New Path</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import home from "./views/Home.vue";

export default {
  name: "app",
  data() {
    return {
      schedule: {
        dates: [
          {
            date: "9/01",
            team1: "U1",
            team2: "U4",
            location: "AJ Katzenmaier",
            timeline: "9:30 a.m"
          },
          {
            date: "9/01",
            team1: "U3",
            team2: "U2",
            location: "GreenBay",
            timeline: "1:00 p.m"
          },
          {
            date: "9/08",
            team1: "U5",
            team2: "U6",
            location: "Howard A Yeager",
            timeline: "9:30 a.m"
          },
          {
            date: "9/08",
            team1: "U6",
            team2: "U1",
            location: "Marjorie P Hart",
            timeline: "1:00 p.m"
          },
          {
            date: "9/15",
            team1: "U2",
            team2: "U4",
            location: "North",
            timeline: "9:30 a.m"
          },
          {
            date: "9/15",
            team1: "U3",
            team2: "U5",
            location: "AJ Katzenmaier",
            timeline: "1:00 p.m"
          },
          {
            date: "9/22",
            team1: "U1",
            team2: "U3",
            location: "South",
            timeline: "9:30 a.m"
          },
          {
            date: "9/22",
            team1: "U2",
            team2: "U6",
            location: "Howard A Yeager",
            timeline: "1:00 p.m"
          },
          {
            date: "9/29",
            team1: "U4",
            team2: "U5",
            location: "Greenbay",
            timeline: "9:30 a.m"
          }
        ]
      }
    };
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
  background: url("./assets/soccer.jpg");
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
</style>
