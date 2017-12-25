<template>
	<div>
		<img :src="'http://xyiscoding.top/img/'+portrait" height="40" width="40">
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
	export default{
		props: {
   			 detail: Object,
         },
		data() {
			return {
				backmessage: {},
				portrait:''

			}
		},
		created(){
			this.getUserId();
		},
		  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getUserId"
  },
		methods:{
			getUserId(){
	         let that = this;
             that.userId = this.detail.userId;
             axios({
             url: 'http://xyiscoding.top/studyapp/user/findById/' + this.userId, // 传入userId获取自己的数据
             dataType: 'json',
             method: 'get',
             }).then((response) => {
        	that.backmessage = response.data.detail;
        	that.portrait = that.backmessage.portrait;
      })
			}
		}
	}
</script>