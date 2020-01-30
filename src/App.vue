<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import HeaderItem from '@/components/HeaderItem'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "SF Pro JP","SF Pro Text","SF Pro Icons","Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro W3","メイリオ","Meiryo","ＭＳ Ｐゴシック","Helvetica Neue","Helvetica","Arial",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
/* @import "/assets/style/reset.css";*/
</style>
