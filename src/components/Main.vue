<template>
  <div id="main">
    <HeaderItem />
    <router-view />
    <FooterItem />
  </div>
</template>

<script scope>
import "normalize.css";
import HeaderItem from "@/components/HeaderItem";
import FooterItem from "@/components/FooterItem";

export default {
  name: "Main",
  components: {
    HeaderItem,
    FooterItem
  }
};
</script>

<style>
#main {
font-family: 'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: #000;
  /* border: 3px red solid; */
}

body {
  font-family: "SF Pro JP","SF Pro Text","SF Pro Icons","Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro W3","メイリオ","Meiryo","ＭＳ Ｐゴシック","Helvetica Neue","Helvetica","Arial",sans-serif;
  background: #000;
}
</style>
