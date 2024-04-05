<template>
  <el-container>
    <!--      左侧菜单栏-->
    <el-aside width="200px" style=" overflow-x: hidden">
      <div class="aside_title">教学管理系统</div>
      <el-menu
          default-active="2"
          background-color="#3333ff"
          text-color="#fff"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose" router>
        <el-submenu :index="item.name" v-for="item in navList" :key="item.name">
          <template slot="title">
            <i :class="item.ico"></i>
            <span>{{item.name}}</span>
          </template>
            <el-menu-item :index="it.path" v-for="it in item.list" :key="it.path" class="el_menu_item" v-on:click="handle">{{it.content}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
       <!--      右边导航栏-->
      <el-header class="banner">
        <!--     左边导航栏-->
        <div class="con_banner">
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
<!--          &lt;!&ndash;      下部分&ndash;&gt;-->
<!--          <div class="banner_bottom">-->
<!--            <div class="bottom_lists">{{tag1}} / {{tag2}}</div>-->
<!--            <span style="font-weight: bold">{{title}}</span>-->
<!--          </div>-->
          <el-breadcrumb separator="/" class="banner_bottom">
            <el-breadcrumb-item
                v-for="(item,index) in breadList"
                :key="index"
                class="banner_txt"
            >{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
      <!--      右边内容区-->
      <el-main><router-view>
      </router-view></el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header, .el-footer {
  background-color: #fff;
  color: #333;
  border-top: none;
}

.el-aside {
  background-color: #3333ff;
  color: #333;
  text-align: center;
  line-height: 100px;
  height: 100vh;
}

.el-main {
  background-color: #99ccff;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu-vertical-demo{
  margin-top: 2rem;
  text-align: left;
  border-right:0 !important;
}

.el_menu_item{
  margin-left: 1rem;
}

.aside_title{
  height: 80px;
  margin: 0 20px;
  color: #fff;
  border-bottom: solid 1px #fff;
}

.banner{
  height: 130px !important;
}

.con_banner{
  height: 100%;
}

.banner_top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #dddddd;
  padding: 20px 20px;
}

.banner_top img{
  width: 25px;
  height: 25px;
}

.banner_top .top_right{
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.banner_bottom{
  display: flex;
  padding: 1.5rem 2rem;
  align-items: start;
}

.banner_bottom .banner_txt:nth-child(1){
  font-weight: bold;
}

.banner_bottom  .banner_txt:not(:nth-child(1)){
  color: #c4c3c3;
}

</style>

<script>

export default {
  name: "AboutView",
  data() {
    return {
      tag1: '个人信息管理',
      tag2: '个人资料',
      title: '我的课程组',
      breadList:[],
      navList: [
        {id:1,ico:'el-icon-user',name: '个人信息管理', list: [{path:'/people/info',content:'个人资料'},{path:'/people/group',content:'我的课程组'}]},
        {id:2,ico:'el-icon-s-data',name: '题目管理', list: [{path:'/topic/list',content:'题目列表'},{path:'/topic/put',content:'批量导入'}]},
        {id:3,ico:'el-icon-s-custom',name: '学生管理', list: [{path:'/student/all',content:'总体数据查看'},{path:'/student/detail',content:'详细数据查看'}]},
        {id:4,ico:'el-icon-s-management',name: '试卷管理', list: [{path:'/test/list',content:'试卷列表'},{path:'/test/auto',content:'手动生成试卷'}]},
      ]
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
  // methods:{
  //   handle(){
  //     if(this.$route.path == '/people_information'){
  //       this.tag1 = '个人信息管理';
  //       this.tag2 = '我的课程组';
  //       this.title = '个人资料';
  //     }else if(this.$route.path == '/my_group'){
  //       this.tag1 = '个人信息管理';
  //       this.tag2 = '个人资料';
  //       this.title = '我的课程组';
  //     }else if(this.$route.path == '/question_list'){
  //       this.tag1 = '题目管理';
  //       this.tag2 = '批量导入';
  //       this.title = '题目列表';
  //     }else if(this.$route.path == '/question_put'){
  //       this.tag1 = '题目管理';
  //       this.tag2 = '题目列表';
  //       this.title = '批量导入';
  //     }else if(this.$route.path == '/all_data_check'){
  //       this.tag1 = '学生管理';
  //       this.tag2 = '详细数据查看';
  //       this.title = '总体数据查看';
  //     }else if(this.$route.path == '/detail_data_check'){
  //       this.tag1 = '学生管理';
  //       this.tag2 = '总体数据查看';
  //       this.title = '详细数据查看';
  //     }else if(this.$route.path == '/test_list'){
  //       this.tag1 = '试卷管理';
  //       this.tag2 = '手动生成试卷';
  //       this.title = '试卷列表';
  //     }else if(this.$route.path == '/auto_test'){
  //       this.tag1 = '试卷管理';
  //       this.tag2 = '试卷列表';
  //       this.title = '手动生成试卷';
  //     }
  //   }
  // }
}

</script>
