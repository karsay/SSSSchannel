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

// import '@grapecity/wijmo.vue2.grid';
// import '@grapecity/wijmo.cultures/wijmo.culture.ja';
// import '@grapecity/wijmo.styles/wijmo.css';


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

body > div > a:last-child {
  display: none;

}
</style>
