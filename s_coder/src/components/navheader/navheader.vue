<template>
  <div>
    <div class="header-wrapper">
      <slot name="left"></slot>
      <slot name="main_title"></slot>
      <slot name="right"></slot>
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
	background:#fff
	color:#fff
	text-align:center		
</style>
<script>

export default {
  data() {
    return {
     
    }
  },
  methods: {
 
  },
  components: {
  
  }

}

</script>
