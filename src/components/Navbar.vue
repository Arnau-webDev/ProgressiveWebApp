<template>
  <div>
    <div id="nav">
      <v-toolbar flat class="font-weight-light transparent">
        <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title class="white--text opa">
          <i class="far fa-futbol black--text"></i>
          <span class="font-weight-light nysl">NYSL</span>
        </v-toolbar-title>
      </v-toolbar>

      <v-navigation-drawer v-model="drawer" app class="primary">
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" v-on:click="drawer = false">
            <v-list-tile-action>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "location_on", text: "Location", route: "/location" },
        { icon: "people", text: "Teams", route: "/teams" },
        { icon: "schedule", text: "Schedule", route: "/schedule/all" }
      ]
    };
  }
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.v-navigation-drawer {
  opacity: 0.9;
}

.opa {
  opacity: 0.5;
  font-size: 2rem;
}

.nysl {
  font-family: fantasy;
}

.fa-futbol {
  margin-right: 5px;
}
</style>
