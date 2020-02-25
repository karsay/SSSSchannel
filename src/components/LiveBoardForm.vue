<template>
  <div class="form-area">
    <ul class="tabs">
      <li v-on:click="change('1')" v-bind:class="{'active': selectTeam === '1'}"><img :src="teamImgPath1" width="50px" height="40px"></li>
      <li v-on:click="change('2')" v-bind:class="{'active': selectTeam === '2'}"><img :src="teamImgPath2" width="50px" height="40px"></li>
      <li v-on:click="change('3')" v-bind:class="{'active': selectTeam === '3'}"><img src="../../static/logos/no-logo.png" width="50px" height="40px"></li>
    </ul>
    <!-- 名前 : <input v-model="name"><br /> -->
    <textarea v-model="message" cols="10" rows="4"></textarea>
    <button v-on:click="doAdd">コメント</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "",
      selectTeam: '1',
      userName: this.$store.state.userName,
      teamImgPath1: this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg1,
      teamImgPath2: this.$store.state.bbss[this.$store.state.isActive][this.$store.state.activeBbs].teamImg2,
    };
  },
  methods: {
    doAdd: function() {
      this.$emit("input", this.userName, this.message);
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
  object-fit: cover
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