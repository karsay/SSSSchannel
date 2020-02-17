import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isActive:0,
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
          bbsImg: '../../static/bbsImgs/card1.jpg',
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
          title: '日本VS南アフリカ　実況板',
          commentCnt: '167',
          bbsImg: '../../static/bbsImgs/japan.png',
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
          bbsImg: '../../static/bbsImgs/card1.jpg',
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
      ]
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