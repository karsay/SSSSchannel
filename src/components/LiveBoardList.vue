<template>
  <li ref="target">
    <div class="num">
      {{num}}
    </div>
    <div class="name">
      {{name}}
    </div>
    <img :src="img" width="25px" height="20px">
    <!-- {{date}} -->
    <div class="message">
    {{message}}
    </div>
    <div class="res">返信する</div>
  </li>
</template>

<script>
export default {
  // el:'board-list',
  props: {
    'name': String,
    'message': String,
    'date':String,
    'team': String,
    'num': Intl,
  },
  data: function(){
    return {
      img: `../../static/logos/${this.team}.png`
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
  margin-left: 10px;
}
img{
  object-fit: cover;
  margin: 0px 10px 5px;
}
.message{
  /* margin-left: 30px; */
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 5px
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