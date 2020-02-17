<template>
  <div id="live">
    <div id="main-wrap">
      <div id="mov-wrap">
      </div>
    </div>
    <div id="bbs-wrap"></div>
  </div>
</template>

<script>
export default {
  name: 'live'
}
</script>

<style scoped>
#live {
  width: 95%;
  margin: 0 auto;
  min-height: 1000px;
}

#main-wrap {
  background: #fafafa;
  width: 100%;
  height: 85vh;
  margin: 90px 0 30px ;
  border-radius: 8px;
}

#bbs-wrap {
  background: #fafafa;
  width: 100%;
  height: 85vh;
  border-radius: 8px;
}

#mov-wrap{
  height: 486px;
  width: 864px;
  background: #afafaf;
}
</style>