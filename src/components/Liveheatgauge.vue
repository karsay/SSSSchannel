<template>
  <div id="heatgauge-wrap">
    <div class="bbss-name">
      <div class="title-icon" />
      <span>ヒートゲージ</span><br>
      <img :src="teamImgPath1" width="40px" class="logo1">
      <wj-linear-gauge
        :is-read-only="true"
        :value="gaugeValue"
        class="wijmo-control"
      >
      <img src="../assets/mask.png" class="mask">
      <wj-range wj-property="pointer" class="range" color="red"></wj-range>
      </wj-linear-gauge>
      <img :src="teamImgPath2" width="50px" class="logo2">
    </div>
  </div>

</template>

<script>

import 'wijmo/wijmo.vue2.grid';
import 'wijmo/wijmo.vue2.gauge';
import 'wijmo/cultures/wijmo.culture.ja.js';
import './wijmo.css';

export default {
  data: function(){
    return{
      // gaugeValue: this.$store.state.gaugeValue
      teamImgPath1: this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg1,
      teamImgPath2: this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg2,
    }
  },
  computed: {
    gaugeValue() {
      return this.$store.state.l_gaugeValue
    }
  }

}
</script>

<style scoped>
/* @import "https://cdn.grapecity.com/wijmo/5.latest/styles/wijmo.min.css"; */
@import "wijmo.min.css";
#heatgauge-wrap {
  /* background: #afafaf; */
  width: 864px;
  height:85px;
  position: absolute;
  bottom: 220px;
  left: 10px;
  border-radius: 8px;
}

.bbss-name{
  font-size: 20px;
  color: #404040;
  margin: 0 30px;
  font-weight: bold;
}

.title-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: transparent linear-gradient(136deg, #6294A2 0%, #58C3DD 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  margin-bottom: 2px;
}
.wj-gauge {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
}
.wj-linear-gauge {
  position: relative;
}
.mask {
  width: 80%;
  height: 50%;
  position: absolute;
  bottom: 15px;
}
.logo1 {
  position: absolute;
  bottom: 8px;
  left: 50px;
}

.logo2 {
  position: absolute;
  bottom: 8px;
  right: 40px;
}

.wijmo-control {
  height: 30px;
}


</style>