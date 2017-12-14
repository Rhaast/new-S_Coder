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
      <mt-swipe>
        <mt-swipe-item v-for="(list,idx) in piclist" :key="idx">
          <img v-bind:src="list.url" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="get-content" ref="contents">
      <div class="content-wrapper">
        <div class="refresh" v-show="showfresh"><img src="../../assets/image/loading-spinning-bubbles.svg"></div>
        <div v-for="detail in details" class="position">
          <div class="left">
            <img src="../../assets/logo.png" height="40" width="40">
          </div>
          <div class="right">
            <h2 class="title">{{detail.title}}</h2>
            <!-- <span class="answer" v-show="detail.content">我的回复</span></br> -->
            <span class="homecontent">{{detail.content}}</span>
            <span class="type">{{detail.userName}}</span> <span class="time">{{detail.createTime | time}}</span>
            <img src="../../assets/image/comment.svg" @click="comment">
            <div class="kuang" @click="comment"><span>评论</span></div>
          </div>
        </div>
        <div class="tishi1" v-show="tishi1">上拉加载更多</div>
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
  vertical-align: top
}

.right {
  display: inline-block;
  margin-left: 12px;
  width: 100%;
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
  display: block;
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
  display: block;
  /*margin-left: auto*/  /*使元素靠右排列*/
  float: right;
}
.right .kuang{
  width: 100%;
  height:25px;
  border: 1px solid #d1d1d1;
  margin:12px 0;
  

}
.right .kuang span{
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
import BScroll from 'better-scroll'
import axios from 'axios'
const ERR_OK = 0;
export default {
  data() {
    return {
      pageNo: 1, // 总共27页
      pageSize: 10,
      details: [],
      loginText: '登录',
      mdShow: false,
      showfresh: false,
      showfresh1: false,
      BSy: 0,
      click: true,
      scrollFlag: true,
      tishi: true,
      list: {
        "src": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511157202087&di=d6ec0d0f94836dd54f3f5e51d902c782&imgtype=0&src=http%3A%2F%2Fwww.yixieshi.com%2Fuploads%2Fallimg%2F110127%2F09414I229-0.gif%3FimageView2%2F2%2Fw%2F720%2Fh%2F300%2Finterlace%2F1',
        "src": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513323735&di=201b3a8ab53f1fd42dbbb3d60d90b8ab&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b7b055e4000632f875a1325fe072.jpg%401280w_1l_2o_100sh.jpg',
        "src": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511157202087&di=d6ec0d0f94836dd54f3f5e51d902c782&imgtype=0&src=http%3A%2F%2Fwww.yixieshi.com%2Fuploads%2Fallimg%2F110127%2F09414I229-0.gif%3FimageView2%2F2%2Fw%2F720%2Fh%2F300%2Finterlace%2F1',
        "src": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511157202087&di=d6ec0d0f94836dd54f3f5e51d902c782&imgtype=0&src=http%3A%2F%2Fwww.yixieshi.com%2Fuploads%2Fallimg%2F110127%2F09414I229-0.gif%3FimageView2%2F2%2Fw%2F720%2Fh%2F300%2Finterlace%2F1'
      },
      piclist: [],
      scrollY: 0
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll();
    })
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "_initScroll"
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
    comment() {
      this.$router.push('/comment')
    },
    _initScroll: function() {
      if (this.meunScroll) {
        this.meunScroll.destroy()
      }
      this.meunScroll = new BScroll(this.$refs.contents, {
        click: true,
        probeType: 3,
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
              this.noteLists = [];
              flag = false;
              this.getArticle();
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
            this.getArticle();
            this.pageNo++;
          }, 1500);
          this.$nextTick(function() {
            this.showfresh1 = true;
            this.tishi1 = false;
          });
        }
      }.bind(this));
      this.meunScroll.on("scrollEnd", (pos) => { // 当上拉加载结束时执行这个函数  
        this.BSy = pos.y;
        this.scrollFlag = true;
      });
      this.meunScroll.on("finishPullUp", () => {
        this.meunScroll.destroy()
      });
      this.showfresh = false;
      this.showfresh1 = false;
      this.tishi1 = true;
    },
    getArticle: function() { // 获取首页所有笔记提问
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
          for (let i = 0; i < len; i++) {
            // if (this.len <= 0) {
            //   break;
            // }
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
        url: 'http://xyiscoding.top/studyapp/banner/findAll',
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.piclist = response.data.detail;
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
        localStorage.removeItem('data'); // 清空localstorage数据
        location.reload();
      }
      this.$refs.login.show()
    },
    findeSlide() {
      this.$refs.slidebar.come()
    },

  },
  components: {
    navheader,
    login,
    slidebar,

  }
}

</script>
