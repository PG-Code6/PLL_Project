import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../components/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: IndexView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { title: '首页' }
  },
  {
    path: '/people',
    name: "people",
    redirect: '/people/info',
    component: HomeView,
    meta: { title: '个人信息管理' },
    children: [{
      path: 'info',
      name: 'info',
      component: () => import('../views/PeopleInfManger'),
      meta: { title: '个人资料' }
    }, {
      path: 'group',
      name: 'group',
      component: () => import('../views/MyGroupView'),
      meta: { title: '我的课程组' }
    }]
  },
  {
    path: '/topic',
    name: "topic",
    component: HomeView,
    meta: { title: '题目管理' },
    children: [{
      path: 'list',
      name: 'list',
      component: () => import('../views/QuestionListView'),
      meta: { title: '题目列表' }
    }, {
      path: 'put',
      name: 'put',
      component: () => import('../views/QuestionPutView'),
      meta: { title: '批量导入' }
    }]
  },
  {
    path: '/student',
    name: "student",
    component: HomeView,
    meta: { title: '学生管理' },
    children: [{
      path: 'all',
      name: 'all',
      component: () => import('../views/AllDataCheckView'),
      meta: { title: '总体数据查看' }
    }, {
      path: 'detail',
      name: 'detail',
      component: () => import('../views/DetailDataCheckView'),
      meta: { title: '详细数据查看' }
    }]
  },
  {
    path: '/test',
    name: "test",
    component: HomeView,
    meta: { title: '试卷管理' },
    children: [{
      path: 'list',
      name: 'list',
      component: () => import('../views/TestListView'),
      meta: { title: '试卷列表' }
    }, {
      path: 'auto',
      name: 'auto',
      component: () => import('../views/AutoTestView'),
      meta: { title: '手动生成试卷' }
    }]
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
