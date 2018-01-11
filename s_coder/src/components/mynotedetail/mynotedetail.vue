<template>
  <transition name="move">
    <div class="mynotedetail">
      <navheader>
        <span slot="left" class="backhome" @click="backmynote"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></span>
        <span slot="main_title" class="shou">My Note</span>
      </navheader>
      <div class="detailwrapper" ref="contentss">
        <div class="getnotedetail">
          <div class="notecontent">
            <span class="title">{{noteLists.title}}</span>
            <br>
            <mavon-editor class="getmavoneditor" :toolbarsFlag='false' :default_open="default_open" :subfield="false" v-model="noteLists.content" />
            <br>
            <span class="detailcreateTime">{{noteLists.createTime | dateFrm}}</span>
          </div>
          <div class="commentarea" :class="{getcomment:isgetcomment}">
            <h2 class="commentTitle">评论:</h2>
            <div class="comment" v-for="rating in commentLists">
              <span class="nickName">{{rating.commentUser}}<span v-show="!rating.pId">:</span><span class="replys" v-show="rating.pId" style="color:#999"> 回复 </span></span><span class="nickName" v-show="rating.pId">{{rating.pId}}: </span><span class="comment-content">{{rating.content}}</span>
              <br>
            </div>
            <div class="nocomments" v-show="commentLists.length==0">暂无评论</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style type="text/css">
.v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
  padding: 0 !important;
  background: none !important;
}

.v-note-wrapper .v-note-panel {
  box-shadow: none !important;
}

.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-input-wrapper {
  padding: 0 !important;
}

.getmavoneditor {
  margin-top: 20px;
  border: none;
  height: none;
}

.v-note-wrapper {
  min-height: 0 !important;
  z-index: 0
}

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
  position: absolute;
  top: 48px;
  overflow: hidden;
  bottom: 0;
}

.nocomments {
  text-align: center;
  margin-top: 40%;
  font-size: 16px;
  color: #999;
}

.commentarea {
  width: 100%;
  min-height: 360px;
}

.getcomment {
  min-height: 100px;
}

.notecontent {
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 20px;
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
  width: 100%;
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
  margin-top: -16px;
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
import moment from 'moment'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      noteLists: {},
      commentLists: [],
      scrollY: 0,
      default_open: 'preview',
      isgetcomment: false,
      scrollY: 0,
    }
  },
  created: function() {
    this.getmynote();
    this.$nextTick(() => {
      this._initScrolls()
    })
  },
  activated() { // 禁止keep-alive缓存
    this.getmynote();
  },
  methods: {
    _initScrolls: function() {
      if (this.meunScroll) {
        this.meunScroll.destroy()
      }
      this.meunScroll = new BScroll(this.$refs.contentss, {
        click: true,
        probeType: 3
      })
    },
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
        this.$nextTick(() => {
          this._initScrolls()
        })
      })
    }

  },
  filters: { //转换时间戳
    dateFrm: function(createTime) {
      // moment.locale('zh-cn'); //转换日期为中文
      return moment(createTime).fromNow();
    }
  },
  components: {
    navheader
  }
}

</script>
