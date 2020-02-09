// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// firebase.initializeApp(config);

var firebaseConfig = {
  apiKey: "AIzaSyBP-phBt7SVWCBYchpmi6wZy0ae428T5W8",
  authDomain: "hew1-56417.firebaseapp.com",
  databaseURL: "https://hew1-56417.firebaseio.com",
  projectId: "hew1-56417",
  storageBucket: "hew1-56417.appspot.com",
  messagingSenderId: "416642219145",
  appId: "1:416642219145:web:4fb44b73e681e086459a58"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
