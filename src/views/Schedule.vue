
<template>
  <Table :name="name"/>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table.vue";

export default {
  name: "Schedule",
  props: ["name"],
  components: {
    Table
  }
};
</script>

<style scoped>
</style>


