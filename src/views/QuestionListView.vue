<template>
  <!--  内容-->
  <div class="root">
    <!--    搜索内容区域-->
    <div class="content_content">
      <!--      标题区-->
      <div class="content_title">
        <div class="class">
          <span>所属课程</span>
          <div></div>
        </div>
        <div class="class_people">
          <span>题目搜索</span>
          <input type="text">
        </div>
        <button class="btn_find">搜索</button>
        <button class="btn_reset">重置</button>
      </div>
      <!--      题目区-->
      <div class="question_put">
        <el-button plain style="background-color:#3333ff; color: #fff">新增题目</el-button>
        <el-button plain>导入题目</el-button>
      </div>
      <!--      表格区-->
      <div class="content_table">
        <table class="table">
          <tr>
            <th v-for="item in classTitle" :key="item" :width="item.length/100">{{ item }}</th>
          </tr>
          <tr v-for="it in classData" :key="it">
            <td>{{ it.id }}</td>
            <td>{{ it.content }}</td>
            <td>{{ it.class }}</td>
            <td>{{ it.tag }}</td>
            <td>{{ it.question_kind }}</td>
            <td>{{ it.question_easy }}</td>
            <td>{{ it.question_jie }}</td>
            <td>{{ it.answer }}</td>
            <td>{{ it.king }}</td>
            <td>操作1 操作2</td>
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
  name: "QuestionListView",
  data() {
    return {
      classTitle: [
        '序号', '内容', '所属课程', '所属章节','题目类型','题目难度','题目解析','知识点 答案','课程目标 权限','操作'
      ],
      classData: [
        {id: 1, content: '正确的是', class: '操作系统', tag: '远程控制',question_kind:'选择题',question_easy:'较易',question_jie:'本题不错',answer:'远程控制',king:'课程目标1'},
        {id: 2, content: '正确的是', class: '操作系统', tag: '远程控制',question_kind:'选择题',question_easy:'较易',question_jie:'本题不错',answer:'远程控制',king:'课程目标1'},
        {id: 3, content: '正确的是', class: '操作系统', tag: '远程控制',question_kind:'选择题',question_easy:'较易',question_jie:'本题不错',answer:'远程控制',king:'课程目标1'},
        {id: 4, content: '正确的是', class: '操作系统', tag: '远程控制',question_kind:'选择题',question_easy:'较易',question_jie:'本题不错',answer:'远程控制',king:'课程目标1'}
      ]
    }
  }
}
</script>

<style scoped>

.root{
  height: 670px;
  width: 1200px;
  background-color: #fff;
}

.content_content{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content_title{
  width: 90%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.content_title .class div{
  width: 200px;
  height: 25px;
  background-color: pink;
}

.class,
.class_people{
  width: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.class_people input{
  width: 200px;
  height: 25px;
}

.content_title button{
  width: 90px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #dedede;
}

.content_title .btn_find{
  color: #fff;
  background-color: #3333cc;
}

.content_title .btn_reset{
  background-color: #fff;
}

.question_put{
  width: 100%;
  display: flex;
  align-items: start;
  padding: 10px 5rem;
  margin-bottom: 2rem;
}

.content_table{
  width: 70%;
}

.content_table,.table{
  width: 100%;
}

.table th{
  height: 30px;
  /*border: solid 1px red;*/
}

.table td{
  text-align: center;
  height: 70px;
  padding-top: 20px;
  border-bottom: solid 1px #dedede;
}

.content_page{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
}
.content_page .num{
  display: flex;
  justify-content: center;
  /*border: solid 1px red;*/
}
.content_page .num ul{
  width: 140px;
  display: flex;
  justify-content: space-around;
}

.content_page .num ul li{
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 2px;
}

.content_page .num ul li:nth-child(1){
  color: #fff;
  margin-left:5px ;
  background-color: #4487ed;
}

.content_page .num span{
  color: #b7b6b6;
}

.content_page .rotate{
  width: 80%;
  display: flex;
  margin-left: 1rem;
  /*border: solid 1px red;*/
}

.content_page .rotate div{
  margin-right: 10px;
  border: solid 1px #dedede;
  border-radius: 4px;
  padding: 0 3px;
  color: #b9b9b9;
}

.content_page .rotate input{
  width: 25px;
  text-align: center;
  margin-left: 6px;
  margin-right: 6px;
  border: solid 1px #dedede;
  border-radius: 3px;
}
</style>