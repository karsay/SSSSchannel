<template>
  <div id="highlight-wrap">
    <div class="title-icon" />
    ハイライト
    <div class="highlight-box">
      <ul class="tabs">
        <li v-on:click="change('1')" v-bind:class="{'active': team === '1'}"><img :src="teamImgPath1" height="30px" width="40px"></li>
        <li v-on:click="change('2')" v-bind:class="{'active': team === '2'}"><img :src="teamImgPath2" height="30px" width="40px"></li>
      </ul>

      <ul class="contents">
        <li v-if="team === '1'">
          <ul class="highlights">
            <li>
              <div class="li-inner">
                <font-awesome-icon :icon="['far', 'play-circle']" class="i" />
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="next-btn">
            <font-awesome-icon :icon="['fas', 'angle-double-right']" class="i" />
          </div>
        </li>
        <li v-else-if="team === '2'">
          <ul class="highlights">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="next-btn">
            <font-awesome-icon :icon="['fas', 'angle-double-right']" class="i" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      team: '1',
      teamImgPath1: this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg1,
      teamImgPath2: this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg2,
    }
  },
  methods: {
    change: function(num){
      this.team = num
    }
  }
}
</script>

<style scoped>
#highlight-wrap {
  /* background: #afafaf; */
  width: 864px;
  height:170px;
  position: absolute;
  bottom: 35px;
  left: 10px;
  border-radius: 8px;
  font-size: 20px;
  color: #404040;
  font-weight: bold;
  margin: 0 30px;
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
img {
  object-fit: cover
}

ul{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
.tabs {
  overflow: hidden;
}
.tabs li,
.tabs label {
  float: left;
  padding: 2px 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: .3s;
}
.tabs li:not(:first-child),
.tabs label:not(:first-of-type) {
  border-left: none;
}
.tabs li.active,
.tabs :checked + label {
  /* background-color: #000;
  border-color: #000; */
  color: #fff;
  cursor: auto;
  border : solid 1px #b3b3b3 ;
  border-top : solid 1px #717171 ;
  border-bottom : solid 1px #e0e0e0 ;
  box-shadow : 0 1px 2px rgba(100, 100, 100, 0.3)inset;
  background: #afafaf;
}
.contents{
  overflow: hidden;
  margin-top: -1px;
}
.contents > li {
  width: 90%;
  height: 120px;
  /* border: 1px solid #ccc; */
    position: relative;
}
.highlight-box {
  margin: 5px auto;
  /* width: 80%; */
}
.highlights {
  overflow-x: scroll;
  white-space: nowrap;
}

.highlights > li {
 border: 1px dotted #afafaf;
 width: 155px;
 height: 120px;
 display: inline-block;
 margin-right: -5px;
 position: relative;
 cursor: pointer;
}

.highlights > li::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.li-inner{
  text-align: center;
  position: absolute;
  width: 100%;
  color: white;
  margin-top: 10px;
  font-size: 4rem;
}

.next-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 120px;
  line-height: 115px;
  background: #fafafa;
  color: #afafaf;
  border: 1px solid #afafaf;
  padding-left: 3px;
}

</style>