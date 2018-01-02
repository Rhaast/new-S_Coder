<template>
  <div>
    <portriat :portriat="toupload" ref="portriat" @refreshList="getmypersons"></portriat>
    <login :login="Tologin" ref="login"></login>
    <vue-checkin :checkin="checkInData" @checkIn="checkIn" @setMonth="getCheckInData" ref="showcheckIn" :beckmessage="backmessage"></vue-checkin>
    <div class="personal-content" ref="personalContent">
      
      <div class="contents">
         <div class="backarrow2" @click="godecrease"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></div>
        <img src="../../assets/personal_bg.png" height="255" width="100%">
        <div class="overview">
          <div class="overview-wrapper">
            <h2 class="username" @click='Tochangenickname'>{{backmessage.nickName}}</h2>
            <p class="saysay" @click='TochangepersonSign'>{{backmessage.personSign}}</p>
            <img :src="'http://xyiscoding.top/img/'+portrait" class="myportrait" height="80" width="80" @click='toupload'>
            <div class="SignIn" @click="SignIn"><img class="Signicon" src="../../assets/image/SignIn.png" height="18" width="78">
              <span class="Signtxt" @click="showcheck">签到</span>
            </div>
            <div class="job" v-show="showjob">
              <img class="sex" src="../../assets/sex.png" height="15" width="15">
              <span>UI设计师</span>
            </div>
            <br>
            <span class="tishi" v-show="tishi">当前未登录</span>
            <ul class="remark" v-if="showjob">
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
          <div class="schedule-wrapper">
            <h2 class="title">我的日程</h2>
            <ul class="remark1">
              <li class="block1">
                <img class="icon" src="../../assets/note.png" height="40" width="40" />
                <br>
                <span class="stress1" @click="Tologin">我的笔记</span>
              </li>
              <li class="block1">
                <img class="icon" src="../../assets/answer.png" height="40" width="40" />
                <br>
                <span class="stress1" @click="Tologin1">我的提问</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="top" class="popup">
      当前未登录
    </mt-popup>
  </div>
</template>
<style type="text/css" scoped>
.personal-content {
  position: absolute;
  bottom: 48px;
  top: 0;
  overflow: hidden;
  width: 100%
}
.backarrow2{
  position: absolute;
  left: 12px;
  top:8px;
  z-index: 99
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

.overview .Signicon {
  display: inline-block;
}

.overview .SignIn {
  display: block;
  position: absolute;
  right: -20px;
  top: 150px;
}

.overview .Signtxt {
  font-size: 12px;
  position: absolute;
  left: 20px;
  vertical-align: middle;
  display: inline-block;
  vertical-align: middle;
  margin-top: 2px;
  color: #fff;
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

.overview .schedule-wrapper {
  height: 100px;
  padding: 0 12px;
  margin-top: 20px;
}

.overview .schedule-wrapper .title {
  color: #5272f9;
  font-size: 18px;
  font-weight: 700
}

.overview .schedule-wrapper .remark1 {
  display: flex;
  margin-top: 30px
}

.overview .schedule-wrapper .remark1 .block1 {
  flex: 1;
  text-align: center
}

.overview .schedule-wrapper .remark1 .block1 .icon {
  margin-bottom: 20px;
}

.overview .schedule-wrapper .remark1 .block1 .stress1 {
  font-size: 12px;
  color: #333;
  border: 2px solid #000;
  padding: 6px 25px;
  border-radius: 9px;
  margin-top: 15px;
}

</style>
<script type="text/javascript">
import BScroll from 'better-scroll'
import axios from 'axios'
import login from '../login/login'
import portriat from '../portrait/portriat'
import VueCheckin from '../../components/vuecheckin/vue-checkin'
export default {
  data() {
    return {
      popupVisible: false,
      checkInData: [

      ],
      scrollY: 0,
      showjob: false,
      tishi: false,
      backmessage: {},
      portrait: ''
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getmypersons"
  },
  created() {
    this.getmypersons();
    this.getCheckInData();

  },
  mounted() {
    if (localStorage.getItem('data')) {
      this.showjob = true;
    }
    if (!localStorage.getItem('data')) {
      this.tishi = true;
      this.portrait = '1513837065438.jpg'
    }
  },
  components: {
    login,
    portriat,
    VueCheckin
  },
  methods: {
    showcheck() {
      if (localStorage.getItem('data')) {
        this.$refs.showcheckIn.show();
      }
      if (!localStorage.getItem('data')) {
        this.popupVisible = true
        setTimeout(() => {
          this.popupVisible = false

        }, 2000);
      }
    },
    godecrease(){
      this.$router.go(-1)
    },
    checkIn() { //这里是你自己的签到方法。
      axios({
        url: 'http://xyiscoding.top/studyapp/sign/add/' + this.userId,
        dataType: 'json',
        method: 'post',
      }).then(res => {
        console.log(res.data)
        if (res.data.result == '200') {
          this.$message({
            showClose: true,
            type: 'success'
          })
          alert('签到成功')
          this.$refs.showcheckIn.hidden();
        } else {

        }
      })
      //你的查询签到记录方法在签到后再次查询
    },
    getCheckInData(date, times) { //你的按月份查询签到记录方法，取得后将值赋值给this.checkInData   日期格式:2017/9
      console.log(date) //最好将这个年和月保存起来，上面签到方法执行后再次查询当月的签到记录
      console.log(times) //最好将这个年和月保存起来，上面签到方法执行后再次查询当月的签到记录
      let that = this
      axios({
        url: 'http://xyiscoding.top/studyapp/sign/findByUser/' + this.userId, // 传入userId获取自己的签到数据
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.checkIndata = response.data.detail;
        for (let i = 0; i < this.checkIndata.length; i++) {
          that.month = that.checkIndata[i].month; // 获取数组中的月份
          that.day = that.checkIndata[i].day; // 获取数组中的日
          that.y = new Date()
          console.log(this.y.getFullYear()) //获取年份
          console.log(this.month)
          console.log(this.day)
          that.time = this.y.getFullYear() + '-' + this.month + '-' + this.day; // 组合日期
          this.checkInData[i] = { time: that.time } //给return里的checkInData数组赋值
          console.log(this.checkInData)
        }

        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    getmypersons() { // 请求个人资料   
      let that = this
      let menasDatas = JSON.parse(localStorage.getItem('data')); //取得localStorage数据
      that.userId = menasDatas.detail.id
      // console.log(this.userId)
      axios({
        url: 'http://xyiscoding.top/studyapp/user/findById/' + this.userId, // 传入userId获取自己的数据
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.backmessage = response.data.detail;
        that.portrait = that.backmessage.portrait;
        // that.userName = that.backmessage.userName;
        // that.personSign = that.backmessage.personSign;
        // that.level = that.backmessage.level;
        // that.portrait = that.backmessage.portrait;
        // that.score = that.backmessage.score;
        // that.signCount = that.backmessage.signCount;
        let temp = JSON.parse(localStorage.getItem('data'));
        temp.detail = this.backmessage;
        localStorage.setItem('data', JSON.stringify(temp)); // 请求成功重新提交以更改localstorge里的数据
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    SignIn() {},
    _initScroll: function() {
      if (this.scroll) {
        return;
      }
      this.scroll = new BScroll(this.$refs.personalContent, {
        click: true
      })
      // this.scroll.on('scroll', (pos) => {
      //   console.log(pos.y)
      // })
    },
    Tologin() {
      if (localStorage.getItem('data')) {
        this.$router.push('/mynote')
      }
      if (!localStorage.getItem('data')) {
        this.$refs.login.show()
      }
    },
    Tochangenickname() {
      this.$router.push('/changenickname')
    },
    TochangepersonSign() {
      this.$router.push('/changepersonSign')
    },
    Tologin1() {
      if (localStorage.getItem('data')) {
        this.$router.push('/myquestions')
      }
      if (!localStorage.getItem('data')) {
        this.$refs.login.show()
      }
    },
    toupload(event) {
      if (!localStorage.getItem('data')) {
        this.$refs.login.show()
      } else {
        this.$refs.portriat.file();


      }
    }
  }
}

</script>
