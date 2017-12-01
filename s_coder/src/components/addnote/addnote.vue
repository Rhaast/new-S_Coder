<template>
  <transition name="move">
    <div class="addnote">
      <navheader>
        <span slot="left" class="icon-add_circle"></span>
        <span slot="main_title" class="shou">Issue</span>
      </navheader>
      <div class="addnote-wrapper">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="Title:" prop="title">
            <el-input type="text" v-model="ruleForm2.title" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Content:" prop="content">
            <el-input type="textarea" v-model="ruleForm2.content" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </transition>
</template>
<style>
.shou {
  font-size: 18px;
  display: inline-block;
  color: #000
}

.addnote {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  background: #fff
}

.addnote-wrapper {
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
  padding: 6px 6px;
  margin-top: 18px;
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

</style>
<script type="text/javascript">
import navheader from "../navheader/navheader"
import axios from 'axios'
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
        id:'',
        nickName:''

      },
      rules2: {
        title: [
          { validator: validateTitle, trigger: 'blur' }
        ],
        content: [
          { validator: validateContent, trigger: 'blur' }
        ]
      }
    };
  },
  components: {
    navheader
  },
  created(){
    this.getlocal();
  },
  methods: {
    getlocal() {
      let that = this;
      let localmessage = JSON.parse(localStorage.getItem('data'));
      that.id = localmessage.detail.id;
      that.nickName = localmessage.detail.nickName;
      console.log(this.nickName)


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
                "nickName":this.nickName,
                "id":this.id
              },
            })
            .then(res => {
              console.log(res.data)
              if (res.data.result == '200') {
                this.$message({
                  showClose: true,
                  message: '提交成功',
                  type: 'success'
                })
                setTimeout(() => {
                  this.$router.push('/home');
                  this.showFlag = false;

                }, 2000);

              } else {
                this.$message({
                  showClose: true,
                  message: '用户名已被占用',
                  type: 'error'
                })
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
