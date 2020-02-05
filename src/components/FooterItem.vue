<template>
  <div id="footer-wrap">
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <span class="logo"><img src="/../../static/logo-kuro.png" width="200px"></span>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="menu">
            <span>Navigation</span>
            <router-link tag="li" id="home-nav" to="/" exact>
              <a>Home</a>
            </router-link>
            <router-link tag="li" id="home-nav" to="/live" exact>
              <a>Live</a>
            </router-link>
            <router-link tag="li" id="home-nav" to="/config" exact>
              <a>Config</a>
            </router-link>
            <li @click="signOut">
              <a>SignOut</a>
            </li>
          </ul>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="address">
            <span>Contact</span>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>
              <a href="#">Phone</a>
            </li>
            <li>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <a href="#">Adress</a>
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <a href="#">Email</a>
            </li>
          </ul>
        </div>
        <p>copyright &copy; 2020 Ryuken Kashiwagi. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </div>
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

#footer-wrap {
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  margin-top: 30px;
}

footer {
  background-color:#fafafa;
  padding: 30px 0px;
  margin-top: auto;
}

.logo > img {
  margin-top: 10px;
}

.address span,
.menu span {
  color: #404040;
  font-weight: bold;
  border-bottom: 1px solid #c7c7c7;
  padding: 10px 0px;
  display: block;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 3px;
}

.address li a,
.menu li a {
  color: #404040;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: 14px;
}

.address li,
.menu li {
  margin: 10px 0px;
  list-style: none;
}

.address li a:hover,
.menu li a:hover {
  color: #da3e44;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}

.address .fa {
  color: #da3e44;
  margin-right: 10px;
  font-size: 18px;
}
p {
  color: #404040;
  font-size: 0.8rem;
  margin-left: 800px
}
</style>