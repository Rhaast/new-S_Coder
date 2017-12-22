<template>
  <div class="portriat-wrapper" v-show="showportriat">
    <div class="model" v-show="model" @click="model = false">
      <div class="model-show">
        <img :src="modelSrc" alt="">
      </div>
    </div>
    <div class="show-info">
      <div class="test">
        <vueCropper ref="cropper3" :img="example3.img" :autoCrop="example3.autoCrop" :autoCropWidth="example3.autoCropWidth" :autoCropHeight="example3.autoCropHeight" :fixedBox="example3.fixedBox"></vueCropper>
      </div>
      <label class="btn" for="upload2" >upload</label>
      <input type="file" id="upload2" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 3)">
      <button @click="finish3('base64')" class="btn">preview(base64)</button>
      <button @click="refreshCrop" class="btn">refresh</button>
    </div>
  </div>
  </div>
</template>
<script>
import vueCropper from '../VueCropper/vue-cropper'
import codes from '../code/code'
import axios from 'axios'
export default {
  data: function() {
    return {
      model: false,
      modelSrc: '',
      crap: false,
      previews: {},
      showportriat: false,
      lists: [
        // {
        // 	img: 'https://fengyuanchen.github.io/cropper/images/picture.jpg'
        // },
        {
          img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg'
        },
        {
          img: 'https://o90cnn3g2.qnssl.com/0C3ABE8D05322EAC3120DDB11F9D1F72.png'
        },
        {
          img: 'http://ofyaji162.bkt.clouddn.com/bg1.jpg',
        },
        {
          img: 'http://ofyaji162.bkt.clouddn.com/bg2.jpg',
        },
        {
          img: 'http://ofyaji162.bkt.clouddn.com/can.jpg'
        },
        {
          img: 'http://ofyaji162.bkt.clouddn.com/nightcat.jpg'
        }
      ],
      option: {
        img: '',
        size: 1,
        full: false,
        outputType: 'png',
        canMove: true,
        fixedBox: false,
        original: false,
        canMoveBox: true
      },
      example3: {
        img: '',
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: true
      },
      downImg: '#'
    }
  },
  mounted() {
    this.getlocal();
  },
  methods: {
    portriatshow() {
      this.showportriat = true;
    },
    refreshCrop() {
      // clear
      this.example3.img = '';
      this.showportriat = false;
    },
    finish3(type) { //成功回调axios
      this.$refs.cropper3.getCropData((data) => {
        // this.model = true
        this.modelSrc = data //必须先获取base64然后才能调用axios
        let that = this;
        let localmessage = JSON.parse(localStorage.getItem('data'));
        that.id = localmessage.detail.id;
        axios({
          url: 'http://xyiscoding.top/studyapp/user/updatePortrait',
          method: 'post',
          dataType: "json",
          data: {
            "id": this.id,
            "portrait": this.modelSrc
          },
        }).then(res => {
          if (res.data.result == '200') {
          	this.$emit('refreshList')   // 子组件请求父组件事件
            // let that = this;
            // let temp = JSON.parse(localStorage.getItem('data'));
            // temp.detail.portrait = this.portrait;
            // localStorage.setItem('data', JSON.stringify(temp)); // 请求成功重新提交以更改localstorge里的数据
          }

        })
      })

    },
    // down(type) {
    //   // event.preventDefault()
    //   var aLink = document.createElement('a')
    //   aLink.download = 'demo'
    //   // 输出
    //   //获取截图的blob数据
    //   if (type === 'blob') {
    //     // 获取截图的base64 数据
    //     this.$refs.cropper.getCropData((data) => {
    //       this.downImg = data
    //       aLink.href = data
    //       aLink.click()
    //     })
    //   }
    // },

    uploadImg(e, num) {
      //上传图片
      // this.option.img
      var file = e.target.files[0]
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
        return false
      }
      var reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        if (num === 1) {
          this.option.img = data
        } else if (num === 3) {
          this.example3.img = data
        }
      }
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file)
    }
  },
  components: {
    vueCropper,
    codes
  },
  mounted() {
    this.changeImg()
    // hljs.configure({useBR: true})
    var list = [].slice.call(document.querySelectorAll('pre code'))
    list.forEach((val, index) => {
      hljs.highlightBlock(val)
    })
  }
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.test-button {
  display: flex;
  flex-wrap: wrap;
}

.portriat-wrapper {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 30;
}

.btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c0ccda;
  color: #1f2d3d;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 20px 10px 0px 0px;
  padding: 9px 15px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #50bfff;
  border-color: #50bfff;
  transition: all .2s ease;
  text-decoration: none;
  user-select: none;
}

.des {
  line-height: 30px;
}

code.language-html {
  padding: 10px 20px;
  margin: 10px 0px;
  display: block;
  background-color: #333;
  color: #fff;
  overflow-x: auto;
  font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo, Lucida, Sans, Type, Writer, Ubuntu, Mono;
  border-radius: 5px;
  white-space: pre;
}

.show-info {
  margin-bottom: 50px;
}

.show-info h2 {
  line-height: 50px;
}

.test {
  height: 500px;
}

.model {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
}

.model-show {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.model img {
  display: block;
  margin: auto;
  max-width: 80%;
  user-select: none;
  background-position: 0px 0px, 10px 10px;
  background-size: 20px 20px;
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
}

.c-item {
  display: block;
  padding: 10px 0;
  user-select: none;
}

@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

</style>
