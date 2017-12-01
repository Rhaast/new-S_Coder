<template>
	<div>
		<h2>分类</h2>
		<input type="text" placeholder="请输入" @keyup.13="show($event)">
	</div>
</template>
<script type="text/javascript">
	export default{
		           methods:{
                    show:function(ev){
                        if(window.localstorage==null){
                            alert('你按回车键了');
                            console.log(localstorage)
                        }
                    },
                }
	}
</script>