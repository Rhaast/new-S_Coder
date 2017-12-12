<template>
  <div>
    <transition name="move">
      <div class="slide" v-show="showSlide">
        <div class="SlideWrapper">
          <div class="myportrait">
            <img src="../../assets/logo.png" height="80" width="80">
            <span class="nickName">{{nickName}}</span>
          </div>
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
      nickName:'',

    }
  },
  created(){
    this.getlocal();

  },
    watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getlocal"
  },
  methods: {
    getlocal() {
      let that = this;
      let localmessage = JSON.parse(localStorage.getItem('data'));
      that.nickName = localmessage.detail.nickName;   // 获取昵称
    },
    come() {
      this.showSlide = true;
    },
    hideSlide() {
      this.showSlide = false;
    },
    personal() {
      this.$router.push('/personal');
      location.reload();
      this.showSlide = false;

    },
    addnote() {
      this.$router.push('./addnote');
      this.showSlide = false;
    },
    addquestion() {
      this.$router.push('./addquestion');
      this.showSlide = false;
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
  text-align: center;
  font-size: 24px;
  color: #5272f9;
  margin-top: 40px
}

.SlideWrapper .myportrait img {
  border-radius: 50%
}

.SlideWrapper .myportrait .nickName {}

.SlideWrapper .list {
  font-size: 14px;
  color: #000;
  font-weight: 700;
  padding-top: 40px;
  text-align: center;
}

.SlideWrapper .list li {
  line-height: 40px;
}

.SlideWrapper .list li .txt:active {
  color: #5272F9;
}

</style>
