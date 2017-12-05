<template>
  <div>
    <div id="content">
      <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
    <div class="tab">
      <div class="tab-item" @click="toggle('home')">
        <router-link to="/home">
          <span class="icon" :class="homeCheck==true?'homeCheck':'home'" id="home"></span>
          <span>首页</span>
        </router-link>
        </div>
      <div class="tab-item" @click="toggle('type')">
        <router-link to="/type"> 
          <span class="icon" :class="typeCheck==true?'typeCheck':'type'" id="type"></span>
          <span>分类</span>
        </router-link>
      </div>
      <div class="tab-item" @click="toggle('personal')">
        <router-link to="/personal">
          <span class="icon" :class="personalCheck==true?'personalCheck':'personal'" id="personal"></span>
          <span>个人中心</span>
        </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        homeCheck: false,
        typeCheck: false,
        personalCheck: false
      }
    },
  created (){
    // this.$router.push('/home')     //  初始ip跳转路由
    this.$nextTick(()=>{
      this.toggle(this.$route.path.substring(1))
    })
  },
  methods:{
    toggle(e){
      this.homeCheck = false;
      this.typeCheck = false;
      this.personalCheck = false;
      if(e=='home'){
        this.homeCheck = !this.homeCheck
      }
      else if(e=='type'){
        this.typeCheck = !this.typeCheck
      }else{
        this.personalCheck = !this.personalCheck
      }
      // var element = document.getElementById(e)
      // var arr = ['home','type','personal']
      // var temp = 0;
      // for(var i = 0 ; i < arr.length ; i ++){
      //   if(e == arr[i]){
      //     temp = i;
      //   }else{
      //     var _element = document.getElementById(arr[i])
      //     _element.style.backgroundImage = "url('src/assets/image/icons_"+arr[i]+".png')"
      //   }
      // }
      // element.style.backgroundImage = "url('src/assets/image/icons_"+arr[temp]+"_checked.png')"
      // if(this.isActive=e.currentTarget.name){
      //       this.isActive=true


      // }
      

    }
    }
  }



</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
      display:flex
      width:100%
      height:48px
      position:fixed
      left:0
      bottom:0
      border-top:2px solid #000
      .tab-item
        flex:1
        text-align:center
        font-size:10px
        margin:4px 0
        & > .router-link-active > .homeCheck
          background-image:url('./assets/image/icons_home_checked.png')
        & > .router-link-active > .typeCheck
            background-image:url('./assets/image/icons_type_checked.png')  
        & > .router-link-active > .personalCheck
            background-image:url('./assets/image/icons_personal_checked.png')  
        & > a      
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          text-align: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          &.router-link-active
            color:#5272f9
          .icon
            display:inline-block
            width:21px
            height:21px
            margin-bottom:4px
            background-size:21px 21px
            background-repeat:no-repeat
            &.home
              background-image:url('./assets/image/icons_home.png')
            &.type
              background-image:url('./assets/image/icons_type.png')
            &.personal
              background-image:url('./assets/image/icons_personal.png')
          
</style>
