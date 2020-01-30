<template>
  <div class="signup">
    <div class="login-wrap">
      <img src="../../static/logo-siro.png" width="200px"><br>
      <h2>新規登録</h2>
      <div class="inputWithIcon">
        <input type="email" placeholder="メールアドレス" v-model="email">
        <font-awesome-icon :icon="['far', 'envelope']" class="i fa-1x"/>
      </div>
      <div class="inputWithIcon">
        <input type="password" placeholder="パスワード" v-model="password">
        <font-awesome-icon :icon="['fas', 'lock']" class="i fa-1x"/>
      </div>
      <br><br>
      <button @click="signUp">新規登録</button>
      <div class="border" /> OR <div class="border" />
      <button @click="goSignIn">ログイン画面に戻る</button>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('登録完了 ログイン画面に戻ります')
          this.$router.push('/signin')
        })
        .catch(error => {
          alert(error.message)
        })
    },
    goSignIn: function() {
      this.$router.push('/signin')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.signup{
  background: url(../../static/login.png);
  width: 100vw;
  height: 100vh;
  background-size: cover;
  text-align: center;
  position: relative;
}


  img {
    margin-bottom: 30px;
  }
  h2 {
    margin-bottom: 50px;
  }

  .login-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit- transform: translateY(-50%) translateX(-50%);
  }

  input {
    display: block;
    width: 450px;
    height: 40px;
    margin-bottom: 45px;
    background: #FFFFFF4D 0% 0% no-repeat padding-box;
    border: none;
    cursor: pointer;
    margin: 30px auto;
  }

  input::placeholder {
    color: white;
    padding: 50px 0;
    font-size: 0.9rem;
  }

input[type="email"],input[type="password"]{
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  padding: 25px 50px;
  color: #fff;
}

input[type="email"],input[type="password"] {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 #999;
}

.inputWithIcon {
  position: relative;
}

.inputWithIcon .i {
  position: absolute;
  left: 28%;
  top: 8px;
  padding: 4px 8px;
  color: #fff;
  transition: 0.3s;
}

.inputWithIcon input[type="email"]:focus + .i{
  color: dodgerBlue;
}

.inputWithIcon input[type="password"]:focus + .i{
  color: dodgerBlue;
}

.fa-1x {
  font-size: 150%;
}

button {
  display: block;
  margin: 0 auto;
  width: 1000px;
  border: solid 2px silver;
  border-radius: 0.2rem 0.2rem;
  padding: 0.9rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
  color: white;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;
  transition: 0.3s;
}

button:hover{
  color: dodgerBlue;
  border-color: dodgerBlue;
}

.border{
  border-top: 1px solid #ffffff;
  width: 475px;
  display: inline-block;
  padding: 2px;
  margin-top: 28px
}
</style>