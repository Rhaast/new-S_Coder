<template>
  <div>
    <slidebar ref="slidebar"></slidebar>
    <login ref="login"></login>
    <doublemodal v-show='mdShow'>
      <div slot="doublemd-close" class="doublemd-close" @click="remove"><img src="../../assets/icon_close.png" height="20" width="20"></div>
      <p slot="doublemessage">
        是否确定退出登录
      </p>
      <div slot="doublebtnGroup" class="btngroup">
        <a class="btn1" @click="logout">确定</a>
        <a class="btn2" @click="remove">取消</a>
      </div>
    </doublemodal>
    <div class="md-overlay" v-if="mdShow" @click="remove"></div>
    <div class="backTop" @click="backTop">
      <img src="../../assets/image/top_arrow.svg">
    </div>
    <div class="header">
      <navheader>
        <span slot="left" class="icon_slider" @click="findeSlide"><img src="../../assets/icon-slidebar.png" height="19" width="16"></span>
        <span slot="main_title" class="shou">Home</span>
        <span slot="right" class="deng" @click="findeLogin">{{loginText}}</span>
      </navheader>
    </div>
    <div class="banner">
      <mt-swipe>
        <mt-swipe-item v-for="(list,idx) in piclist" :key="idx">
          <img v-bind:src="list.picUrl" @click="hrefAddress(idx)"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="get-content" ref="contents">
      <div class="content-wrapper">
        <div class="refresh" v-show="showfresh"><img src="../../assets/image/loading-spinning-bubbles.svg"></div>
        <div v-for="(detail,index) in details" class="position">
          <div class="left">
            <router-link :to="{path:'/ViewProfile',query: {table:detail}}">
              <getportrait :detail="detail"></getportrait>
            </router-link>
          </div>
          <div class="right">
            <h2 class="title">{{detail.title}}</h2>
            <!-- <span class="answer" v-show="detail.content">我的回复</span></br> -->
            <span class="homecontent" @click="gonotedetail(detail)">{{detail.content}}</span>
            <span class="type">{{detail.userName}}</span> <span class="time">{{detail.createTime | dateFrm}}</span>
            <span class="commentNum">{{detail.commentNum}}</span>
            <img src="../../assets/image/comment.svg" @click="gonotedetail(detail)">
            <!-- <getcomment :detail="detail" ref="getcomment"></getcomment> -->
          </div>
        </div>
        <div class="tishi1" v-show="tishi1">{{loadTop}}</div>
        <div class="refresh" v-show="showfresh1"><img src="../../assets/image/loading-spinning-bubbles.svg"></div>
      </div>
    </div>
  </div>
</template>
<style>
.refresh {
  text-align: center;
  font-size: 12px;
  margin-top: 12px;
  color: #999
}

.tishi1 {
  text-align: center;
  font-size: 12px;
  margin-top: 12px;
  color: #999
}

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

.backTop {
  background: #5272f9;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 12px;
  right: 12px;
  border-radius: 50%;
  z-index: 5;
  box-shadow: 0px 6px 15px #d1d1d1
}

.backTop img {
  padding: 15px;
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
  bottom: 0;
  top: 198px;
  width: 100%;
  overflow: hidden;
}

.position {
  margin: 12px 12px 0 12px;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
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
  vertical-align: top;
}

.right {
  display: inline-block;
  margin-left: 12px;
  width: 85%;
  word-wrap: break-word
}

.right .type {
  color: #999;
  font-size: 12px;
  line-height: 24px;
}

.right .title {
  font-size: 14px;
  color: #000;
  font-weight: 700;
  color: #000;
  display: block;
  margin-bottom: 6px
}

.right .homecontent {
  font-size: 14px;
  color: #999;
  width: 100%;
  line-height: 16px;
  margin-top: 2px;
  display: inline-block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.right .answer {
  font-size: 12px;
  color: #000;
  font-weight: 600;
  line-height: 28px;
  display: block;
  margin-top: 3px
}

.right img {
  display: inline-block;
  /*margin-left: auto*/
  /*使元素靠右排列*/
  float: right;
  margin-bottom: 10px;
}
.right .commentNum{
  font-size: 12px;
    display: inline-block;
  /*margin-left: auto*/
  /*使元素靠右排列*/
  float: right;
  margin-bottom: 10px;
  margin-right: 12px;
  color: #5272f9

}
.right .kuang {
  width: 100%;
  height: 25px;
  border: 1px solid #d1d1d1;
  margin: 12px 0;
}

.right .kuang span {
  font-size: 12px;
  line-height: 20px;
  padding-left: 6px;
}

.right .reply {
  font-size: 12px;
  color: #000;
  line-height: 17px;
  display: block;
  margin-top: 2px
}

.right .time {
  color: #999;
  font-size: 12px;
  line-height: 24px;
  margin-left: 5px;
}

</style>
<script>
let flag = true;
import login from '../login/login'
import slidebar from '../sliderbar/slidebar'
import navheader from '../navheader/navheader'
import doublemodal from '../doublemodal/doublemodal'
import BScroll from 'better-scroll'
import axios from 'axios'
import getcomment from '../getcomment/getcomment'
import getportrait from '../getportrait/getportrait'
import moment from 'moment'

const ERR_OK = 0;
export default {
  data() {
    return {
      pageNo: 0, // 总共27页
      pageSize: 10,
      details: [],
      loginText: '登录',
      mdShow: false,
      showfresh: false,
      showfresh1: false,
      BSy: 0,
      click: true,
      scrollFlag: true,
      tishi1: true,
      loadTop: '上拉加载更多',
      piclist: [],
      scrollY: 0,
      detail: {},
      address:['https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=3884932&g_f=shoujijiaodian',
      'https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=533732',
      'http://y.qq.com/w/album.html?albummid=001eyHlv2fu50T',
      'http://y.qq.com/w/album.html?albummid=003z9kma13yhja',
      'https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=522730']
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll();
    })
    console.log(this.$refs);
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getArticle"
  },
  mounted() {
    this.getArticle();
    this.$nextTick(() => {
      this._initScroll();
      if (localStorage.getItem('data')) {
        this.loginText = '注销'
      }
      if (!localStorage.getItem('data')) {
        this.loginText = '登录'
      }
    })
    this.getMeans();
    this.getbanner();
  },
  // computed:{
  //   loginText(){
  //     return this.login ? '登录' : '注销'
  //   }
  // },
  methods: {
    backTop() {
      this._initScroll();
    },
    hrefAddress(idx){
      //address 后台获取需要跳转的地址 这里先用固定的了
      location.href=this.address[idx]
    },
    _initScroll: function() {
      if (this.meunScroll) {
        this.meunScroll.destroy()
      }
      this.meunScroll = new BScroll(this.$refs.contents, {
        click: true,
        probeType: 3,
        scrollbar: true,
        pullUpLoad: {
          threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
        }
      })
      // 监听下拉刷新
      this.meunScroll.on("scroll", function(pos) { // 当下拉到超过顶部 30px 时执行这个函数  
        if (pos.y > 30) {
          if (this.scrollFlag) {
            this.scrollFlag = false;
            setTimeout(() => {
              this.loadTop = '上拉加载更多'
              this.noteLists = [];
              this.pageNo = 0;
              flag = false;
              this.getArticle();
              for (let i = 0; i < this.details.length; i++) { // 循环调用v-for中子组件的方法
                this.$refs.getcomment[i].getcomments();
                // console.log(this.$refs.getcomment[i])
              }
            }, 1500);
            this.$nextTick(function() {
              this.showfresh = true;
            });
          }
        }
      }.bind(this));
      // 监听上拉加载
      this.meunScroll.on("pullingUp", function() { // 当上拉到超过顶部 30px 时执行这个函数  
        if (this.scrollFlag) {
          this.scrollFlag = false;
          setTimeout(() => {
            flag = true;
            this.noteLists = [];
             this.pageNo++;
            this.getArticle();
            for (let i = 0; i < this.details.length; i++) { // 循环调用v-for中子组件的方法
              this.$refs.getcomment[i].getcomments();
              // console.log(this.$refs.getcomment[i])
            }
          }, 1500);
          this.$nextTick(function() {
            this.showfresh1 = true;
            this.tishi1 = false;
          });
        }
      }.bind(this));
      this.meunScroll.on("scrollEnd", (pos) => { // 当上拉下拉加载结束时执行这个函数  
        this.BSy = pos.y;
        this.scrollFlag = true;
      });
      this.showfresh = false;
      this.showfresh1 = false;
      this.tishi1 = true;
    },
    getArticle: function() { // 获取首页所有笔记
      let that = this;
      axios({
        url: 'http://xyiscoding.top/studyapp/note/findAll',
        dataType: 'json',
        method: 'post',
        data: {
          "pageNo": this.pageNo, // 总共27页
          "pageSize": this.pageSize
        }
      }).then((response) => {
        if (flag) { // 定义一个全局变量，默认为true
          that.griddata = response.data.detail;
          let len = that.griddata.length // 每次加载显示的条数可在length的基础上增加减少
          if (len < this.pageSize) {
            this.loadTop = '没有更多数据了';
          }
          for (let i = 0; i < len; i++) {
            that.details.push(that.griddata[i]); // push数据到griddata，用于上拉加载
          }
        } else {
          that.details = response.data.detail; //  正常获取数据，用于下拉刷新
        } //逼我的
        this.$nextTick(() => {
          this._initScroll() // 请求数据时重新计算
        })
        setTimeout(() => {
          this.meunScroll.scrollTo(0, this.BSy)
        }, 500)
      })
    },
    getbanner() { // 获取banner图片
      let that = this;
      axios({
        url: '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=33239429&uin=240400696&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1516669743233/',
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.piclist = response.data.data.slider;
        console.log(this.piclist)
      })
    },
    findedLogin() {

    },
    getMeans() {
      let that = this
      let menasDatas = JSON.parse(localStorage.getItem('data'));
    },

    findeLogin() {
      if (this.loginText == '注销') {
        this.mdShow = true;

      } else {
        this.$refs.login.show()
      }

    },
    logout() { //注销登录
      localStorage.removeItem('data'); // 清空localstorage数据
      location.reload();
    },
    remove() {
      this.mdShow = false;
    },
    findeSlide() {
      this.$refs.slidebar.come()
    },
    comment(detail) {
      this.$router.push({ path: '/comment', query: { table: detail } })
    },
    gonotedetail(detail) {
      this.$router.push({ path: '/mynotedetail', query: { id: detail.id } })

    }

  },
  filters: { //转换时间戳
    dateFrm: function(createTime) {
      // moment.locale('zh-cn'); //转换日期为中文
      return moment(createTime).fromNow();
    }
  },
  components: {
    navheader,
    login,
    slidebar,
    doublemodal,
    getcomment,
    getportrait

  }
}

</script>
