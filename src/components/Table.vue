<template>
  <div>
    <h1>{{name}} Matches</h1>
    <table>
      <thead>
        <tr>
          <th>SEPTEMBER</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Times</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(element, index) in getDataSeptember">
          <td>{{element.date}}</td>
          <td>{{element.team1}} and {{element.team2}}</td>
          <td>{{element.location}}</td>
          <td>{{element.timeline}}</td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>OCTOBER</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Times</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(element, index) in getDataOctober">
          <td>{{element.date}}</td>
          <td>{{element.team1}} and {{element.team2}}</td>
          <td>{{element.location}}</td>
          <td>{{element.timeline}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Table",
  props: ["name"],
  methods: {
    ...mapActions(["callChangeData"])
  },
  computed: {
    ...mapGetters(["allData"]),
    getDataSeptember() {
      if (this.name !== "all") {
        return this.$store.getters.allData.september.filter(
          match => match.team1 == this.name || match.team2 == this.name
        );
      } else {
        return this.$store.getters.allData.september;
      }
    },
    getDataOctober() {
      if (this.name !== "all") {
        return this.$store.getters.allData.october.filter(
          match => match.team1 == this.name || match.team2 == this.name
        );
      } else {
        return this.$store.getters.allData.october;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: center;
}

h1 {
  text-transform: capitalize;
}

table {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
}
</style>
