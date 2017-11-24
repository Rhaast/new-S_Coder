<template>
  <div>
    <div id="content">
      <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
    <div class="tab">
      <div class="tab-item" @click="toggle(e)">
        <router-link to="/home">
          <span class="icon home" :class="{'active':isActive =false}" name='home'></span>
          <span>首页</span>
        </router-link>
        </div>
      <div class="tab-item" @click="toggle(e)">
        <router-link to="/type"> 
          <span class="icon type" :class="{'active':isActive =false}" name='type'></span>
          <span>分类</span>
        </router-link>
      </div>
      <div class="tab-item" @click="toggle(e)">
        <router-link to="/personal">
          <span class="icon personal" :class="{'active':isActive =false}" name='personal'></span>
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
      }
    },
  methods:{
    toggle(e){
      if(isActive=e.currentTarget.name){
            this.isActive=true


      }
      

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
              &.active
                background-image:url('./assets/image/icons_home_checked.png')
            &.type
              background-image:url('./assets/image/icons_type.png')
              &.active
                background-image:url('./assets/image/icons_type_checked.png')
            &.personal
              background-image:url('./assets/image/icons_personal.png')
              &.active
                background-image:url('./assets/image/icons_personal_checked.png')
          
</style>
