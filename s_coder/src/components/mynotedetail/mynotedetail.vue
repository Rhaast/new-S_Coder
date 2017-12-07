<template>
  <transition name="move">
    <div class="mynotedetail">
      <navheader>
        <span slot="left" class="backhome" @click="backmynote"><img src="../../assets/image/icon_arrow.png" height="32" width="32"></span>
        <span slot="main_title" class="shou">My Note</span>
      </navheader>
      <div class="detailwrapper">
        <div class="getnotedetail">
          <span class="title">{{noteLists.title}}</span>
          <br>
          <span class="content">{{noteLists.content}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<style type="text/css">
.mynotedetail {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  background: #fff;
  background-repeat: no-repeat;
  background-size: 100% 227px;
}

.detailwrapper {
  padding: 0 12px;
  width: 100%;
}

.backhome {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 12px;
  height: 32px;
}

.shou {
  font-size: 16px;
  display: inline-block;
  color: #000;
}

</style>
<script type="text/javascript">
import navheader from '../navheader/navheader'
import axios from 'axios'
export default {
  data() {
    return {
      noteLists: {}
    }
  },
  created: function() {
    let that = this // 取得笔记id
    let id = this.$route.query.id;
    that.noteid = id;
    console.log(this.noteid);
    this.getmynote();
  },
  watch: {
  "$route": "getmynote"
  },
  methods: {
    backmynote() {
      this.$router.push('/mynote');
    },
    getmynote() {
      let that = this;
      axios({
        url: 'http://xyiscoding.top/studyapp/note/findById/' + this.noteid,
        dataType: 'json',
        method: 'get',
      }).then((response) => {
        that.noteLists = response.data.detail.note;
        // this.$nextTick(() => {
        //   this._initScroll()
        // })
      })
    }

  },
  components: {
    navheader
  }
}

</script>
