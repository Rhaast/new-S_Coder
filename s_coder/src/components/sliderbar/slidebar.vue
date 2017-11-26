<template>
  <div>
    <transition name="move">
      <div class="slide" v-show="showSlide">
        <div class="SlideWrapper">
          <div class="myportrait"><img src="../../assets/logo.png" height="80" width="80"></div>
          <ul class="list">
            <li @click="personal"><span class="icon"></span><span class="txt">个人主页</span></li>
            <li @click="addnote"><span class="icon"></span><span class="txt">发笔记</span></li>
            <li @click="addquestion"><span class="icon"></span><span class="txt">提问题</span></li>
            <li><span class="icon"></span><span class="txt">消息</span></li>
            <li><span class="icon"></span><span class="txt">我参与的</span></li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="scheme" v-if="showSlide" @click="hideSlide"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSlide: false,

    }
  },
  methods: {
    come() {
      this.showSlide = true
    },
    hideSlide() {
      this.showSlide = false
    },
    personal() {
      this.$router.push('/personal');
      this.showSlide = false

    },
    addnote() {
      this.$router.push('./addnote');
    },
    addquestion() {
      this.$router.push('./addquestion');
    }
  }
}

</script>
<style scoped>
.slide {
  background: rgb(255, 255, 255);
  z-index: 30;
  width: 70%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.2s linear;
  transform: translate3d(0%, 0, 0);
}

.move-enter,
.move-leave-active {
  transform: translate3d(-100%, 0, 0);
}

.scheme {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
}

.SlideWrapper {
  height: 100%;
  margin: 12px 12px 0 12px;
}

.SlideWrapper .myportrait {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 2px solid #000;
  margin: 0 auto;
  margin-top: 40px
}

.SlideWrapper .myportrait img {
  border-radius: 50%
}

.SlideWrapper .list {
  font-size: 12px;
  color: #000;
  font-weight: 700;
  padding-top: 24px;
  text-align: center;
}
.SlideWrapper .list li{
  line-height: 40px;
}
</style>
