<template>
  <div class="navbar">
    <nav class="nav">
      <div class="navbar-container">
        <div class="nav-brand">
          <span>教师管理系统</span>
        </div>
      </div>
      <div class="list" id="nav-list" v-for="item in navList" :key="item">
        <div class="list_name">
          <span>{{ item.name }}</span>
          <img src="../assets/img/down.png">
        </div>
        <ul class="list_item">
          <a href="" v-for="it in item.list" :key="it">{{ it }}</a>
        </ul>
      </div>
    </nav>
  </div>

  <!--     左边导航栏-->
  <div class="banner">
    <!--      上部分-->
    <div class="banner_top">
      <img src="../assets/img/more.png">
      <div class="top_right">
        <img src="../assets/img/sereach.png">
        <img src="../assets/img/notice.png">
        <img src="../assets/img/name.png">
        <span>小游</span>
      </div>
    </div>
    <!--      下部分-->
    <div class="banner_bottom">
      <div class="bottom_lists">个人信息管理 / 个人资料</div>
      <span style="font-weight: bold">我的课程组</span>
    </div>
  </div>

  <!--  内容-->
  <div class="content">
    <!--    导航区-->
    <div class="content_banner">
      <!--        组长信息区-->
      <div class="information_name">
        <span>组长姓名：</span>
        <span>张三</span>
      </div>
      <div class="information_id">
        <span>组长教工号：</span>
        <span>886534</span>
      </div>
      <!--        按钮操作区-->
      <div class="operation">
        <button class="check">查看题库</button>
        <button class="ask">毕业要求指标点</button>
        <button class="exit">申请退出</button>
      </div>
    </div>
        <!--    搜索内容区域-->
    <div class="content_content">
      <!--      标题区-->
      <div class="content_title">
        <div class="class">
          <span>课程组</span>
          <div></div>
        </div>
        <div class="class_people">
          <span>组成员搜索</span>
          <input type="text">
        </div>
        <button class="btn_find">搜索</button>
        <button class="btn_reset">重置</button>
      </div>

      <!--      表格区-->
      <div class="content_table">
        <table class="table">
          <tr>
            <th v-for="item in classTitle" :key="item">{{item}}</th>
          </tr>
          <tr v-for="it in classData" :key="it">
            <td>{{it.id}}</td>
            <td>{{it.people_id}}</td>
            <td>{{it.name}}</td>
            <td>{{it.number}}</td>
          </tr>
        </table>
      </div>
      <!--        页脚-->
      <div class="content_page">
        <!--        页码-->
        <div class="num">
          <span>&lt;</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <span>&gt;</span>
        </div>
        <!--        页数跳转-->
        <div class="rotate">
          <div>5条/页</div>
          <span>跳至</span>
          <input type="text" placeholder="5">
          <span>页</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyVue",
  data() {
    return {
      navList: [
        {name: '个人信息管理', list: ['个人资料', '我的课程组']},
        {name: '题目管理', list: ['题目列表', '批量导入']},
        {name: '学生管理', list: ['总体数据查看', '详细数据查看']},
        {name: '试卷管理', list: ['试卷列表', '手动生成试卷']}],
      classTitle: [
          '序号','教工号','姓名','电话'
      ],
      classData:[
          {id:1,people_id:'123456',name:'明明',number:'123456789'},
          {id:2,people_id:'123456',name:'明明',number:'123456789'},
          {id:3,people_id:'123456',name:'明明',number:'123456789'},
          {id:4,people_id:'123456',name:'明明',number:'123456789'}
      ]
    }
  }
}

</script>

<style>
/* 谷歌字体 */
/*@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600&display=swap");*/


</style>