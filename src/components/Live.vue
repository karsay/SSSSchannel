<template>
  <div id="live">
    <div id="main-wrap">
      <LiveMovie
        :isActive = isActive
      ></LiveMovie>
      <LiveBbs
        :isActive = isActive
        :isActiveBbs = activeBbs
      ></LiveBbs>
      <LiveHeatgauge></LiveHeatgauge>
      <LiveHighlight></LiveHighlight>
    </div>
    <div id="bbss-wrap">
    </div>
  </div>
</template>

<script>

import LiveMovie from "@/components/LiveMovie";
import LiveBbs from "@/components/LiveBbs";
import LiveHeatgauge from "@/components/Liveheatgauge";
import LiveHighlight from "@/components/LiveHighlight";

export default {
  name: 'live',
  components:{
    LiveMovie,
    LiveBbs,
    LiveHeatgauge,
    LiveHighlight
  },
  data: function() {
    return {
      isActive:this.$route.params['isActive'],
      activeBbs:this.$route.params['bbsId'],
      // activeBbs:this.$route.params['bbsId'],
    }
  },
  methods: {
  },
}
</script>

<style scoped>
#live {
  width: 95%;
  margin: 0 auto;
  min-height: 1000px;
}

#main-wrap {
  background: #fafafa;
  width: 100%;
  height: 88vh;
  margin: 90px 0 30px ;
  border-radius: 8px;
  padding: 10px;
  position: relative;
}

#bbs-wrap {
  background: #fafafa;
  width: 100%;
  height: 85vh;
  border-radius: 8px;

}

#bbss-wrap {
  background: #fafafa;
  width: 100%;
  height: 85vh;
  margin: 30px 0;
  border-radius: 8px;
  padding: 10px;
  position: relative;
}



</style>
