<template>
  <transition name="move">
    <div class="login-wrapper" v-show="showFlag" @click="hide">
      <transition name="move">
        <el-card class="box-card" v-show="showreg">
          <div class="header">
          </div>
          <el-row type="flex" justify="center">
            <el-col :span="12">
              <modal v-show='mdShow'>
                <div slot="md-close" class="md-close" @click="closeModal"><img src="../../assets/icon_close.png" height="20" width="20"></div>
                <p slot="message">
                  注册成功，跳转登录。
                </p>
                <div slot="btnGroup">
                  <a class="btn btn--m" href="javascript:;" @click="Jumplogin">确定</a>
                </div>
              </modal>
              <div class="md-overlay" v-if="mdShow"></div>
              <el-form label-position="left" label-width="80px" :model="formRegister" :rules="rules" ref="formRegister">
                <el-form-item label="username" prop="userName">
                </el-form-item>
                <el-input v-model="formRegister.userName"></el-input>
                <el-form-item label="password" prop="password">
                </el-form-item>
                <el-input v-model="formRegister.password" type="password"></el-input>
                <el-form-item label="nickname" prop="nickName">
                </el-form-item>
                <el-input v-model="formRegister.nickName"></el-input>
                <el-form-item label="phone" prop="phone">
                </el-form-item>
                <el-input v-model="formRegister.phone"></el-input>
                <el-form-item label="email" prop="email">
                </el-form-item>
                <el-input v-model="formRegister.email"></el-input>
                <div class="el-wrapper">
                  <el-form-item label="sex" prop="sex" id="sexly">
                  </el-form-item>
                  <div class="feng">
                    <el-radio-group v-model.number="formRegister.sex">
                      <el-radio label=1 name="user.sex">Male</el-radio>
                      <el-radio label=0 name="user.sex">Female</el-radio>
                    </el-radio-group>
                  </div>
                  <el-form-item>
                    <el-button type="primary" @click="addUser">Sign up</el-button>
                    <br>
                    <span @click="login" class="logintxt">登录</span>
                  </el-form-item>
                </div>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </transition>
      <transition name="move">
        <el-card class="box-card1" v-show="showLogin">
          <h1 class="S_coder">S_CODER</h1>
          <modal v-show='mdShow1'>
            <div slot="md-close" class="md-close" @click="closeModal"><img src="../../assets/icon_close.png" height="20" width="20"></div>
            <p slot="message">
              登陆成功，即将跳转到主页。
            </p>
            <div slot="btnGroup">
              <a class="btn btn--m" @click="JumpHome">确定</a>
            </div>
          </modal>
          <div class="md-overlay" v-if="mdShow1"></div>
          <el-row type="flex" justify="center" class="login-wrapper1">
            <el-col :span="12">
              <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="username" prop="userName">
                  <el-input type="text" v-model="ruleForm2.userName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="password" prop="password">
                  <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm(ruleForm2)">Login</el-button>
                  <span @click="reg" class="regtxt">注册</span>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </transition>
    </div>
  </transition>
</template>
<style>
.md-overlay {
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.box-card {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  background: #fff
}

.box-card1 {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  background: #fff;
  background-image: url(../../assets/login-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  bottom: 0;
  background-position: bottom left
}

.login-wrapper {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 30;
}

.S_coder {
  text-align: center;
  font-size: 36px;
  color: #5272f9;
  margin-top: 30px
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

.el-card__body {
  padding: 12px 24px;
  margin-top: 40px;
}

.login-wrapper1 {
  margin-top: 120px;
}

.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  margin-bottom: 12%;
  border-bottom: 2px solid #000
}

.el-radio-group {
  margin-top: 20px
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
  margin-left: 0 !important;
  text-align: center;
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

.logintxt {
  font-size: 14px;
  margin-top: 12px;
  display: block;
  color: #5272f9
}

.regtxt {
  font-size: 14px;
  margin-top: 12px;
  display: block;
  color: #5272f9
}

</style>
<script>
import axios from 'axios'
import modal from '../Modal/modal'
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
    };
    let checkNickname = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('昵称不能为空!'))
      } else {
        cb();
      }
    };
    let checkPhone = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('电话不能为空!'))
      } else {
        cb();
      }
    };
    let checkEmail = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('邮箱不能为空!'))
      } else {
        cb();
      }
    };
    let checkSex = (rule, value, cb) => {
      if (value === '') {
        return cb(new Error('请选择性别!'))
      } else {
        cb();
      }
    };
    let entryUsername = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('请输入用户名!'))
      } else {
        cb();
      }
    };
    let entryPassword = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('请输入密码!'))
      } else {
        cb();
      }
    };
    return {
      formRegister: {
        userName: '',
        password: '',
        nickName: '',
        phone: '',
        email: '',
        sex: ''
      },
      ruleForm2: {
        username: '',
        password: ''
      },
      showFlag: false,
      showLogin: false,
      showreg: true,
      mdShow: false,
      mdShow1: false,
      rules: {
        userName: [
          { validator: checkUserName, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur' }
        ],
        nickName: [
          { validator: checkNickname, trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        email: [
          { validator: checkEmail, trigger: 'blur' }
        ],
        sex: [
          { validator: checkSex, trigger: 'blur' }
        ],
      },
      rules2: {
        username: [
          { validator: entryUsername, trigger: 'blur' }
        ],
        password: [
          { validator: entryPassword, trigger: 'blur' }
        ],

      }

    }
  },
  methods: {
    show() {
      this.showFlag = true;
      this.showreg = false;
      this.showLogin = true;
    },
    hide() {
      this.showFlag = true;
    },
    login() {
      this.showreg = false;
      this.showLogin = true;
    },
    reg() {
      this.showreg = true;
      this.showLogin = false;
    },
    Jumplogin() {
      this.mdShow = false;
      this.showFlag = true;
      this.showreg = false;
      this.showLogin = true;
      this.formRegister = "";
    },
    closeModal() {
      this.mdShow = false;
    },
    JumpHome() {
      this.mdShow1 = false;
      this.showFlag = false;
      this.$router.replace('/home');
      // location.reload();
    },
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    addUser() {
      let user = this.formRegister;
      this.$refs['formRegister'].validate((valid) => {
        if (valid) {
          axios({
              url: 'http://xyiscoding.top/studyapp/user/add',
              method: 'post',
              dataType: "json",
              data: {
                "userName": user.userName,
                "username": user.username,
                "password": user.password,
                "nickName": user.nickName,
                "phone": user.phone,
                "email": user.email,
                "sex": user.sex,
                "level": 1,
                "score": 0



              },
            })
            .then(res => {
              console.log(res.data)
              if (res.data.result == '200') {
                this.$message({
                  showClose: true,
                  type: 'success'
                })
                this.mdShow = true

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


    },
    submitForm() {
      let user = this.ruleForm2;
      this.$refs['ruleForm2'].validate((valid) => {
        if (valid) {
          axios({
              url: 'http://xyiscoding.top/studyapp/user/login',
              method: 'post',
              dataType: "json",
              data: {
                "userName": user.userName,
                "password": user.password,
              },
            })
            // axios.post('http://xyiscoding.top/studyapp/user/login?username=' + user.userName + '&password=' + user.password, {
            //     "userName": user.userName,
            //     "password": user.password

            //   })
            .then(res => {
              console.log(res.data)
              if (res.data.result == '200') {
                if (res.data.result == '200') {
                  localStorage.setItem('data', JSON.stringify(res.data)); //保存登录状态

                }
                this.$message({
                  showClose: true,
                  type: 'success'
                })
                this.mdShow1 = true,
                  setTimeout(() => {
                    this.$router.push('/home');
                    this.showFlag = false;
                    this.ruleForm2 = "";
                    this.mdShow1 = false;
                    location.reload();
                  }, 1000);

              } else {
                this.$message({
                  showClose: true,
                  message: '用户名或密码错误',
                  type: 'error'
                })
              }
            })
        } else {
          return false
        }

      })

    }
  },
  components: {
    modal
  }

}

</script>
