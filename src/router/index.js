import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index' 
import RbfxIndex from '@/view/rbfx/Index'
import RbfxContent from '@/view/rbfx/Content'
import JygkZjfx from '@/view/jygk/zjfx'
import JygkKcfx from '@/view/jygk/kcfx'
import JygkYsqk from '@/view/jygk/ysqk'
import JygkQkdj from '@/view/jygk/qkdj'
import JygkXsmlfx from '@/view/jygk/xsmlfx'
import JygkKhlsfx from '@/view/jygk/khlsfx'

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
    },
    {
      path: '/jygk/kcfx',
      name: 'jygkKcfx',
      component: JygkKcfx
    },
    {
      path: '/jygk/ysqk',
      name: 'jygkYsqk',
      component: JygkYsqk
    },
    {
      path: '/jygk/qkdj',
      name: 'jygkQkdj',
      component: JygkQkdj
    },
    {
      path: '/jygk/xsmlfx',
      name: 'jygkXsmlfx',
      component: JygkXsmlfx
    },
    {
      path: '/jygk/khlsfx',
      name: 'jygkKhlsfx',
      component: JygkKhlsfx
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
