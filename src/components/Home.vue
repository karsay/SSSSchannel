<template>
  <div id="home">
    <div id="jumbotron">
      <div class="mov-wrap"></div>
    </div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a href="#" class="nav-link active">上昇中</a>
      </li>
      <li class="nav-item" v-for="item in items" v-bind:key="item.id">
        <a href="#" class="nav-link">{{ item.message }}</a>
      </li>
    </ul>
    <div id="card-wrap">
      <div class="card-deck">
        <ThumbCard
          v-for="thumbnail in thumbnails1"
          :key="thumbnail.id"
          :title="thumbnail.title"
          :subtitle="thumbnail.subtitle"
          :cardImg="thumbnail.cardImg"
          :logo1="thumbnail.logo1"
          :logo2="thumbnail.logo2"
          :liveText="thumbnail.liveText"
          :score="thumbnail.score"
          :lived="thumbnail.lived"
        >
        </ThumbCard>
      </div>
      <div class="card-deck">
        <ThumbCard
          v-for="thumbnail in thumbnails2"
          :key="thumbnail.id"
          :title="thumbnail.title"
          :subtitle="thumbnail.subtitle"
          :cardImg="thumbnail.cardImg"
          :logo1="thumbnail.logo1"
          :logo2="thumbnail.logo2"
          :liveText="thumbnail.liveText"
          :score="thumbnail.score"
          :lived="thumbnail.lived"
        >
        </ThumbCard>
      </div>
    </div>
    <nav aria-label="Page Navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Previous Page">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">5</a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link" aria-label="Next Page">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import ThumbCard from "@/components/ThumbCard";

export default {
  name: "Home",
  components: {
    ThumbCard
  },
  data: function() {
    return {
      items: [
        { message: "NPB" },
        { message: "海外サッカー" },
        { message: "国内サッカー" },
        { message: "NBA" },
        { message: "Bリーグ" },
        { message: "アメフト" },
        { message: "テニス" },
        { message: "NHL" },
        { message: "レース" }
      ],
      thumbnails1: [
        {
          id: 1,
          title: "バイエルン ミュンヘン vs VfLヴォルフスブルク",
          subtitle: "ブンデスリーガ第23節",
          cardImg: '../../static/card1.jpg',
          logo1: '../../static/logos/byr_logo.png',
          logo2: '../../static/logos/vfl_logo.png',
          liveText: "ライブ",
          score: "１−０",
          lived: true
        },
        {
          id: 2,
          title: "日本 vs 南アフリカ",
          subtitle: "ラグビーW杯 決勝トーナメント",
          cardImg: '../../static/card2.png',
          logo1: '../../static/logos/byr_logo.png',
          logo2: '../../static/logos/vfl_logo.png',
          liveText: "ライブ",
          score: "7−０",
          lived: true
        },
        {
          id: 3,
          title: "バイエルン ミュンヘン vs VfLヴォルフスブルク",
          subtitle: "ブンデスリーガ第23節",
          cardImg: '../../static/card3.jpg',
          logo1: '../../static/logos/byr_logo.png',
          logo2: '../../static/logos/vfl_logo.png',
          liveText: "ライブ",
          score: "１−０",
          lived: true
        },
      ],
      thumbnails2: [
        {
          id: 4,
          title: "バイエルン ミュンヘン vs VfLヴォルフスブルク",
          subtitle: "ブンデスリーガ第23節",
          cardImg: '../../static/card1.jpg',
          logo1: '../../static/logos/byr_logo.png',
          logo2: '../../static/logos/vfl_logo.png',
          liveText: "ライブ",
          score: "１−０",
          lived: true
        },
        {
          id: 5,
          title: "日本 vs 南アフリカ",
          subtitle: "ラグビーW杯 決勝トーナメント",
          cardImg: '../../static/card1.jpg',
          logo1: '../../static/logos/byr_logo.png',
          logo2: '../../static/logos/vfl_logo.png',
          liveText: "ライブ",
          score: "７−０",
          lived: true
        },
        {
          id: 6,
          title: "バイエルン ミュンヘン vs VfLヴォルフスブルク",
          subtitle: "ブンデスリーガ第23節",
          cardImg: '../../static/card1.jpg',
          logo1: '../../static/logos/byr_logo.png',
          logo2: '../../static/logos/vfl_logo.png',
          liveText: "ライブ",
          score: "１−０",
          lived: true
        },
      ]
    };
  }
};

</script>

<style scoped>
#home {
  width: 90%;
  margin: 0 auto;
}

#jumbotron {
  height: 576px;
  margin: 90px auto 30px;
  background: #fafafa;
  border-radius: 8px;
}

.mov-wrap {
  background: #afafaf;
  width: 1024px;
  height: 576px;
  border-radius: 8px;
}

.nav-pills {
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

.nav-pills > li > .active {
  background: #5cb0c5;
}

.nav-pills .nav-link {
  border-radius: 0;
}

.card-deck {
  margin: 20px 0;
}

.pagination > li a {
  width: 48px;
  text-align: center;
  color: #9f9f9f;
}

.page-item.active .page-link {
  background: #afafaf;
  border-color: #afafaf;
  color: #fff;
}

</style>