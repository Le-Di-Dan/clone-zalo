<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class="container">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 9999;
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ring {
  width: 100px;
  height: 100px;
  border: 0px solid #ffffff;
  border-radius: 50%;
  position: absolute;
}
.ring:nth-child(1) {
  border-bottom-width: 4px;
  border-color: #ff0000;
  animation: rotate1 1s linear infinite;
}

.ring:nth-child(2) {
  border-top-width: 4px;
  border-color: #00ff00;
  animation: rotate2 1s linear infinite;
}

.ring:nth-child(3) {
  border-right-width: 4px;
  border-color: #0000ff;
  animation: rotate3 1s linear infinite;
}
@keyframes rotate1 {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate3 {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
