<template>
  <div class="container">
    <!-- <h1>{{name}} Matches</h1> -->
    <table>
      <thead>
        <tr>
          <th>September</th>
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
          <th>October</th>
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
.container {
  text-align: center;
  padding: 0 1rem;
}

table {
  margin: 1rem auto;
  background: rgba(36, 36, 36, 0.5);
  border: 1px solid #fff;
  border-radius: 5px;
  width: 95%;
  text-align: center;
  font-size: 0.9rem;
  color: #fff;
}

table td,
table th {
  padding: 5px 0;
  width: 21.6667%;
}

table tbody tr td:nth-child(3) {
  width: 35%;
}

@media only screen and (max-width: 356px) {
  table {
    font-size: 0.7rem;
  }
}
</style>
