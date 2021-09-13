<template>
  <div class="loader">
    <svg-icon icon="spinner" />
  </div>
</template>

<script>
export default {
  name: "loader"
}
</script>

<style lang="stylus" scoped>
.loader
  animation spin-loader 1.5s ease infinite

@keyframes spin-loader
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)
</style>