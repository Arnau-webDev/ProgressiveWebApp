<template>
  <div class="container">
    <div v-bind:key="index" v-for="(team, index) in arrayOfTeams" v-on:click="filterData">
      <router-link :to="`/schedule/${team}`">
        <p>{{team}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "listOfTeams",
  methods: {
    ...mapActions(["callChangeData"]),
    filterData: function() {
      this.$store.dispatch("callChangeData");
    }
  },
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
  min-width: 200px;
  margin-top: 1.6rem;
}

.container div > * {
  text-decoration: none;
  color: inherit;
}
</style>
