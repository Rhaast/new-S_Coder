<template>
  <transition name="move">
    <div class="addnote">
      <navheader>
        <span slot="left" class="icon-add_circle"></span>
        <span slot="main_title" class="shou">Issue</span>
      </navheader>
      <div class="addnote-wrapper">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="Title:">
          </el-form-item>
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
          <el-form-item label="Content:" class="form-content">
          </el-form-item>
          <el-input type="textarea" v-model="form.content" placeholder="请输入内容"></el-input>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Issue</el-button>
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
    let checkTitle = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('标题不能为空!'))
      } else {
        cb(); // 将判断传递给后面
      }
    }
    let checkContent = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('内容不能为空!'))
      } else {
        cb();
      }
    }
    return {
      form: {
        title: '',
        content: ''
      },
      rules: {
        title: [
          { validator: checkTitle, trigger: 'blur' }
        ],
        content: [
          { validator: checkContent, trigger: 'blur' }
        ]
      }

    }

  },
  components: {
    navheader
  },
  methods: {
    onSubmit() {
      let user = this.form;
      let formData = {
        title: user.title,
        content: user.content
      };
      this.$refs['form'].validate((valid) => {
        if (valid) {
          axios({
              url: 'http://xyiscoding.top/studyapp/note/add',
              method: 'post',
              dataType: "json",
              data: {
                "title": user.title,
                "content": user.content
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
