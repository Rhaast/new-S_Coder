<template>
  <transition name="move">
    <div class="addquestions">
      <navheader>
        <span slot="left" class="backhome" @click="resetForm('ruleForm2')"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></span>
        <span slot="main_title" class="shou">personSign</span>
      </navheader>
      <div class="addquestions-wrapper">
        <modal v-show='mdShow'>
          <div slot="md-close" class="md-close" @click="closeModal"><img src="../../assets/icon_close.png" height="20" width="20"></div>
          <p slot="message">
            动态发表成功
          </p>
          <div slot="btnGroup">
            <a class="btn btn--m" @click="JumpLogin">确定</a>
          </div>
        </modal>
        <div class="md-overlay" v-if="mdShow"></div>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="这一刻的想法:" prop="personSign">
            <el-input type="text" v-model="ruleForm2.personSign" auto-complete="off"></el-input>
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

.backhome {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 12px;
  height: 32px;
  margin-top: -16px;
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
  color: #999;
  font-size: 14px;
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
export default {
  data() {
    var validateTitle = (rule, value, cb) => {
      let ret = /^\S{1,30}$/
      if (value === '') {
        callback(new Error('动态不能为空'));
      } else if (ret.test(value)) {
        cb(); // 将判断传递给后面
      } else {
        return cb(new Error('动态不能超过30个字符！'))
      }
    };
    return {
      ruleForm2: {
        id: '',
        personSign: ''
      },
      rules2: {
        personSign: [{
          validator: validateTitle,
          trigger: 'blur'
        }]
      },
      mdShow: false,
      funName1: ''
    };
  },
  components: {
    navheader,
    modal
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "getlocal"
  },
  created() {
    this.getlocal();
  },
  methods: {
    getlocal() {
      let that = this;
      let localmessage = JSON.parse(localStorage.getItem('data'));
      that.id = localmessage.detail.id;
      that.personSign = localmessage.detail.personSign;
      that.nickName = localmessage.detail.nickName;

    },
    resetForm(ruleForm2) {
      this.$refs[ruleForm2].resetFields();
      this.$router.go(-1)
    },
    closeModal() {
      this.mdShow = false
    },
    JumpLogin() {
      this.mdShow = false;
      this.$router.go(-1);
      clearTimeout(this.cce); // 清除定时器
    },
    submitForm(ruleForm2) {
      let user = this.ruleForm2;
      this.$refs['ruleForm2'].validate((valid) => {
        if (valid) {
          axios({
              url: 'http://xyiscoding.top/studyapp/user/update',
              method: 'post',
              dataType: "json",
              data: {
                "personSign": user.personSign,
                "nickName": this.nickName,
                "id": this.id,
                "type": 0,
              },
            })
            .then(res => {
              console.log(res.data)
              if (res.data.result == '200') {
                let that = this;
                // let temp = JSON.parse(localStorage.getItem('data'));
                // temp.detail.personSign = this.ruleForm2.personSign;
                // localStorage.setItem('data', JSON.stringify(temp)); // 请求成功重新提交以更改localstorge里的数据
                // let menasDatas = JSON.parse(localStorage.getItem('data')); // 修改成功重新获取localstorge里的数据
                this.mdShow = true;
                this.cce = setTimeout(() => {
                  this.shownick = false;
                  this.showFlag = false;
                  this.mdShow = false;
                }, 2000);
                this.$refs[ruleForm2].resetFields(); //提交成功后重置表单
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
  }
}

</script>
