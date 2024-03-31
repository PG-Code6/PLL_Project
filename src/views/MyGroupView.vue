<template>
    <!--  内容-->
    <div class="root">
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
              <th v-for="item in classTitle" :key="item">{{ item }}</th>
            </tr>
            <tr v-for="it in classData" :key="it">
              <td>{{ it.id }}</td>
              <td>{{ it.people_id }}</td>
              <td>{{ it.name }}</td>
              <td>{{ it.number }}</td>
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
  name: "MyGroup",
  data(){
    return {
      classTitle: [
        '序号', '教工号', '姓名', '电话'
      ],
      classData: [
        {id: 1, people_id: '123456', name: '明明', number: '123456789'},
        {id: 2, people_id: '123456', name: '明明', number: '123456789'},
        {id: 3, people_id: '123456', name: '明明', number: '123456789'},
        {id: 4, people_id: '123456', name: '明明', number: '123456789'}
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

.content_banner{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1.3px #cecdcd;
}

.operation{
  width: 35%;
  display: flex;
  justify-content: space-around;
}

.operation button{
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #dedede;
}

.operation button:nth-child(1){
  background-color: pink;
}

.operation button:nth-child(2){
  background-color: #3333cc;
  color: #fff;
}

.operation button:nth-child(3){
  background-color: #ff0000;
  color: #fff;
}

.content_content{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content_title{
  width: 80%;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.class_people{
  width: 290px;
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

.content_table{
  width: 70%;
}

.content_table,.table{
  width: 100%;
}

.table th{
  width: 20%;
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