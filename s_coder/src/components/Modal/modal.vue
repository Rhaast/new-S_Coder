<template>
<transition name="slide-fade">    
        <div class="md-modal-inner">
        <div class="inner-wrapper">
          <div class="md-top">
            <slot name="md-close"></slot>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <slot name="message"></slot>
            </div>
            <div class="btn-wrap">
              <slot name="btnGroup"></slot>
            </div>
          </div>
        </div>
        </div>
    </transition>
</template>
<style>
.md-modal-inner{
  width:100%;
  height: 200px;
  position: fixed;
  top:50%;
  left: 0;
  z-index: 99;
  margin-top: -100px;
  padding: 0 24px;


}
.inner-wrapper{

  background: #fff;
  width:100%;
  margin:0 auto;
  text-align: center;
  border-radius: 6px;
  height: 200px;
  position: relative;

}
.md-content{
  padding: 0 12px;
}

.md-content .confirm-tips{
  margin-top: 40px;
}
.md-content .btn-wrap a{
  color: #fff;
  display: block;
  background: #5272f9;
  border: 2px solid #000;
  padding: 12px 80px;
  border-radius: 20px;
  width: 200px;
  margin:36px auto;
}
.inner-wrapper .md-top
{
  text-align: right;
}
.inner-wrapper .md-top .md-close img{
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