<template>
  <div id="mov-wrap">
    <img :src="img" width="864px" height="486px">
  </div>
</template>

<script>
export default {
  props: {
    isActive: Intl
  },
  data: function(){
    return{
      img: `../../static/livemoves/card${this.isActive}.jpg`
    }
  }
}
</script>

<style scoped>
#mov-wrap{
  height: 486px;
  width: 864px;
  background: #afafaf;
  border-radius: 8px;
}

img{
  object-fit: cover;
  border-radius: 8px;
}

</style>