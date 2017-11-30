<template>
  <div>
    <slidebar :slidebar="findeSlide" ref="slidebar"></slidebar>
    <login :login="findedLogin" ref="login"></login>
    <div class="header">
      <navheader>
        <span slot="left" class="icon_slider" @click="findeSlide"><img src="../../assets/icon-slidebar.png" height="19" width="16"></span>
        <span slot="main_title" class="shou">Home</span>
        <span slot="right" class="deng" @click="findeLogin">{{loginText}}</span>
      </navheader>
    </div>
    <div class="banner">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="data in list">
          <img v-bind:src="data.src">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="get-content" ref="contents">
      <div class="content-wrapper">
        <div v-for="detail in details" class="position">
          <div class="left">
            <img v-bind:src="detail.portrait" height="40" width="40">
          </div>
          <div class="right">
            <span class="type">{{detail.userName}}</span>
            <h2 class="title">{{detail.title}}</h2>
            <span class="answer" v-show="detail.content">我的回复</span></br>
            <span class="reply">{{detail.content}}</span></br>
            <span class="time">{{detail.createTime}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.icon_slider {
  display: inline-block;
  position: absolute;
  left: 12px;
  padding: 12px 0;
}

.shou {
  font-size: 18px;
  display: inline-block;
  color: #000
}

.deng {
  font-size: 15px;
  display: inline-block;
  position: absolute;
  right: 12px;
  color: #5272f9;
}

.banner {
  height: 150px;
}

.mint-swipe-item img {
  background-size: cover;
  width: 100%;
  height: 100%;
}

.get-content {
  display: flex;
  position: absolute;
  bottom: 48px;
  top: 198px;
  width: 100%;
  overflow: hidden;
}

.position {
  margin: 12px 12px 0 12px;
  border-bottom: 1px solid #d1d1d1;
}

.content-wrapper {
  font-size: 0;
  position: absolute;
  width: 100%;
}

.left {
  width: 40px;
  height: 40px;
  display: inline-block;
  vertical-align: top
}

.right {
  width: 284px;
  display: inline-block;
  margin-left: 12px;
}

.right .type {
  font-size: 12px;
  color: #c9c9c9;
  display: block;
  margin-bottom: 10px
}

.right .title {
  font-size: 14px;
  color: #000;
  font-weight: 700;
  margin-bottom: 3px
}

.right .answer {
  font-size: 12px;
  color: #000;
  font-weight: 600;
  line-height: 28px;
  display: block;
  margin-top: 3px
}

.right .reply {
  font-size: 12px;
  color: #000;
  line-height: 17px;
  display: block;
  margin-top: 2px
}

.right .time {
  font-size: 12px;
  color: #c9c9c9;
  margin: 6px 0 8px 0;
  display: block;
  line-height: 16px;
}

</style>
<script>
import login from '../login/login'
import slidebar from '../sliderbar/slidebar'
import navheader from '../navheader/navheader'
import BScroll from 'better-scroll'
import axios from 'axios'
const ERR_OK = 0;
export default {
  data() {
    return {
      details: [],
      list: [
        { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511157202087&di=d6ec0d0f94836dd54f3f5e51d902c782&imgtype=0&src=http%3A%2F%2Fwww.yixieshi.com%2Fuploads%2Fallimg%2F110127%2F09414I229-0.gif%3FimageView2%2F2%2Fw%2F720%2Fh%2F300%2Finterlace%2F1' },
        { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511157202087&di=d6ec0d0f94836dd54f3f5e51d902c782&imgtype=0&src=http%3A%2F%2Fwww.yixieshi.com%2Fuploads%2Fallimg%2F110127%2F09414I229-0.gif%3FimageView2%2F2%2Fw%2F720%2Fh%2F300%2Finterlace%2F1' },
        { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511157202087&di=d6ec0d0f94836dd54f3f5e51d902c782&imgtype=0&src=http%3A%2F%2Fwww.yixieshi.com%2Fuploads%2Fallimg%2F110127%2F09414I229-0.gif%3FimageView2%2F2%2Fw%2F720%2Fh%2F300%2Finterlace%2F1' },
        { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511157202087&di=d6ec0d0f94836dd54f3f5e51d902c782&imgtype=0&src=http%3A%2F%2Fwww.yixieshi.com%2Fuploads%2Fallimg%2F110127%2F09414I229-0.gif%3FimageView2%2F2%2Fw%2F720%2Fh%2F300%2Finterlace%2F1' }
      ],
      scrollY: 0
    }
  },
  mounted() {
    this.getArticle();
    this.$nextTick(() => {
      this.initScroll();
    })
  },
  computed: {
    loginText() {
      return this.favorite ? '登录' : '注销'
    }
  },
  methods: {
    _initScroll() {
      this.Scroll = new BScroll(this.$refs.contents, {
        click: true
      })
    },
    getArticle: function() {
      let that = this;
      axios({
        url: 'http://xyiscoding.top/studyapp/note/findAll',
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.details = response.data.detail;
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    findedLogin() {
      
    },
    findeLogin() {
      this.$refs.login.show()
    },
    findeSlide() {
      this.$refs.slidebar.come()
    }
  },
  components: {
    navheader,
    login,
    slidebar
  }
}

</script>
