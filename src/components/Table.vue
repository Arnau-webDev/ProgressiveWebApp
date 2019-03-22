<template>
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
      <tr v-bind:key="element" v-for="element in shedule.dates">
        <td>{{element.date}}</td>
        <td>{{element.team1}} and {{element.team2}}</td>
        <td>{{element.location}}</td>
        <td>{{element.timeline}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
