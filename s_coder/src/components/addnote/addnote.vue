<template>
  <transition name="move">
    <div class="addquestions">
      <navheader>
        <span slot="left" class="backhome" @click="resetForm('ruleForm2')"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></span>
        <span slot="main_title" class="shou">My Note</span>
        <span slot="right" class="handIn" @click="submitForm('ruleForm2')">发表</span>
      </navheader>
      <div class="addquestions-wrapper">
        <modal v-show='mdShow' class="modal">
          <div slot="md-close" class="md-close" @click="closeModal"><img src="../../assets/icon_close.png" height="20" width="20"></div>
          <p slot="message">
            发布成功
          </p>
          <div slot="btnGroup">
            <a class="btn btn--m" @click="JumpLogin">确定</a>
          </div>
        </modal>
        <div class="md-overlay" v-if="mdShow"></div>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="Title:" prop="title">
            <el-input type="text" v-model="ruleForm2.title" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Content:" prop="content" id="contents">
            <mavon-editor class="mavoneditor" :toolbars="toolbars" :subfield="false" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" v-model="ruleForm2.content" />
          </el-form-item>
          <el-form-item>
          </el-form-item>
        </el-form>
      </div>
      <mt-popup v-model="popupVisible" position="top" class="popup">
        当前未登录
      </mt-popup>
    </div>
  </transition>
</template>
<style>
.handIn {
  font-size: 15px;
  display: inline-block;
  position: absolute;
  right: 12px;
  color: #5272f9;
}

.v-note-wrapper {
  z-index: 0 !important;
}

.popup {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
}

#contents {
  margin-top: 12%;
}

.v-note-wrapper .v-note-panel {
  box-shadow: none;
  padding: 0
}

.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-input-wrapper {
  padding: 0
}
.mavoneditor {
  margin-top: 20px;
  border: 2px solid #000;
  height: 360px;
}

.backhome {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 12px;
  height: 32px;
  margin-top: -16px;
}

.class {
  z-index: 99;
}

.shou {
  font-size: 18px;
  display: inline-block;
  color: #000
}

.el-form-item__error {
  position: absolute;
  color: #E02614;
  font-size: 12px;
  margin-top: 5px;
}

.addquestions {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  background: #fff
}

.addquestions-wrapper {
  margin: 0 12px;
  height: 100%;
  margin-top: 29px
}

el-form-item {
  font-size: 0;
  margin: 0
}

.el-form-item__label {
  float: none;
  color: #000;
  font-size: 18px;
}

.form-content {
  margin-top: 44px;
}

.el-input {
  border-bottom: 2px solid #000;
  margin-bottom: 0;
}

.el-input__inner {
  border: none;
  -webkit-appearance: none;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  font-size: inherit;
  line-height: 1;
  outline: 0;
  -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  width: 100%;
}

.el-textarea__inner {
  display: block;
  resize: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  color: #5a5e66;
  border: 2px solid #000;
  border-radius: 4px;
  -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  margin-top: 19px;
  height: 240px;
  padding: 6px 6px;
}

::-webkit-input-placeholder {
  color: #ccc;
  font-size: 14px
}

::-moz-placeholder {
  color: #ccc;
  font-size: 14px
}




/* firefox 19+ */

:-ms-input-placeholder {
  color: #ccc;
  font-size: 14px
}




/* ie */

input:-moz-placeholder {
  color: #ccc;
  font-size: 14px
}

.el-button--primary {
  color: #fff;
  background-color: #409EFF;
  border-color: #409EFF;
}

.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #5272f9;
  border: 2px solid #000;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  padding: 12px 80px;
  font-size: 14px;
  border-radius: 4px;
  border-radius: 20px;
  margin-top: 30px;
}

.el-form-item__content {
  margin: 0 ! important;
  text-align: center;
}

.v-modal {
  background: none
}

</style>
<script type="text/javascript">
import navheader from "../navheader/navheader"
import axios from 'axios'
import modal from '../Modal/modal'
import qs from 'qs'
export default {
  data() {
    var validateTitle = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入标题'));
      } else {
        callback();
      }
    };
    var validateContent = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入内容'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        title: '',
        content: '',
        id: '',
        nickName: '',
        userName: ''
      },
      rules2: {
        title: [{
          validator: validateTitle,
          trigger: 'blur'
        }],
        content: [{
          validator: validateContent,
          trigger: 'blur'
        }]
      },
      mdShow: false,
      popupVisible: false,
      funName1: '',
      toolbars: {
        bold: false, // 粗体
        italic: false, // 斜体
        header: false, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: false, // 引用
        ol: false, // 有序列表
        ul: false, // 无序列表
        link: false, // 链接
        imagelink: true, // 图片链接
        code: false, // code
        table: false, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: false, // 上一步
        redo: false, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: false, // 单双栏模式
        preview: true, // 预览
      }
    };
  },
  components: {
    navheader,
    modal
  },
  created() {
    this.getlocal();
  },
  methods: {
    // 绑定@imgAdd event
     $imgDel(pos){
            // delete this.img_file[pos];
     },
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.     
      // var formdata = new FormData();
      // formdata.append('image', $file.miniurl);
      let miniurl = $file.miniurl;
      // console.log(miniurl);
        axios
            .post(
              "http://xyiscoding.top/studyapp/note/updateImg",
              qs.stringify({ img: miniurl })
            )
      .then((url) => {
      	console.log(url);
        this.$refs.md.$img2Url(pos, "http://xyiscoding.top/img/"+ url.data.detail);
      })
    },
    getlocal() {
      let that = this;
      let localmessage = JSON.parse(localStorage.getItem('data'));
      that.id = localmessage.detail.id;
      that.nickName = localmessage.detail.nickName;
      that.userName = localmessage.detail.userName;
    },
    resetForm(ruleForm2) {
      this.$refs[ruleForm2].resetFields();
      this.$router.push('/home')
    },
    closeModal() {
      this.mdShow = false
    },
    JumpLogin() {
      this.mdShow = false;
      this.$router.push('/home');
      clearTimeout(this.cce); // 清除定时器
    },
    submitForm(ruleForm2) {
      let user = this.ruleForm2;
      this.$refs['ruleForm2'].validate((valid) => {
        if (valid) {
          axios({
              url: 'http://xyiscoding.top/studyapp/note/add',
              method: 'post',
              dataType: "json",
              data: {
                "title": user.title,
                "content": user.content,
                "nickName": this.nickName,
                "userId": this.id,
                "userName": this.nickName,
                "type": 0
              },
            })
            .then(res => {
              console.log(res.data)
              if (res.data.result == '200') {
                this.$message({
                  showClose: true,
                  type: 'success'
                })
                this.mdShow = true;
                this.cce = setTimeout(() => {
                  this.$router.push('/home');
                  this.showFlag = false;
                  this.mdShow = false;
                }, 2000);
                this.$refs[ruleForm2].resetFields(); //提交成功后重置表单
              } else {
                //									this.$message({
                //										showClose: true,
                //										message: '用户名已被占用',
                //										type: 'error'
                //									})
                this.popupVisible = true
                setTimeout(() => {
                  this.popupVisible = false

                }, 2000);
              }
            })
        } else {
          return false
        }
      })
    }
  }
}

</script>
