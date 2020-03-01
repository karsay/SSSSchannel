import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isActive:0,
    activeBbs:0,
    l_gaugeValue: 50,
    l_userName: 'testUser',
    // l_collection: 'game1',
    bbss: [
      [
        {
          bbsId:0,
          title: 'バイエルン対ヴォルフスブルグ実況板',
          commentCnt: '226',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/byr_logo.png',
          tags: ['海外サッカー', 'バイエルン', 'ヴォルフスブルグ', '実況'],
          teamImg1: '../../static/logos/byr_logo.png',
          teamImg2: '../../static/logos/vfl_logo.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        },
        {
          bbsId:1,
          title: '【緊急速報】バイエルン・ミュンヘン優勝！！！！',
          commentCnt: '26',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/byr_logo.png',
          tags: ['海外サッカー', 'バイエルン'],
          teamImg1: '../../static/bbsImgs/byr_logo.png',
          teamImg2: '../../static/bbsImgs/vfl_logo.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        },
        {
          bbsId:2,
          title: 'レヴァンドフスキのこのゴールwwwwwwww',
          commentCnt: '31',
          latestComment: 'ヤバすぎ',
          bbsImg: '../../static/bbsImgs/card0.jpg',
          tags: ['海外サッカー', 'バイエルン', 'ヴォルフスブルグ'],
          teamImg1: '../../static/bbsImgs/byr_logo.png',
          teamImg2: '../../static/bbsImgs/vfl_logo.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        },
        {
          bbsId:3,
          title: 'ニートだけど1年で早慶目指すわ',
          commentCnt: '1',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/noimage.png',
          tags: ['雑談', 'バイエルン'],
          teamImg1: '../../static/bbsImgs/byr_logo.png',
          teamImg2: '../../static/bbsImgs/vfl_logo.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        },
        {
          bbsId:4,
          title: 'バイエルン、シャルケGKニューベルの来夏加入を発表…移籍金は発生せず',
          commentCnt: '63',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/nyuber.jpeg',
          tags: ['海外サッカー', 'バイエルン', 'シャルケ', '移籍'],
          teamImg1: '../../static/bbsImgs/byr_logo.png',
          teamImg2: '../../static/bbsImgs/vfl_logo.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        },
        {
          bbsId:5,
          title: 'CLの組み合わせ発表wwwwwwww',
          commentCnt: '104',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/cl.jpg',
          tags: ['海外サッカー', 'バイエルン', 'CL'],
          teamImg1: '../../static/bbsImgs/byr_logo.png',
          teamImg2: '../../static/bbsImgs/vfl_logo.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        },
        {
          bbsId:6,
          title: 'ドルトムント絶好調、ヴォルフスブルクに10戦無敗で首位を守る　公式戦15試合で無敗クラブ記録を更新',
          commentCnt: '31',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/dort.jpg',
          tags: ['海外サッカー', 'ドルトムント', 'ヴォルフスブルグ', 'ブンデスリーガ'],
          teamImg1: '../../static/bbsImgs/byr_logo.png',
          teamImg2: '../../static/bbsImgs/vfl_logo.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        }
      ],
      [
        {
          bbsId:0,
          title: '【実況】ラグビーW杯 日本vs南アフリカpart2',
          commentCnt: '167',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/japan.png',
          tags: ['ラグビー', '日本代表', '南アフリカ', 'ワールドカップ'],
          teamImg1: '../../static/logos/japan.png',
          teamImg2: '../../static/logos/africa.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        },
        {
          bbsId:1,
          title: '2010南アフリカW杯の時の日本代表のスタメンwywyw',
          commentCnt: '2',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/m_africa.jpg',
        },
        {
          bbsId:2,
          title: '2015年日本vs南アフリカをフルで見る方法ないか',
          commentCnt: '31',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/bbs_2.png',
        },
        {
          bbsId:3,
          title: '南アフリカ優勝で日本の株が上がるラッキーｗｗｗｗｗｗｗｗｗｗ',
          commentCnt: '2',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/bbs_1.jpg',
        },
        {
          bbsId:4,
          title: 'ラグビー日本代表 Part388',
          commentCnt: '876',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/729598.jpg',
        },
        {
          bbsId:5,
          title: '日本のラグビーがプロ化出来ない理由ｗｗｗｗ',
          commentCnt: '1',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/japan.png',
        },
      ],
      [
        {
          bbsId:0,
          title: '【ATPファイナル】フェデラーvsジョコビッチ',
          commentCnt: '167',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/bbs_3.jpg',
          tags: ['テニス', 'フェデラー', 'ジョコビッチ', 'ATP'],
          teamImg1: '../../static/logos/fede.png',
          teamImg2: '../../static/logos/joko.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['red', 'green', 'black']
        }
      ],
      [
        {
          bbsId:0,
          title: '【Jリーグ】横浜FCvsヴィッセル神戸【第23節】',
          commentCnt: '167',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/card3.jpg',
          tags: ['Jリーグ', '横浜 FC', 'ヴィッセル神戸', 'イニエスタ'],
          teamImg1: '../../static/logos/ykfc.png',
          teamImg2: '../../static/logos/koube.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['dodgerblue', 'maroon', 'black']
        }
      ],
      [
        {
          bbsId:0,
          title: 'NBAファイナル レイカーズｖｓセルティックス　第4戦',
          commentCnt: '167',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/bbs_4.jpg',
          tags: ['NBA', 'レイカーズ', 'セルティックス', 'NBAファイナル'],
          teamImg1: '../../static/logos/lake.png',
          teamImg2: '../../static/logos/seti.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['gold', 'green', 'black']
        }
      ],
      [
        {
          bbsId:0,
          title: '【BS1】マリナーズ×エンジェルス',
          commentCnt: '167',
          latestComment: 'きたああああああああああああ',
          bbsImg: '../../static/bbsImgs/card5.jpg',
          tags: ['MLB', 'マリナーズ', 'エンジェルス', '大谷翔平'],
          teamImg1: '../../static/logos/sea.png',
          teamImg2: '../../static/logos/ange.png',
          teamImg3: '../../static/logos/no-team.png',
          teamColor: ['blue', 'red', 'black']
        }
      ],
    ]
  },
  mutations: {
    updateIsActive(state, payload) {
      state.isActive = payload.isActive
    }
  }
})

// store.commit('updateIsActive', {
//   isActive: 1
// })

export default store