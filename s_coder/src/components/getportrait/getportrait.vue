<template>
  <div>
    <img :src="'http://xyiscoding.top/img/'+portrait" height="40" width="40">
  </div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
  props: {
    detail: Object,
  },
  data() {
    return {
      backmessage: {},
      portrait: ''

    }
  },
  created() {
    this.getUserId();
  },
  activated() { // 禁止keep-alive缓存
    this.getUserId();
  },
  methods: {
    getUserId() {
      let that = this;
      that.userId = this.detail.userId;
      axios({
        url: 'http://xyiscoding.top/studyapp/user/findById/' + this.userId, // 传入userId获取自己的数据
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.backmessage = response.data.detail;
        that.portrait = response.data.detail.portrait;
      })
    }
  }
}

</script>
