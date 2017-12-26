<template>
  <transition name="move">
    <div class="mynotedetail">
      <navheader>
        <span slot="left" class="backhome" @click="backmynote"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></span>
        <span slot="main_title" class="shou">My Note</span>
      </navheader>
      <div class="detailwrapper">
        <div class="getnotedetail">
          <span class="title">{{noteLists.title}}</span>
          <br>
          <span class="content">{{noteLists.content}}</span>
          <br>
          <span class="detailcreateTime">{{noteLists.createTime | time}}</span>
        </div>
      </div>
      <div class="commentarea">
        <h2 class="commentTitle">评论:</h2>
        <div class="comment" v-for="rating in commentLists">
          <span class="nickName">{{rating.commentUser}}<span v-show="!rating.pId">:</span><span class="replys" v-show="rating.pId" style="color:#999"> 回复 </span></span><span class="nickName" v-show="rating.pId">{{rating.pId}}: </span><span class="comment-content">{{rating.content}}</span>
          <br>
        </div>
        <div class="nocomments" v-show="commentLists.length==0">暂无评论</div>
      </div>
    </div>
  </transition>
</template>
<style type="text/css">
.mynotedetail {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  background: #fff;
  background-repeat: no-repeat;
  background-size: 100% 227px;
}

.detailwrapper {
  padding: 0 12px;
  width: 100%;
}

.nocomments {
  text-align: center;
  margin-top: 40%;
  font-size: 16px;
  color: #999;
}
.commentarea {
  padding: 0 12px;
  width: 100%;
}

.commentTitle {
  font-size: 14px;
  color: #000;
  font-weight: 600;
  line-height: 25px;
  margin-top: 7px;
  margin-bottom: 10px;
}

.detailwrapper .getnotedetail {
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 20px;
}

.detailcreateTime {
  color: #999;
  font-size: 12px;
  line-height: 24px;
}

.backhome {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 12px;
  height: 32px;
}

.shou {
  font-size: 16px;
  display: inline-block;
  color: #000;
}

.title {
  font-size: 14px;
  color: #000;
  font-weight: 600;
  line-height: 25px;
  margin-top: 7px;
}

.content {
  font-size: 14px;
  color: #999;
  width: 100%;
  line-height: 16px;
  margin-top: 2px;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

</style>
<script type="text/javascript">
import navheader from '../navheader/navheader'
import axios from 'axios'
export default {
  data() {
    return {
      noteLists: {},
      commentLists: [],
    }
  },
  created: function() {
    this.getmynote();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getmynote"
  },
  // activated() {      // 禁止keep-alive缓存
  //   this.getmynote();     
  // },
  methods: {
    backmynote() {
      this.$router.go(-1);
    },
    getmynote() {
      // alert("111");  //  弹框调试是否调用
      let that = this // 取得笔记id
      let id = this.$route.query.id;
      that.noteid = id;
      axios({
        url: 'http://xyiscoding.top/studyapp/note/findById/' + that.noteid,
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.noteLists = response.data.detail.note;
        that.commentLists = response.data.detail.comment.reverse();
        console.log(this.commentLists)
      })
    }

  },
  components: {
    navheader
  }
}

</script>
