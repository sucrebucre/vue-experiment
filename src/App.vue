<template>
  <div id="app">

    <!-- Get the contents from the router -->
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- General stylesheet for all pages, if it was scoped, it would be only relevant to that specific page -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
