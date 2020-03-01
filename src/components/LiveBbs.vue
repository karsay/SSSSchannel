<template>
  <div id="bbs-wrap">
    <div class="title-icon" />
    <div class="bbs-title">{{title}}</div><br>
    <p>タグ</p>
    <ul class="tags">
      <li v-for="tag in tags" v-bind:key="tag.index">
        {{tag}}
      </li>
    </ul>
    <ul class="lists" style="list-style-type: none" ref="target">
     <boardlist v-for="list in lists"
      :name="list.name"
      :message="list.message"
      :date="list.date"
      :num="list.num"
      :team="list.team"
      :img="list.team"
      :selectTeamColor="list.team_color"
      v-bind:key="list.index">
     </boardlist>
   </ul>
    <boardform></boardform>
  </div>
</template>

<script>
import boardform from '@/components/LiveBoardForm'
import boardlist from '@/components/LiveBoardList'
import {db} from '../main.js'

export default {
  data: function() {
    return {
      title:this.$store.state.bbss[this.isActive][this.isActiveBbs].title,
      name:'testUser',
      message: '',
      date: '',
      lists: [],
      tags: this.$store.state.bbss[this.isActive][this.isActiveBbs].tags
    }
  },
  firestore() {
    return {
      // lists: db.collection(this.$store.state.l_collection).orderBy('date'),
      lists: db.collection(`game${this.isActive}-${this.isActiveBbs}`).orderBy('date')
    }
  },
  props: {
    isActive: Intl,
    isActiveBbs: Intl
  },
  methods: {
    scrollToEnd() {
      this.$nextTick(() => {
        const chatLog = this.$refs.target
        if (!chatLog) return
        chatLog.scrollTop = chatLog.scrollHeight
      })
    }
  },
  updated() {
    this.scrollToEnd()
  },
  components: {
    boardform,
    boardlist
  }
}


</script>

<style scoped>
#bbs-wrap{
  width: 700px;
  height: 800px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #404040;
}
.bbs-title{
  display: inline-block;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
  margin: 10px
}
.title-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: transparent linear-gradient(136deg, #6294A2 0%, #58C3DD 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  margin-bottom: 2px;
  margin-left: 10px;
}

p{
  display: inline;
  margin-left: 20px;
}

.tags {
  display: inline-block;
  padding-left: 10px;
}

.tags > li{
  display: inline-block;
  color: #00BAFF;
  cursor: pointer;
  margin-left: 5px;
}

.tags > li::before{
  content: '#';
}

.lists{
  /* background: antiquewhite; */
  height: 540px;
  overflow-y: scroll;
  padding-right: 40px;

}

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    box-shadow: 0 0 1px rgba(255,255,255,.5);
}

</style>