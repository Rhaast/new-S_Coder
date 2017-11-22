<template>
  <transition name="move">
    <div class="login-wrapper" v-show="showFlag" @click="hide">
      <el-card class="box-card">
        <el-row type="flex" justify="center">
          <el-col :span="12">
            <el-form label-position="left" label-width="80px" :model="formRegister" :rules="rules" ref="formRegister">
              <el-form-item label="账号" prop="userName">
                <el-input v-model="formRegister.userName"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="formRegister.password"></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="nickName">
                <el-input v-model="formRegister.nickName"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="addUser">立即注册</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </transition>
</template>
<style>
.login-wrapper {
  width: 100%;
  background: rgba(7, 17, 27, 1);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 48px;
  z-index: 30;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.2s linear;
  transform: translate3d(0%, 0, 0);
}

.move-enter,
.move-leave-active {
  transform: translate3d(100%, 0, 0);
}

.layui-form-item {
  width: 100%;
  height: 100%;
  z-index: 100;
}

.layui-form-item {
  height: 50%;
  width: 50%;
}

</style>
<script>
import axios from 'axios'
export default {
  data() {
    let checkUserName = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('账户不能为空!'))
      } else {
        cb(); // 将判断传递给后面
      }
    }
    let checkPassword = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('密码不能为空!'))
      } else {
        cb();
      }
    }
    let checkNickname = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('昵称不能为空!'))
      } else {
        cb();
      }
    }
    return {
      formRegister: {
        userName: '',
        password: '',
        nickName: ''
      },
      showFlag: false,
      rules: {
        userName: [
          { validator: checkUserName, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur' }
        ],
        nickName: [
          { validator: checkNickname, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    show() {
      this.showFlag = true
    },
    hide() {
      this.showFlag = true
    },
    addUser() {
      let user = this.formRegister;
      let formData = {
        userName: user.userName,
        password: user.password,
        nickName: user.nickName
      };
      this.$refs['formRegister'].validate((valid) => {
        if (valid) {
          axios({
              url: 'http://xyiscoding.top/studyapp/user/add',
              method: 'post',
              dataType: "json",
              data: {
                "userName": user.userName,
                "password": user.password,
                "nickName": user.nickName
              },
            })
            .then(res => {
              console.log(res.data)
              if (res.data.result == '200') {
                this.$message({
                  showClose: true,
                  message: '注册成功',
                  type: 'success'
                })
                router.push({ name: 'home' })
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
