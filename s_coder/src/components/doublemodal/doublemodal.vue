<template>
<transition name="slide-fade">    
        <div class="doublemd-modal-inner">
        <div class="doubleinner-wrapper">
          <div class="doublemd-top">
            <slot name="doublemd-close"></slot>
          </div>
          <div class="doublemd-content">
            <div class="doubleconfirm-tips">
              <slot name="doublemessage"></slot>
            </div>
            <div class="doublebtn-wrap">
              <slot name="doublebtnGroup" class="btngroup"></slot>
            </div>
          </div>
        </div>
        </div>
    </transition>
</template>
<style>
.doublemd-content .doublebtn-wrap .btngroup{
  display: flex;
  margin: 0 auto;
}
.doublemd-content .doublebtn-wrap a:first-child{
  color: #fff;
  display: inline-block;
  background: #5272f9;
  border: 2px solid #000;
  border-radius: 25px;
  flex: 1;
  margin: 30px 10px;
  padding: 12px 0px;
}
.doublemd-content .doublebtn-wrap a:last-child{
  color: #000;
  display: inline-block;
  border: 2px solid #000;
  border-radius: 25px;
  flex: 1;
  margin: 30px 10px;
  padding: 12px 0px;
}
.doublemd-modal-inner{
  width:100%;
  height: 200px;
  position: fixed;
  top:50%;
  left: 0;
  z-index: 99;
  margin-top: -100px;
  padding: 0 24px;
}
.doubleinner-wrapper{
  background: #fff;
  width:100%;
  margin:0 auto;
  text-align: center;
  border-radius: 6px;
  height: 200px;
  position: relative;

}
.doublemd-content{
  padding: 0 12px;
}
.doublemd-content .doubleconfirm-tips{
  margin-top: 40px;
}
.doubleinner-wrapper .doublemd-top
{
  text-align: right;
}
.doubleinner-wrapper .doublemd-top .doublemd-close img{
  margin:12px 12px;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
<script>
    export default{
        props:["mdShow"],
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods:{
          closeModal(){
            this.$emit("close");
          }
        }
    }
</script>