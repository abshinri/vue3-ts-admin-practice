import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router";
import Layout from '@/components/HelloWorld.vue'
// 预创建路由数组
const routes:Array<RouteRecordRaw>=[{
  path:'/',
  name:'home',
  components:Layout
}]
//创建路由实例
const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router