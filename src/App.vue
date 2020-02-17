<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

</style>