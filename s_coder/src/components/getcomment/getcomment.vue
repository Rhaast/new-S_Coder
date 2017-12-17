<template>
  <div>
    <div class="comment" v-for="rating in commentLists">
    <router-link :to="{path:'/nestedreview/',query: {table:rating}}">
      <span class="nickName">{{rating.commentUser}}<span v-show="!rating.pId">:</span><span class="replys" v-show="rating.pId" style="color:#999"> 回复 </span></span><span class="nickName" v-show="rating.pId">{{rating.pId}}: </span><span class="comment-content">{{rating.content}}</span>
      <br>
     </router-link>
    </div>
  </div>
</template>
<style type="text/css">
.comment {
  width: 100%;
}
.comment-content {
  font-size: 12px;
  line-height: 20px;
}
.nickName{
	font-size: 12px;
	color:#5272f9;
}
#replys:{
  color: #666;

}

</style>
<script type="text/javascript">
import axios from 'axios'
export default {
  props: {
    detail: Object,

  },
  data() {
    return {
      commentLists: [],
    }
  },
  created() {
    this.getcomment();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getcomment"
  },
  methods: {
    getcomment() {
      let that = this
      that.user = this.comment
      that.id = this.detail.id
      axios({
        url: 'http://xyiscoding.top/studyapp/note/findById/' + that.id, // 传入userId获取自己的数据
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.commentLists = response.data.detail.comment.reverse();     
      })

    },
      getlocal() { // 先获取当前数据，需传入的id
      let that = this;
      let localmessage = JSON.parse(localStorage.getItem('data'));
      that.id = localmessage.detail.id;
      that.nickName = localmessage.detail.nickName;
      that.userName = localmessage.detail.userName;
    },
  }
}

</script>
