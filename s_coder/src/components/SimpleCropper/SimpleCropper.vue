<template> 
 <div class="v-simple-cropper"> 
 <slot> 
  <button @click="upload">上传图片</button> 
 </slot> 
 <input class="file" ref="file" type="file" accept="image/*" @change="uploadChange"> 
 <div class="v-cropper-layer" ref="layer"> 
  <div class="layer-header"> 
  <button class="cancel" @click="cancelHandle">取消</button> 
  <button class="confirm" @click="confirmHandle">裁剪</button> 
  </div> 
  <img ref="cropperImg"> 
 </div> 
 </div> 
</template> 
 
<script> 
import Cropper from 'cropperjs' 
import '../../../node_modules/cropperjs/dist/cropper.min.css' 
import axios from 'axios'
export default { 
 name: 'v-simple-cropper', 
 props: { 
 initParam: Object, 
 successCallback: { 
  type: Function, 
  default: () => {} 
 } 
 }, 
 data () { 
 return { 
  cropper: {}, 
  filename: '' 
 } 
 }, 
 mounted () { 
 this.init() 
 }, 
 created() {
  this.getlocal()
 },
 methods: { 
 // 初始化裁剪插件 
 init () { 
  let cropperImg = this.$refs['cropperImg'] 
  this.cropper = new Cropper(cropperImg, { 
  aspectRatio: 1 / 1, 
  dragMode: 'move' 
  }) 
 }, 
 // 点击上传按钮 
 upload () { 
  this.$refs['file'].click() 
 }, 
getlocal() {
  let that = this;
  let localmessage = JSON.parse(localStorage.getItem('data'));
  that.id = localmessage.detail.id;
  console.log(this.id)},
 // 选择上传文件 
 uploadChange (e) { 
  let file = e.target.files[0] 
  this.filename = file['name'] 
  let URL = window.URL || window.webkitURL 
  this.$refs['layer'].style.display = 'block' 
  this.cropper.replace(URL.createObjectURL(file)) 
 }, 
 // 取消上传 
 cancelHandle () { 
  this.cropper.reset() 
  this.$refs['layer'].style.display = 'none' 
  this.$refs['file'].value = '' 
 }, 
 // 确定上传 
 confirmHandle () { 
  let cropBox = this.cropper.getCropBoxData() 
  let scale = this.initParam['scale'] || 1 
  let cropCanvas = this.cropper.getCroppedCanvas({ 
  width: cropBox.width * scale, 
  height: cropBox.height * scale 
  }) 
  let imgData = cropCanvas.toDataURL('image/jpeg') 
  let formData = new FormData() 
  formData.append('fileType', this.initParam['fileType']) 
  formData.append('portrait', imgData) 
  formData.append('id', this.id) 
  formData.append('originalFilename', this.filename) 
  axios('http://112.74.187.146:8080/studyapp/user/updatePortrait', formData, { 
  method: 'post', 
  dataType: 'json',
  // headers: {'Content-Type': 'multipart/form-data'} 
  }).then(res => { 
  this.successCallback(res.data) 
  this.cancelHandle() 
  }) 
 } 
 } 
} 
</script> 
 
<style lang="less"> 
.v-simple-cropper { 
 .file { 
 display: none; 
 } 
 .v-cropper-layer { 
 position: fixed; 
 top: 0; 
 bottom: 0; 
 left: 0; 
 right: 0; 
 background: #fff; 
 z-index: 99999; 
 display: none; 
 .layer-header { 
  position: absolute; 
  top: 0; 
  left: 0; 
  z-index: 99999; 
  background: #fff; 
  width: 100%; 
  height: .8rem; 
  padding: 0 .2rem; 
  box-sizing: border-box; 
 } 
 .cancel, 
 .confirm { 
  line-height: .8rem; 
  font-size: .28rem; 
  background: inherit; 
  border: 0; 
  outline: 0; 
  float: left; 
 } 
 .confirm { 
  float: right; 
 } 
 img { 
  position: inherit!important; 
  border-radius: inherit!important; 
  float: inherit!important; 
 } 
 } 
} 
</style> 