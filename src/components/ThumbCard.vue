<template>
  <div class='card'>
    <img class='card-img-top' :src="cardImg" alt='Card image cap' height="300px">
    <div class='card-img-overlay'>
      <div class='live-wrap'>
        <div class='live-text'>{{liveText}}</div>
        <div class='live-score'>
          <img :src="logo1" width='60px'>
          <div class='score'>{{score}}</div>
          <img :src="logo2" width='60px'>
        </div>
      </div>
      <div class='black-cover'>
        <p class='card-title'>{{title}}</p>
        <p class='card-text'>{{subtitle}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

.card-deck .card {
  margin: 0;
}

.card-deck .card:nth-child(2) {
  margin: 0 20px;
}

.card-img-overlay {
  padding: 15px;
}

.black-cover {
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
  background: #dd4444;
  border-radius: 28px;
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.live-wrap {
  width: 100%;
  height: 70%;
  position: relative;
}

.live-score {
  position: absolute;
  bottom: 0;
  right: 0;
}

.score {
  display: inline;
  font-size: 1.5rem;
  vertical-align: -5px;
  font-weight: bold;
  text-shadow: black 1px 1px 2px;
}
</style>

