<template>
  <transition name="move">
    <div class="login-wrapper" v-show="showFlag">
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
                  <el-input v-model="formRegister.userName"></el-input>
                </el-form-item>
                <el-form-item label="password" prop="password" id="bot">
                  <el-input v-model="formRegister.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="nickname" prop="nickName" id="bot">
                  <el-input v-model="formRegister.nickName"></el-input>
                </el-form-item>
                <el-form-item label="mobile" prop="mobile" id="bot">
                  <el-input v-model="formRegister.mobile"></el-input>
                </el-form-item>
                <el-form-item label="email" prop="email" id="bot">
                  <el-input v-model="formRegister.email"></el-input>
                </el-form-item>
                <div class="el-wrapper">
                  <el-form-item label="sex" prop="sex" id="bot">
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
           <div class="backarrow" @click="backlast"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></div>
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
                <el-form-item label="password" prop="password" id="bot">
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
      <mt-popup v-model="popupVisible" position="top" class="popup">
        用户名或密码错误
      </mt-popup>
      <mt-popup v-model="popupVisible1" position="top" class="popup">
        用户名已被占用
      </mt-popup>
    </div>
  </transition>
</template>
<style>
.popup {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
.backarrow{
  position: absolute;
  left: 12px;
  top:24px;
}
.v-modal {
  background: none
}

#bot {
  margin-top: 12%;
}

.el-col el-col-12 {
  height: 273px;
}

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
  margin-bottom: 0;
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

.el-form-item__error {
  position: absolute;
  color: #E02614;
  font-size: 12px;
  margin-top: 5px;
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
  padding: 0;
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
      let ret = /[a-zA-Z0-9]{4,10}/
      if (!value) {
        return cb(new Error('账户不能为空!'))
      } else if (ret.test(value)) {
        cb(); // 将判断传递给后面
      } else {
        return cb(new Error('用户名只能由4-10位的英文数字组成!'))
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
      var ret = /^1\d{10}$/;
      if (!value) {
        return cb(new Error('电话不能为空!'))
      } else if (ret.test(value)) {
        cb();
      } else {
        return cb(new Error('请输入正确的手机号格式！'))
      }
    };
    let checkEmail = (rule, value, cb) => {
      var ret = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      if (!value) {
        return cb(new Error('邮箱不能为空!'))
      } else if (ret.test(value)) {
        cb();
      } else {
        return cb(new Error('邮箱格式不正确！'))
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
      let ret = /[a-zA-Z0-9]{4,10}/
      if (!value) {
        return cb(new Error('账户不能为空!'))
      } else if (ret.test(value)) {
        cb(); // 将判断传递给后面
      } else {
        return cb(new Error('用户名只能由4-10位的英文数字组成!'))
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
        mobile: '',
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
      popupVisible: false,
      popupVisible1: false,
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
        mobile: [
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
        userName: [
          { validator: entryUsername, trigger: 'blur' }
        ],
        password: [
          { validator: entryPassword, trigger: 'blur' }
        ],

      }

    }
  },
  methods: {
    backlast() {
    this.showFlag = false;
    },
    show() {
      this.showFlag = true;
      this.showreg = false;
      this.showLogin = true;
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
                "mobile": user.mobile,
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
                this.popupVisible1 = true
                setTimeout(() => {
                  this.popupVisible1 = false

                }, 2000);
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
  },
  components: {
    modal
  }

}

</script>
