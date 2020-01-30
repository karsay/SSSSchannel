<template>
  <div id="main">
    <HeaderItem />
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import HeaderItem from '@/components/HeaderItem'

export default {
  name: 'Main',
  components: {
    HeaderItem
  }
}
</script>

<style>
#main {
  font-family: "SF Pro JP","SF Pro Text","SF Pro Icons","Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro W3","メイリオ","Meiryo","ＭＳ Ｐゴシック","Helvetica Neue","Helvetica","Arial",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #000;
  height: 2000px;
}

</style>
