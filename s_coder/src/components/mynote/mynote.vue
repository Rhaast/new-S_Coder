<template>
  <transition name="move">
    <div class="mynote" style="background-color:#FFF">
      <navheader>
        <span slot="left" class="backhome" @click="backpersonal"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></span>
        <span slot="main_title" class="shou">My Note</span>
      </navheader>
      <div class="get-mynote">
        <div class="content-wrappers">
          <div class="wrapper-top">
            <div class="myportrait"><img src="../../assets/logo.png" height="55" width="55"></div>
            <h1>{{getziliaos.nickName}}</h1>
          </div>
        </div>
        <div class="content-wrappers1" ref="contents">
          <div class="wrapper-scorll">
            <div class="wrapper-top" v-for = "list in noteLists">
              <h2 class="title">{{list.title}}</h2>
              <p class="content">{{list.content}}</p>
            </div>
            <div class="no-note" v-show="!noteLists">暂无笔记</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style type="text/css">
.move-enter-active,
.move-leave-active {
  transition: all 0.2s linear;
  transform: translate3d(0%, 0, 0);
}

.move-enter,
.move-leave-active {
  transform: translate3d(-100%, 0, 0);
}

.header-wrapper {
  background: none;
}

.backhome {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 12px;
  height: 32px;
  margin-top: -16px;
}
.wrapper-scorll{
	width: 100%;

}
.no-note{
	text-align: center;
	margin-top: 50%;
	font-size: 16px;
	color: #999;
}
.mynote {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  background: url(../../assets/mynote_bg.png);
  background-repeat: no-repeat;
  background-size: 100% 227px;
}

.get-mynote {
  width: 100%;
}

.content-wrappers {
  padding: 0 12px;
  width: 100%;
  border-bottom: 2px solid #000;
  position: none;
}

.content-wrappers1 {
  padding: 0 12px;
  width: 100%;
  position: absolute;
  overflow: hidden;
  height: 100%;

}

.content-wrappers .wrapper-top .myportrait {
  border-radius: 50%;
  width: 55px;
  height: 55px;
  border: 2px solid #000;
  margin-top: 20px;
}

.content-wrappers1 .wrapper-top h2 {
  font-size: 14px;
  color: #000;
  font-weight: 600;
  line-height: 25px;
  margin-top: 7px;
}

.content-wrappers1 .wrapper-top .content {
  font-size: 14px;
  color: #999;
  width: 100%;
  line-height: 16px;
  margin-top: 2px;
  display: block;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 18px;
}

.content-wrappers .wrapper-top .myportrait img {
  border-radius: 50%;
}

.content-wrappers .wrapper-top h1 {
  font-size: 30px;
  color: #5272f9;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 5px;
  margin-top: 33px;
  padding-bottom: 48px;
}

</style>
<script type="text/javascript">
import navheader from "../navheader/navheader"
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      noteLists: [],
    }
  },
  created() {
    this.getMeans();

  },

  mounted() {
    this.getMynote();
          this._initScroll()

  },
  methods: {
    backpersonal() {
      this.$router.go(-1);
    },
    _initScroll() {
      this.Scroll = new BScroll(this.$refs.contents, {
        click: true
      })
      this.Scroll.on('touchend',(pos) => {
      	if(pos.y>50) {
      	}

      })
    },
    getMeans() {
      let that = this
      let menasDatas = JSON.parse(localStorage.getItem('data'));
      that.getziliaos = menasDatas.detail;
      that.userId = menasDatas.detail.id;
      that.nickName = menasDatas.detail.nickName;
      console.log(this.userId)

    },
    getMynote() {
      let that = this;
      axios({
        url: 'http://xyiscoding.top/studyapp/note/findByUserId/' + this.userId,
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.noteLists = response.data.detail;
        this.$nextTick(() => {
          this._initScroll()
        })
      })

    }
  },
  components: {
    navheader
  }
}

</script>
