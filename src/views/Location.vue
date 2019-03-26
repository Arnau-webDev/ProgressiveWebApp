<template>
  <div class="container">
    <!-- <h1>Click to see map location</h1> -->
    <div v-bind:key="index" v-for="(element, index) in locationsData">
      <p>
        <a :href="element.location">{{element.name}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "location",
  computed: mapGetters(["locationsData"])
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

.container p {
  margin: 0;
}

.container div p a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 1rem;
}
</style>


