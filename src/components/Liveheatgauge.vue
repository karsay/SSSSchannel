<template>
  <div id="heatgauge-wrap">
    <div class="bbss-name">
      <div class="title-icon" />
      ヒートゲージ
      <wj-linear-gauge
        :is-read-only="false"
        :value="gaugeValue"
        :value-changed="onValueChanged"
        :thumb-size="30"
        class="wijmo-control"
      >
      <wj-range wj-property="pointer" color="red"></wj-range>
      </wj-linear-gauge>
    </div>
  </div>
</template>

<script>

import 'wijmo/wijmo.vue2.grid';
import 'wijmo/wijmo.vue2.gauge';
import 'wijmo/cultures/wijmo.culture.ja.js';
import 'wijmo/styles/wijmo.css';

export default {
  data: function(){
    return{
      gaugeValue: 30
    }
  },
  methods: {
  }

}
</script>

<style scoped>

#heatgauge-wrap {
  /* background: #afafaf; */
  width: 864px;
  height:85px;
  position: absolute;
  bottom: 190px;
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

</style>