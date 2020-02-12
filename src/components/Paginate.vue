<template>
  <div id="pagination">
    <ul>
      <li v-for="item in getItems" v-bind:key="item.index">{{item}}</li>
    </ul>
    <paginate
      :page-count="getPageCount"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'＜'"
      :next-text="'＞'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    ></paginate>
  </div>
</template>

<script>

import Paginate from 'vuejs-paginate'
export default {
  components: {
    Paginate
  },
  data: function(){
    return {
     items: items,
     parPage: 6,
     currentPage: 1
    }

    },
   methods: {
    clickCallback: function (pageNum) {
       this.currentPage = Number(pageNum);
    }
   },
   computed: {
     getItems: function() {
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.items.slice(start, current);
     },
     getPageCount: function() {
      return Math.ceil(this.items.length / this.parPage);
     }
   }
}

var items = [];
for(var i=1; i < 105; i++){
  items.push('item-'+i);
}


</script>

<style scoped>

</style>