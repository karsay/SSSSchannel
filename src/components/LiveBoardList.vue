<template>
  <li ref="target">
    <div class="name" :style="teamColor">
      {{name}}
    </div>
    <img :src="teamImg" width="25px" height="25px">
    <!-- {{date}} -->
    <div class="message">
    {{message}}
    </div>
    <div class="res">返信する</div>
  </li>
</template>

<script>
import { DateTime, Color } from 'wijmo/wijmo'
export default {
  // el:'board-list',
  props: {
    name: String,
    message: String,
    // 'date': Date,
    team: String,
    num: Intl,
    img: String,
    selectTeamColor: String
  },
  data: function(){
    return {
      teamImg: this.img,
      teamColor: {
        color: this.selectTeamColor
      }
    }
  },
}
</script>

<style scoped>
li {
  width: 100%;
  background: #fafafa;
  border-bottom: 1px solid #d0d0d0;
  padding: 15px 5px;
}
.num{
  display: inline;
}
.name{
  display: inline;
}
img{
  object-fit: cover;
  position: relative;
  bottom: 5px;
  left: 5px;
}
.message{
  /* margin-left: 30px; */
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 5px
}
.res {
  color: blue;
  float: right;
  border-bottom: 1px solid blue;
  position: relative;
  bottom: 15px;
  cursor: pointer;
  font-size: 0.8rem
}
</style>