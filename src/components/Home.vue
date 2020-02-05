<template>
  <div id="home">
    <div id="jumbotron">
      <div class="mov-wrap">
      </div>
    </div>
    <ul class="nav nav-pills" >
      <li class="nav-item"><a href="#" class="nav-link active">上昇中</a></li>
      <li class="nav-item" v-for="item in items" v-bind:key="item.id">
        <a href="#" class="nav-link">
          {{ item.message }}
        </a>
      </li>
    </ul>
    <div id="card-wrap">
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="../../static/card1.jpg" alt="Card image cap">
          <div class="card-img-overlay">
            <div class="live-wrap">
              <div class="live-text">ライブ</div>
              <div class="live-score">
                <img src="@/assets/logos/byr_logo.png" width="60px">
                <div class="score">１−０</div>
                <img src="@/assets/logos/vfl_logo.png" width="60px">
              </div>
            </div>
            <div class="black-cover">
              <p class="card-title">バイエルン ミュンヘン vs VfLヴォルフスブルク</p>
              <p class="card-text">ブンデスリーガ第23節</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../../static/card1.jpg" alt="Card image cap">
        </div>
        <div class="card">
          <img class="card-img-top" src="../../static/card1.jpg" alt="Card image cap">
        </div>
      </div>
    </div>
    <div id="card-wrap">
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="../../static/card1.jpg" alt="Card image cap">
        </div>
        <div class="card">
          <img class="card-img-top" src="../../static/card1.jpg" alt="Card image cap">
        </div>
        <div class="card">
          <img class="card-img-top" src="../../static/card1.jpg" alt="Card image cap">
        </div>
      </div>
    </div>
    <nav aria-label="Page Navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Previous Page">
          <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item">
          <a href="#"  class="page-link" aria-label="Next Page">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue';
const axios = require("axios");

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: function() {
    return {
      info: null,
      items: [
        {message: 'NPB'},
        {message: '海外サッカー'},
        {message: '国内サッカー'},
        {message: 'NBA'},
        {message: 'Bリーグ'},
        {message: 'アメフト'},
        {message: 'テニス'},
        {message: 'NHL'},
        {message: 'レース'},
      ],
      thumbnails: [
        {
          id: 1, title: 'バイエルン ミュンヘン vs VfLヴォルフスブルク', subtitle: 'ブンデスリーガ第23節',cardImg:'../../static/card1.jpg',
          logo1:'@/assets/logos/byr_logo.png',logo2:'@/assets/logos/vfl_logo.png',
          liveText: 'ライブ', score: '１−０', lived: true
        },
        {
          id: 2, title: '日本 vs 南アフリカ', subtitle: 'ラグビーW杯 決勝トーナメント',
          logo1:'@/assets/logos/byr_logo.png',logo2:'@/assets/logos/vfl_logo.png',
          liveText: 'ライブ', score: '7−０', lived: true
        },
        {
          id: 3, title: 'バイエルン ミュンヘン vs VfLヴォルフスブルク', subtitle: 'ブンデスリーガ第23節',cardImg:'../../static/card1.jpg',
          logo1:'@/assets/logos/byr_logo.png',logo2:'@/assets/logos/vfl_logo.png',
          liveText: 'ライブ', score: '１−０', lived: true
        },
        {
          id: 4, title: 'バイエルン ミュンヘン vs VfLヴォルフスブルク', subtitle: 'ブンデスリーガ第23節',cardImg:'../../static/card1.jpg',
          logo1:'@/assets/logos/byr_logo.png',logo2:'@/assets/logos/vfl_logo.png',
          liveText: 'ライブ', score: '１−０', lived: true
        },
        {
          id: 5, title: 'バイエルン ミュンヘン vs VfLヴォルフスブルク', subtitle: 'ブンデスリーガ第23節',cardImg:'../../static/card1.jpg',
          logo1:'@/assets/logos/byr_logo.png',logo2:'@/assets/logos/vfl_logo.png',
          liveText: 'ライブ', score: '１−０', lived: true
        },
        {
          id: 6, title: 'バイエルン ミュンヘン vs VfLヴォルフスブルク', subtitle: 'ブンデスリーガ第23節',cardImg:'../../static/card1.jpg',
          logo1:'@/assets/logos/byr_logo.png',logo2:'@/assets/logos/vfl_logo.png',
          liveText: 'ライブ', score: '１−０', lived: true
        },
      ],
    }
  }
}

Vue.component('thumb-card', {
  props: {
    title: String,
    subtitle: String,
    cardImg: String,
    logo1: String,
    logo2: String,
    liveText: String,
    score: String,
    lived: Boolean
  },
  // template:
  //   "<div class='card'>"
  //     <img class='card-img-top' src='../../static/card1.jpg' alt='Card image cap'>
  //     <div class='card-img-overlay'>
  //       <div class='live-wrap'>
  //         <div class='live-text'>ライブ</div>
  //         <div class='live-score'>
  //           <img src='@/assets/logos/byr_logo.png' width='60px'>
  //           <div class='score'>１−０</div>
  //           <img src='@/assets/logos/vfl_logo.png' width='60px'>
  //         </div>
  //       </div>
  //       <div class='black-cover'>
  //         <p class='card-title'>バイエルン ミュンヘン vs VfLヴォルフスブルク</p>
  //         <p class='card-text'>ブンデスリーガ第23節</p>
  //       </div>
  //     </div>
  //   </div>
})

</script>

<style scoped>

#home {
  width: 90%;
  margin: 0 auto;
}

#jumbotron{
  height: 576px;
  margin: 90px auto 30px;
  background: #fafafa;
  border-radius: 8px
}

.mov-wrap{
  background: #afafaf;
  width: 1024px;
  height: 576px;
  border-radius: 8px;
}

.nav-pills{
  background: #fafafa;
}

.nav-pills > li {
  width: 150px;
  text-align: center;
  color: #404040;
}

.nav-pills > li > a {
  color: #404040;
  transition: 0.5s;
}

.nav-pills > li > a:hover {
  background: #5cb0c5;
  color: white;
  opacity: 0.6;
}


.nav-pills > li > .active{
  background: #5cb0c5;
}

.nav-pills .nav-link {
  border-radius: 0;
}

.card-deck {
  margin:20px 0;
}

.pagination > li a {
  width: 48px;
  text-align: center;
  color: #9f9f9f;
}

.page-item.active .page-link{
  background: #afafaf;
  border-color: #afafaf;
  color: #fff;
}

.card-deck .card{
  margin: 0;
}

.card-deck .card:nth-child(2){
  margin: 0 20px;
}

.card-img-overlay{
  padding: 15px;
}


.black-cover{
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 30%;
  padding: 15px;
}

.card-text {
  font-size: 0.7rem;
}

.live-text {
  background: #DD4444;
  border-radius: 28px;
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.live-wrap{
  width: 100%;
  height: 70%;
  position: relative;
}

.live-score {
  position: absolute;
  bottom: 0;
  right: 0;
}

.score{
  display: inline;
  font-size: 1.5rem;
  vertical-align: -5px;
  font-weight: bold;
  text-shadow: black 1px 1px 2px;
}





</style>