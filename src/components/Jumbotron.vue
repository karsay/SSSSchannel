<template>
  <div id="jumbotron">
    <div class="mov-wrap" @click="test(isActive)">
      <img :src="test(this.isActive)">
    </div>
    <div class="bbs-wrap">
      <div class="comment"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      jumboImg: `../../static/card${this.isActive}.jpg`
    }
  },
  props: {
    isActive: Intl,
  },
  methods: {
    test:function(isActive){
      return `../../static/card${this.isActive}.jpg`
    }
  }
}

</script>

<style scoped>
#jumbotron {
  height: 576px;
  margin: 90px auto 30px;
  background: #fafafa;
  border-radius: 8px;
}

.mov-wrap {
  /* background: #afafaf; */
  width: 1024px;
  height: 576px;
  border-radius: 8px;
  padding: 10px;
  object-fit: cover;
  position: relative;
}

.mov-wrap > img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.bbs-wrap{
  width: 28vw;
  background: #efefef;
  position: absolute;
  top: 100px;
  right: 100px;
}

.comment{
  
}

</style>