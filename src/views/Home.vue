<template>
  <div class="home">
    <Icons/>
  </div>
</template>

<script>
import Icons from "@/components/Icons.vue";

export default {
  name: "home",
  components: {
    Icons
  }
};
</script>

<style scoped>
input[type="date"],
select {
  border-radius: 10px;
  background: rgb(210, 241, 227, 0.5);
  padding: 5px;
}

input:focus,
select:focus {
  outline-color: transparent;
}

label {
  display: block;
  margin: 10px 0;
}
</style>


