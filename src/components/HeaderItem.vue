<template>
  <header id="header">
    <router-link tag="li" id="home-nav" to="/" exact>
      <a>
        <img src="../../static/logo-kuro.png" />
      </a>
    </router-link>
    <nav id="header-nav">
      <ul>
        <router-link tag="li" id="home-nav" :to="{ name: 'Home'}" exact>
          <a>ホーム</a>
        </router-link>
        <li @click="goLive" :class="{active: this.$route.path == `/live/${this.$store.state.isActive}/${this.$store.state.activeBbs}`}"><a>掲示板</a></li>
        <router-link tag="li" id="config-nav" :to="{ name: 'Config'}" exact>
          <a>設定</a>
        </router-link>
        <li @click="signOut">ログアウト</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import firebase from "firebase";
import store from '@/store';

export default {
  data:function(){
    return {
    }
  },
  methods: {
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signin");
      });
    },
    goLive: function(){
      this.$router.push(`/live/${this.$store.state.isActive}/${this.$store.state.activeBbs}`);
    }
  },
  computed: {
    isActive() {
      return this.$store.state.isActive;
    }
  },
  watch: {
    // isActive: function(){
    // }
  }
};
</script>

<style scoped>
header {
  width: 100vw;
  height: 80px;
  background-color: #fafafa;
  color: #000;
  position: fixed;
  top: 0;
  z-index: 1000;
}
img {
  float: left;
  margin-top: 20px;
  margin-left: 50px;
  width: 125px;
}
/*メニュー*/
#header-nav {
  margin-top: 18px;
  float: right;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
}

li:last-child {
  border: 3px solid #5cb0c5;
  border-radius: 22px;
  padding: 10px 30px;
  transition: 0.3s;
}

li:last-child:hover {
  background: #5cb0c5;
  color: white;
}

li a {
  text-decoration: none;
  color: #999;
  margin-right: 25px;
}

li a#active {
  color: #5cb0c5;
  font-weight: bolder;
}

.router-link-active {
  font-weight: bolder;
  font-size: 1.2rem;
  color: #5cb0c5;
}

.active{
  font-weight: bolder;
  font-size: 1.2rem;
  color: #5cb0c5;
}

li a:hover {
  color: #5cb0c5;
}

</style>