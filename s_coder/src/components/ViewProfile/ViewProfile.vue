<template>
 <transition name="move">
  <div>
  <div class="backarrow1" @click="back"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></div>
    <div class="personal-content" ref="personalContent">
      <div class="contents">
        <img src="../../assets/personal_bg.png" height="255" width="100%">
        <div class="overview">
          <div class="overview-wrapper">
            <h2 class="username">{{backmessage.nickName}}</h2>
            <p class="saysay">{{backmessage.personSign}}</p>
            <img :src="'http://xyiscoding.top/img/'+backmessage.portrait" class="myportrait" height="80" width="80">
            <div class="job">
              <img class="sex" src="../../assets/sex.png" height="15" width="15">
              <span>UI设计师</span>
            </div>
            <br>
            <ul class="remark">
              <li class="block">
                <h2 class="title">连续签到:</h2>
                <div class="content">
                  <span class="stress">{{backmessage.signCount}}</span>
                </div>
              </li>
              <li class="block">
                <h2 class="title">得分:</h2>
                <div class="content">
                  <span class="stress">{{backmessage.score}}</span>
                </div>
              </li>
              <li class="block">
                <h2 class="title">等级:</h2>
                <div class="content">
                  <span class="stress">{{backmessage.level}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>
<style type="text/css" scoped>
.move-enter-active,
.move-leave-active {
  transition: all 0.2s linear;
  transform: translate3d(0%, 0, 0);
}

.move-enter,
.move-leave-active {
  transform: translate3d(100%, 0, 0);
}
.backarrow1{
  position: absolute;
  left: 12px;
  top:6px;
  z-index: 110
}
.personal-content {
  position: absolute;
  bottom: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  z-index: 30;
  background: rgb(255,255,255);
}

.overview {
  font-size: 0;
  position: absolute;
  top: 74px;
  width: 100%;
}

.contents {
  position: absolute;
  height: 590px;
  width: 100%;
}

.overview-wrapper {
  padding: 0 12px;
  border-bottom: 2px solid #000
}

.overview-wrapper .tishi {
  font-size: 14px;
  color: #5272f9;
  display: block;
  padding-bottom: 22px;
  line-height: 22px;
}

.overview .username {
  font-size: 30px;
  font-weight: 700;
  color: #5272f9;
  letter-spacing: 5px;
}
.overview .saysay {
  font-size: 12px;
  color: #999;
  margin-top: 18px;
}

.overview .myportrait {
  border: 2px solid #000;
  margin-top: 60px;
  background: #fff;
  width: 80px;
}
.overview .job {
  margin-top: 10px
}

.overview .job img {
  display: inline-block;
  vertical-align: top
}

.overview .job span {
  font-size: 12px;
  color: #999;
  display: inline-block;
  margin-left: 5px;
}

.overview .remark {
  display: flex;
  width: 100%;
  margin-top: 33px;
  margin-bottom: 38px;
}

.overview .remark .block {
  flex: 1;
  text-align: center
}

.overview .remark .block .title {
  color: #5272f9;
  font-size: 14px;
}

.overview .remark .block .stress {
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-top: 17px;
  display: block;
}
</style>
<script type="text/javascript">
import BScroll from 'better-scroll'
import axios from 'axios'
import login from '../login/login'
import portriat from '../portrait/portriat'
export default {
  data() {
    return {
      scrollY: 0,
      backmessage:{}
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getmypersons"
  },
  created() {
    this.getmypersons();
  },
  mounted() {
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    getmypersons(){ // 请求个人资料 
      let that = this;  
      let commentData = this.$route.query.table;
      that.userId = commentData.userId;
      axios({
        url: 'http://xyiscoding.top/studyapp/user/findById/' + this.userId, // 传入userId获取自己的数据
        dataType: 'json',
        method: 'get',
        }).then((response) => {
        that.backmessage = response.data.detail;
        that.portrait = that.backmessage.portrait;
        console.log(this.userId);
      })  
    },
    _initScroll: function() {
      this.scroll = new BScroll(this.$refs.personalContent, {
        click: true
      })
      // this.scroll.on('scroll', (pos) => {
      //   console.log(pos.y)
      // })
    },
  }
}

</script>
