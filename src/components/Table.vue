<template>
  <div>
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
        <tr v-bind:key="index" v-for="(element, index) in allData.september">
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
        <tr v-bind:key="index" v-for="(element, index) in allData.october">
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
import { mapGetters } from "vuex";

export default {
  name: "Table",
  methods: {},
  computed: mapGetters(["allData"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: center;
}
table {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
}
</style>
