<template>
    <div>
      <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
        <div class="md-modal-inner">
        <div class="inner-wrapper">
          <div class="md-top">
            <button class="md-close" @click="closeModal">Close</button>
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
      </div>
    </div>
</template>
<style>

.md-modal-inner{
  width:100%;
  height: 200px;
  position: fixed;
  top:0;
  left: 0;
  z-index: 99;


}
.inner-wrapper{
  background: #fff;
  width:90%;
  margin:0 auto;
  text-align: center;
  border-radius: 6px;
  height: 200px;

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