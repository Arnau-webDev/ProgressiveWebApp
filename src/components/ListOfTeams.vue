<template>
  <div class="container">
    <div v-bind:key="index" v-for="(team, index) in arrayOfTeams">
      <router-link :to="`/schedule/${team}`">{{team}}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "listOfTeams",
  methods: {},
  computed: mapGetters(["arrayOfTeams"])
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container div {
  background: lightgreen;
  border: 1px solid green;
  border-radius: 10px;
  min-width: 200px;
  margin-top: 1.6rem;
}

.container div > a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 20px 0;
}
</style>
