import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from "../views/Detail";
import List from "../views/List";

Vue.use(VueRouter);

const routes = [
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    },
    {
        path: '/detail',
        name: 'detail/:id',
        component: Detail
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
