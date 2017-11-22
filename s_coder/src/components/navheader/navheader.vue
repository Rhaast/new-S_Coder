<template>
	<div>
		<div class="header-wrapper">
			<h1 class="title">Home</h1>
			<span class="login" @click="findeLogin">登录</span>
			<login :login="findedLogin" ref="login"></login>
		</div>
		
	</div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.header-wrapper
	height:48px
	width:100%
	line-height:48px
	font-size:0
	position:relative	
	background:#5272f9
	color:#fff
	text-align:center
	.title
		font-size:18px
		display:inline-block
	.login
		font-size:15px
		display:inline-block
		position:absolute
		right:12px
		
	
		
		
		
</style>
<script>
import login from '../login/login'
export default {
  data() {
    return {
     
    }
  },
  methods: {
    findeLogin() {
      this.$refs.login.show()
    },
  },
  components: {
    login
  }

}

</script>
