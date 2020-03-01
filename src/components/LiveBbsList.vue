<template>
<div id="Live-bbs-list">
  <div class="title-icon" />
  <div class="Live-bbs-title">関連するスレッド</div><br>
  <div class="tags">
    <ul>
      タグ
      <li v-for="tag in tags" v-bind:key="tag.index">{{tag}}</li>
    </ul>
  </div>
  <div class="row">
    <div class="col-sm-6" v-for="bbs in bbss" v-bind:key="bbs.index">
      <div class="card">
        <div class="card-body">
          <img src="../../static/bbsimgs/card0.jpg" alt="Card image cap" width="180px" height="135px">
          <div class="content-box">
            <p class="card-comment">120コメント</p>
            <h5 class="card-title">レヴァンドフスキのこのゴールwwwww</h5>
            <p class="card-text">凄すぎワロったっっっw</p>
          </div>
          <div class="jump-comment">掲示板へ</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: function(){
    return{
      tags: this.$store.state.bbss[this.isActive][this.isActiveBbs].tags,
      bbss: this.$store.state.bbss[this.$store.state.isActive]
    }
  },
  props: {
    isActive: Intl,
    isActiveBbs: Intl
  }
}
</script>

<style scoped>
#Live-bbs-list{
  background: #fafafa;
  width: 100%;
  height: 85vh;
  border-radius: 8px;
  color: #404040;
}

#Live-bbs-list {
  background: #fafafa;
  width: 100%;
  height: 85vh;
  margin: 30px 0;
  border-radius: 8px;
  padding: 10px;
  position: relative;

}

.card {
  border: none;
  background: #fafafa;
  border-bottom: 1px solid #afafaf;
  cursor: pointer;
  transition: .3s;
  border-radius: 8px;
}

.card:hover {
  box-shadow: 0px 10px 20px rgba(0,0,0,0.4);
}

.card-body {
  position: relative;
  display: inline-block;
  padding: 20px;
  height: 175px;
}

.content-box {
  position: absolute;
  top: 20px;
  left: 220px;
}

.card-comment{
  font-weight: lighter;
  opacity: 0.8;
  font-size: 0.8rem;
}

.card-title {
  font-weight: bold;
}

.card-text{
  opacity: 0.8;
  margin-top: 20px;
}

.card-body > img{
  object-fit: cover;
  border-radius: 8px;
}

.Live-bbs-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #404040;
  display: inline-block;
  margin: 10px;
}

.jump-comment{
  font-size: 0.8rem;
  float: right;
  color: #0000ff;
  border-bottom: 1px solid #0000ff;
  position: absolute;
  right: 20px;
  bottom: 20px
}

.title-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: transparent linear-gradient(136deg, #6294A2 0%, #58C3DD 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  margin-bottom: 2px;
  margin-left: 10px;
}

.tags {
  display: inline-block;
}

.tags li{
  display: inline-block;
  color: #00BAFF;
  cursor: pointer;
  margin-left: 5px;
}

.tags li::before{
  content: '#';
}
</style>