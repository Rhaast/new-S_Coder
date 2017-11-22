<template>
  <div>
    <div class="personal-content">
      <img src="../../assets/personal_bg.png" height="255" width="100%">
      <div class="overview">
        <div class="overview-wrapper">
          <h2 class="username">RHAAST</h2>
          <p class="saysay">请吩咐妲己，主人</p>
          <img class="myportrait" src="../../assets/logo.png" height="80" width="80">
          <div class="job">
            <img class="sex" src="../../assets/sex.png" height="15" width="15">
            <span>UI设计师</span>
          </div>
          <ul class="remark">
            <li class="block">
              <h2 class="title">ID:</h2>
              <div class="content">
                <span class="stress">4566556</span>
              </div>
            </li>
            <li class="block">
              <h2 class="title">得分:</h2>
              <div class="content">
                <span class="stress">98</span>
              </div>
            </li>
            <li class="block">
              <h2 class="title">等级:</h2>
              <div class="content">
                <span class="stress">平民</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="schedule-wrapper">
          <h2 class="title">我的日程</h2>
          <ul class="remark1">
            <li class="block1">
              <img class="icon" src="../../assets/note.png" height="40" width="40" />
              <br>
              <a href="https://www.baidu.com/"><span class="stress1">我的笔记</span></a>
            </li>
            <li class="block1">
              <img class="icon" src="../../assets/answer.png" height="40" width="40" />
              <br>
              <a href="https://www.baidu.com/"><span class="stress1">我的提问</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style type="text/css">
.personal-content {
  position: absolute;
  bottom: 48px;
  top: 0;
  overflow: hidden;
  width: 100%
}

.overview {
  font-size: 0;
  position: absolute;
  top: 74px;
  width: 100%;
}

.overview-wrapper {
  padding: 0 12px;
  border-bottom: 2px solid #000
}

.overview .username {
  font-size: 30px;
  font-weight: 700;
  color: #5272f9;
  letter-spacing: 5px;
}

.overview .saysay {
  font-size: 12px;
  color: #999;
  margin-top: 18px;
}

.overview .myportrait {
  border: 2px solid #000;
  margin-top: 60px;
  background: #fff
}

.overview .job {
  margin-top: 10px
}

.overview .job img {
  display: inline-block;
  vertical-align: top
}

.overview .job span {
  font-size: 12px;
  color: #999;
  display: inline-block;
  margin-left: 5px;
}

.overview .remark {
  display: flex;
  width: 100%;
  margin-top: 33px;
  margin-bottom: 38px;
}

.overview .remark .block {
  flex: 1;
  text-align: center
}

.overview .remark .block .title {
  color: #5272f9;
  font-size: 14px;
}

.overview .remark .block .stress {
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-top: 17px;
  display: block;
}

.overview .schedule-wrapper {
  height: 100px;
  padding: 0 12px;
  margin-top: 20px;
}

.overview .schedule-wrapper .title {
  color: #5272f9;
  font-size: 18px;
  font-weight: 700
}

.overview .schedule-wrapper .remark1 {
  display: flex;
  margin-top: 30px
}

.overview .schedule-wrapper .remark1 .block1 {
  flex: 1;
  text-align: center
}
.overview .schedule-wrapper .remark1 .block1 .icon{
	margin-bottom: 15px;
}
.overview .schedule-wrapper .remark1 .block1 .stress1 {
  font-size: 12px;
  color: #333;
  border: 2px solid #000;
  padding: 9px 25px;
  border-radius: 9px;
  display: table-cell;
  margin-top:15px;

}

</style>
