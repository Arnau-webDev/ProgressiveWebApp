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
  padding: 0;
}

.container div {
  background: rgba(36, 36, 36, 0.5);
  border: 1px solid #fff;
  border-radius: 10px;
  min-width: 200px;
  margin-top: 1.6rem;
}

.container p {
  margin: 0;
}

.container div p a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 20px 0;
}
</style>


