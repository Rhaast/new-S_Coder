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
            <div class="refresh" v-show="showfresh"><img src="../../assets/image/loading-spinning-bubbles.svg"></div>
            <div class="wrapper-top setIndex" v-for="list in noteLists">
              <router-link :to="{path:'/mynotedetail/',query: {id:list.id}}">
                <h2 class="title">{{list.title}}</h2>
                <p class="content">{{list.content}}</p>
                <span class="nickName">{{getziliaos.nickName}}</span> <span class="createTime">{{list.createTime | time}}</span>
              </router-link>
            </div>
            <div class="no-note" v-show="!noteLists">暂无笔记</div>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>
<style type="text/css">
.refresh {
  text-align: center;
  font-size: 12px;
  margin-top: 12px;
  color: #999
}
.setIndex{
  position:relative;
  z-index: 9999;
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

.wrapper-scorll {
  width: 100%;
  min-height: 500px;
  position:relative;
  z-index: 9999;
}

.no-note {
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
  top: 255px;
  overflow: hidden;
  bottom: 0;
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

.wrapper-top {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 18px;
}

.content-wrappers1 .wrapper-top .content {
  font-size: 14px;
  color: #999;
  width: 100%;
  line-height: 16px;
  margin-top: 2px;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.content-wrappers1 .wrapper-top span{
  color: #999;
  font-size: 12px;
  line-height: 24px;
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
      id: '',
      showfresh: false,
      click: true,
      scrollFlag: true,
    }
  },
  created() {
    this.getMeans();

  },
  mounted() {
    this.getMynote();

  },
  methods: {
    backpersonal() {
      this.$router.push('/personal');
    },
    _initScroll:function() {
      if(this.meunScroll ){
        this.meunScroll.destroy()
      }
      this.meunScroll = new BScroll(this.$refs.contents, {
        click: true,
        probeType: 3
      })
      this.meunScroll.on("scroll", function(pos) { // 当下拉到超过顶部 30px 时执行这个函数  
        if(pos.y>30){
          if(this.scrollFlag){
            this.scrollFlag = false;
            setTimeout(() => {
            this.noteLists =[]; 
            this.getMynote();
            }, 1500);
            this.$nextTick(function() {
              this.showfresh = true;
            });
        }
        }
      }.bind(this));
      this.meunScroll.on("scrollEnd", (pos) => { // 当下拉到超过顶部 30px 时执行这个函数  
        this.scrollFlag = true;
      });
          this.showfresh = false;
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
        url: 'http://xyiscoding.top/studyapp/note/findByUserId/'+this.userId,
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
