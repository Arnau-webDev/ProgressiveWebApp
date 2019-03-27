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
  /* background: rgba(32, 99, 35, 0.5); */
  background: rgba(36, 36, 36, 0.5);
  border: 1px solid #fff;
  border-radius: 10px;
  min-width: 200px;
  margin-top: 1.6rem;
}

.container div > a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 20px 0;
}
</style>
