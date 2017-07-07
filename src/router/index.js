import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index' 
import RbfxIndex from '@/view/rbfx/Index'
import RbfxContent from '@/view/rbfx/Content'
import JygkZjfx from '@/view/jygk/zjfx'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/rbfx/index',
      name: 'rbfxIndex',
      component: RbfxIndex
    },
    {
      path: '/jygk/zjfx',
      name: 'jygkZjfx',
      component: JygkZjfx
    },
    {
      path: '/rbfx/content',
      name: 'rbfxContent',
      component: RbfxContent
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
