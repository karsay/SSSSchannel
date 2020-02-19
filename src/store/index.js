import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isActive:0,
    activeBbs:0,
    bbss: [
      [
        {
          bbsId:0,
          title: 'バイエルン対ヴォルフスブルグ実況板',
          commentCnt: '226',
          bbsImg: '../../static/bbsImgs/byr_logo.png',
        },
        {
          bbsId:1,
          title: '【緊急速報】バイエルン・ミュンヘン優勝！！！！',
          commentCnt: '26',
          bbsImg: '../../static/bbsImgs/byr_logo.png',
        },
        {
          bbsId:2,
          title: 'レヴァンドフスキのこのゴールwwwwwwww',
          commentCnt: '31',
          bbsImg: '../../static/bbsImgs/card0.jpg',
        },
        {
          bbsId:3,
          title: 'ニートだけど1年で早慶目指すわ',
          commentCnt: '1',
          bbsImg: '../../static/bbsImgs/noimage.png',
        },
        {
          bbsId:4,
          title: 'バイエルン、シャルケGKニューベルの来夏加入を発表…移籍金は発生せず',
          commentCnt: '63',
          bbsImg: '../../static/bbsImgs/nyuber.jpeg',
        },
        {
          bbsId:5,
          title: 'CLの組み合わせ発表wwwwwwww',
          commentCnt: '104',
          bbsImg: '../../static/bbsImgs/cl.jpg',
        },
        {
          bbsId:6,
          title: 'ドルトムント絶好調、ヴォルフスブルクに10戦無敗で首位を守る　公式戦15試合で無敗クラブ記録を更新',
          commentCnt: '31',
          bbsImg: '../../static/bbsImgs/dort.jpg',
        }
      ],
      [
        {
          bbsId:0,
          title: '【実況】ラグビーW杯 日本vs南アフリカpart2',
          commentCnt: '167',
          bbsImg: '../../static/bbsImgs/japan.png',
        },
        {
          bbsId:1,
          title: '2010南アフリカW杯の時の日本代表のスタメンwywyw',
          commentCnt: '2',
          bbsImg: '../../static/bbsImgs/m_africa.jpg',
        },
        {
          bbsId:2,
          title: '2015年日本vs南アフリカをフルで見る方法ないか',
          commentCnt: '31',
          bbsImg: '../../static/bbsImgs/bbs_2.png',
        },
        {
          bbsId:3,
          title: '南アフリカ優勝で日本の株が上がるラッキーｗｗｗｗｗｗｗｗｗｗ',
          commentCnt: '2',
          bbsImg: '../../static/bbsImgs/bbs_1.jpg',
        },
        {
          bbsId:4,
          title: 'ラグビー日本代表 Part388',
          commentCnt: '876',
          bbsImg: '../../static/bbsImgs/729598.jpg',
        },
        {
          bbsId:5,
          title: '日本のラグビーがプロ化出来ない理由ｗｗｗｗ',
          commentCnt: '1',
          bbsImg: '../../static/bbsImgs/japan.png',
        },
      ],
      [
        {
          bbsId:0,
          title: '【ATPファイナル】フェデラーvsジョコビッチ',
          commentCnt: '167',
          bbsImg: '../../static/bbsImgs/bbs_3.jpg',
        }
      ],
      [
        {
          bbsId:0,
          title: '【Jリーグ】横浜FCvsヴィッセル神戸【第23節】',
          commentCnt: '167',
          bbsImg: '../../static/bbsImgs/bbs_3.jpg',
        }
      ],
      [
        {
          bbsId:0,
          title: 'NBAファイナル レイカーズｖｓセルティックス　第4戦',
          commentCnt: '167',
          bbsImg: '../../static/bbsImgs/bbs_4.jpg',
        }
      ],
      [
        {
          bbsId:0,
          title: '【BS1】マリナーズ×エンジェルス',
          commentCnt: '167',
          bbsImg: '../../static/bbsImgs/card5.jpg',
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