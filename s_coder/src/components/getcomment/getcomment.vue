<template>
  <div>
    <div class="comment" v-for="rating in commentLists">
      <span class="nickName">{{rating.userName}}: </span><span class="comment-content">{{rating.content}}</span>
      <br>
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

</style>
<script type="text/javascript">
import axios from 'axios'
export default {
  props: {
    detail: {
      type: Object
    }
  },
  data() {
    return {
      commentLists: []
    }
  },
  created() {
    // console.log(this.detail.id)
    this.getcomment();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getcomment"
  },
  methods: {
    getcomment() {
      let that = this
      that.id = this.detail.id
      axios({
        url: 'http://xyiscoding.top/studyapp/note/findById/' + that.id, // 传入userId获取自己的数据
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.commentLists = response.data.detail.comment;
        console.log(commentLists)
      })

    },
  }
}

</script>
