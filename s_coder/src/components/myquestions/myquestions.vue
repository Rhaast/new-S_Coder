<template>
	<transition name="move">
  <div class="mynote" style="background-color:#FFF">
    <navheader>
      <span slot="left" class="backhome" @click="backpersonal"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></span>
      <span slot="main_title" class="shou">My Questions</span>
    </navheader>
    <div class="get-mynote">
      <div class="content-wrappers">
        <div class="wrapper-top">
          <div class="myportrait"><img src="../../assets/logo.png" height="55" width="55"></div>
          <h1>Rhaast</h1>
        </div>
      </div>
      <div class="content-wrappers1">
        <div class="wrapper-top">
          <h2 class="title">wdadasd asd </h2>
          <p class="content">全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。</p>
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

.mynote {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  background: url(../../assets/myquestions_bg.png);
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
  position:none;
}

.content-wrappers1 {
  padding: 0 12px;
  width: 100%;
}
.wrapper-top {
  border-bottom: 1px solid #e6e6e6;
}
.content-wrappers .wrapper-top .myportrait {
  border-radius: 50%;
  width: 55px;
  height: 55px;
  margin-top: 20px;
}
.content-wrappers1 .wrapper-top h2{
	font-size: 14px;
	color: #000;
	font-weight: 600;
	line-height: 25px;
	margin-top: 7px;
} 
.content-wrappers1 .wrapper-top .content{
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
.content-wrappers .wrapper-top .myportrait img {
  border-radius: 50%;
   border: 2px solid #000;
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
export default {
  data() {
    return {

    }
  },
  // mounted(){
  // 	this.getmynote();
  // },
  methods:{
  	backpersonal() {
  		this.$router.go(-1);
  	},
  	// getmynote() {
  	// 	let that = this;
  	// 	axios({
  	// 		url:'http://xyiscoding.top/studyapp/note/findAll',
  	// 		dataType:json,
  	// 		method:get,
  	// 	}).then((response) => {
   //      that.details = response.data.detail;
   //      this.$nextTick(() => {
   //        this._initScroll()
   //      })
   //    })

  	// }
  },
  components: {
    navheader
  }
}

</script>
