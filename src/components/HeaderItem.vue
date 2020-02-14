<template>
  <header id="header">
    <router-link tag="li" id="home-nav" to="/" exact>
      <a>
        <img src="../../static/logo-kuro.png" />
      </a>
    </router-link>
    <nav id="header-nav">
      <ul>
        <router-link tag="li" id="home-nav" to="/" exact>
          <a>ホーム</a>
        </router-link>
        <router-link tag="li" id="live-nav" to="/live" exact>
          <a>掲示板</a>
        </router-link>
        <router-link tag="li" id="config-nav" to="/config" exact>
          <a>設定</a>
        </router-link>
        <li @click="signOut">ログアウト</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signin");
        });
    }
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

li a:hover {
  color: #5cb0c5;
}

</style>