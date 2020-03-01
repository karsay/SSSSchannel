<template>
  <div class="form-area">
    <ul class="tabs">
      <li v-on:click="change('0')" v-bind:class="{'active': selectTeam === '0'}"><img :src="selectTeamImg[0]" width="50px" height="40px"></li>
      <li v-on:click="change('1')" v-bind:class="{'active': selectTeam === '1'}"><img :src="selectTeamImg[1]" width="50px" height="40px"></li>
      <li v-on:click="change('2')" v-bind:class="{'active': selectTeam === '2'}"><img :src="selectTeamImg[2]" width="50px" height="40px" class="no-logo"></li>
    </ul>
    <!-- 名前 : <input v-model="name"><br /> -->
    <textarea v-model="message" cols="10" rows="4"></textarea>
    <button v-on:click="doAdd">コメント</button>
  </div>
</template>

<script>
import {db} from '../main.js'

export default {
  data: function() {
    return {
      message: "",
      userName: this.$store.state.l_userName,
      selectTeamImg: [
        this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg1,
        this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg2,
        this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg3
        ],
      selectTeam: '0',
    };
  },
  methods: {
    doAdd: function() {
      const now = new Date()
      db.collection(`game${this.$store.state.isActive}-${this.$store.state.activeBbs}`).add({
        date: now,
        message: this.message,
        name: this.userName,
        team: this.selectTeamImg[this.selectTeam],
        team_color: this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamColor[this.selectTeam]
      })
    },
    change: function(num) {
      this.selectTeam = num;
    }
  }
};
</script>

<style scoped>
.tabs {
  overflow: hidden;
  list-style: none;
  padding: 0;
  margin: 0;
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

.form-area{
  /* width: 600px; */
  /* text-align: center; */
  display: inline-block;
}
textarea {
  width: 500px;
  padding: 0 5px;
  resize: none
}
img {
  object-fit: cover;
}

.no-logo {
  object-fit: contain;
}

button {
  border: 3px solid #5cb0c5;
  border-radius: 22px;
  padding: 10px 50px;
  transition: 0.3s;
  position: relative;
  bottom: 40px;
  left: 10px;
}

button:hover {
  background: #5cb0c5;
  color: white;
}

</style>