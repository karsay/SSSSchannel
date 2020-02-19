<template>
  <div id="jumbotron">
    <div class="mov-wrap">
      <img :src="changeImg()">
    </div>
    <div class="bbs-wrap">
      <div class="bbss-name">
        <div class="title-icon" />
        掲示板一覧
      </div>
      <ul class="bbs-ul">
        <li class="bbs-box" v-for="bbs in bbss" v-bind:key="bbs.bbsId" @click="goLive(bbs.bbsId)">
          <div class="bbs-img-wrap">
            <img :src="bbs.bbsImg" alt="bbs-img" width="110px">
          </div>
          <div class="bbs-content">
            <div class="bbs-title">{{bbs.title}}</div>
            <div class="bbs-comment-num">{{bbs.commentCnt}}コメント</div>
            <div class="jump-comment">掲示板へ</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      bbss: bbss()
    }
  },
  methods: {
    changeImg:function() {
      return `../../static/card${this.$store.state.isActive}.jpg`
    },
    goLive:function(id) {
      this.$store.state.bbsId = id;
      this.$router.push(`/live/${this.$store.state.isActive}/${id}`);
    }
  },
  computed: {
    bbss(){
      return this.$store.state.bbss[this.$store.state.isActive]
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
  object-fit: cover;
}

.bbs-ul{
  overflow-y: scroll;
  height: 500px;
}

.bbs-wrap{
  width: 33vw;
  /* background: #efefef; */
  position: absolute;
  top: 100px;
  right: 70px;
  color: #404040;
}

.bbss-name{
  font-size: 20px;
  color: #404040;
  margin: 10px 30px
}

.title-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: transparent linear-gradient(136deg, #6294A2 0%, #58C3DD 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
}

.bbs-box{
  border-bottom: 1px solid #afafaf;
  height: 100px;
  list-style: none;
  transition: .3s;
}

.bbs-box:hover{
  cursor: pointer;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.4);
}

.bbs-img-wrap {
  width: 7vw;
  height: 80px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  top: 10px
}

.bbs-img-wrap > img{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.bbs-content{
  width: 22vw;
  display: inline-block;
  margin-left: 5px;
}
.bbs-title{
  font-weight: bold;
  position: relative;
  bottom: 20px;
white-space: nowrap;
overflow: hidden;
}

.bbs-comment-num{
  font-size: 0.8rem;
  opacity: 0.4;
  position: relative;
  bottom: 10px;
}

.jump-comment{
  font-size: 0.8rem;
  float: right;
  position: relative;
  bottom: 15px;
  color: #0000ff;
  border-bottom: 1px solid #0000ff;
}

</style>