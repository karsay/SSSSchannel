<template>
  <div id="home">
    <Jumbotron
      :isActive="isSelect"
    ></Jumbotron>
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
          :id="thumbnail.id"
          :title="thumbnail.title"
          :subtitle="thumbnail.subtitle"
          :cardImg="thumbnail.cardImg"
          :logo1="thumbnail.logo1"
          :logo2="thumbnail.logo2"
          :liveText="thumbnail.liveText"
          :score="thumbnail.score"
          :lived="thumbnail.lived"
          :noticeText="thumbnail.noticeText"
        >
        </ThumbCard>
      </div>
      <div class="card-deck">
        <ThumbCard
          v-for="thumbnail in thumbnails2"
          :key="thumbnail.id"
          :id="thumbnail.id"
          :title="thumbnail.title"
          :subtitle="thumbnail.subtitle"
          :cardImg="thumbnail.cardImg"
          :logo1="thumbnail.logo1"
          :logo2="thumbnail.logo2"
          :liveText="thumbnail.liveText"
          :score="thumbnail.score"
          :lived="thumbnail.lived"
          :noticeText="thumbnail.noticeText"
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
    <!-- <Paginate></Paginate> -->
  </div>
</template>

<script>
import Vue from "vue";
import ThumbCard from "@/components/ThumbCard";
import Jumbotron from "@/components/Jumbotron";
// import Paginate from "@/components/Paginate";

export default {
  name: "Home",
  components: {
    ThumbCard,
    Jumbotron
    // Paginate
  },
  data: function() {
    return {
      isSelect: 1,
      items: [
        { message: "NPB" },
        { message: "海外サッカー" },
        { message: "国内サッカー" },
        { message: "NBA" },
        { message: "Bリーグ" },
        { message: "アメフト" },
        { message: "テニス" },
        { message: "NHL" },
        { message: "MLB" }
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
          lived: true,
        },
        {
          id: 2,
          title: "日本 vs 南アフリカ",
          subtitle: "ラグビーW杯 決勝トーナメント",
          cardImg: '../../static/card2.jpg',
          logo1: '../../static/logos/japan.png',
          logo2: '../../static/logos/africa.png',
          liveText: "ライブ",
          score: "０−７",
          lived: true,
        },
        {
          id: 3,
          title: "ロジャー・フェデラー vs ノヴァク・ジョコビッチ",
          subtitle: "ATPワールドツアー・ファイナル",
          cardImg: '../../static/card3.jpg',
          logo1: '',
          logo2: '',
          liveText: "",
          score: "",
          lived: false,
          noticeText:"10月10日10:00試合開始"
        },
      ],
      thumbnails2: [
        {
          id: 4,
          title: "横浜FC vs ヴィッセル神戸",
          subtitle: "Jリーグ第23節",
          cardImg: '../../static/card4.jpg',
          logo1: '',
          logo2: '',
          liveText: "",
          score: "",
          lived: false,
          noticeText:"10月11日18:00試合開始"
        },
        {
          id: 5,
          title: "ロサンゼルス レイカーズ vs ボストン セルティックス",
          subtitle: "NBA FINAL",
          cardImg: '../../static/card5.jpg',
          logo1: '',
          logo2: '',
          liveText: "",
          score: "",
          lived: false,
          noticeText:"10月13日9:00試合開始"
        },
        {
          id: 6,
          title: "ロサンゼルス エンゼルス vs シアトル マリナーズ",
          subtitle: "ブンデスリーガ第23節",
          cardImg: '../../static/card6.jpg',
          logo1: '',
          logo2: '',
          liveText: "",
          score: "",
          lived: false,
          noticeText:"10月14日12:00試合開始"
        },
      ]
    };
  },

};

</script>

<style scoped>
#home {
  width: 90%;
  margin: 0 auto;
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