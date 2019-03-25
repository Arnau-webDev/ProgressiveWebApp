<template>
  <div class="container">
    <div>
      <i class="fas fa-map-marker-alt"></i>
      <router-link to="/teams">
        <i class="fas fa-user-friends"></i>
      </router-link>
      <router-link to="/schedule/all">
        <i class="far fa-calendar-alt"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
}

.container div {
  display: flex;
  flex-direction: column;
}

i {
  padding: 1.9rem;
  color: #fff;
  font-size: 3.5rem;
}
</style>
