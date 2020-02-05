import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import User from '../views/User.vue'
import Add from '../views/Add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
        {
            path: 'list',
            name: 'list',
            //component: List,
            component:() => import(/* webpackChunkName: "list" */ '../views/List.vue'),
        },
        {
            path: 'user',
            name: 'user',
            //component: User,
            component:() => import(/* webpackChunkName: "user" */ '../views/User.vue'),
        },
    ]
  },
  {
    path: '/add',
    name: 'add',
    //component: Add,
    component:() => import(/* webpackChunkName: "add" */ '../views/Add.vue'),
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes
})

export default router
