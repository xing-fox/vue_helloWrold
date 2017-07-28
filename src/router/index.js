import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
// import RbfxIndex from '@/view/rbfx/Index'
// import RbfxContent from '@/view/rbfx/Content'
// import RbfxContDetails from '@/view/rbfx/ContDetails'
import JygkZjfx from '@/view/jygk/zjfx'
import JygkKcfx from '@/view/jygk/kcfx'
import JygkYsqk from '@/view/jygk/ysqk'
import JygkQkdj from '@/view/jygk/qkdj'
import JygkXsmlfx from '@/view/jygk/xsmlfx'
import JygkKhlsfx from '@/view/jygk/khlsfx'
import JygkYsqkk from '@/view/jygk/ysqkk'
import JygkYfgysk from '@/view/jygk/yfgysk'
import JygkQkdjk from '@/view/jygk/qkdjk'
import JygkDhhy from '@/view/jygk/dhhy'
import JygkCgfx from '@/view/jygk/cgfx'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    // {
    //   path: '*',
    //   name: 'Index',
    //   component: Index
    // },
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    // {
    //   path: '/rbfx/index',
    //   name: 'rbfxIndex',
    //   component: RbfxIndex
    // },
    // {
    //   path: '/rbfx/content',
    //   name: 'rbfxContent',
    //   component: RbfxContent
    // },
    // {
    //   path: '/rbfx/contdetail',
    //   name: 'rbfxContDetails',
    //   component: RbfxContDetails
    // },
    { path: '/jygk/zjfx', name: 'jygkZjfx', component: JygkZjfx },
    { path: '/app/esss/report/managesurvey/zjfx-vue.html', name: 'jygkZjfx', component: JygkZjfx },
    
    { path: '/jygk/kcfx', name: 'jygkKcfx', component: JygkKcfx },
    { path: '/app/esss/report/managesurvey/kcfx-vue.html', name: 'jygkKcfx', component: JygkKcfx },
    
    { path: '/jygk/ysqk', name: 'jygkYsqk', component: JygkYsqk },
    { path: '/app/esss/report/managesurvey/ysqk-vue.html', name: 'jygkYsqk', component: JygkYsqk }, 
    
    { path: '/jygk/qkdj', name: 'jygkQkdj', component: JygkQkdj },
    
    { path: '/jygk/xsmlfx', name: 'jygkXsmlfx', component: JygkXsmlfx },
    { path: '/app/esss/report/managesurvey/xsmlfx-vue.html', name: 'jygkXsmlfx', component: JygkXsmlfx },
    
    { path: '/jygk/khlsfx', name: 'jygkKhlsfx', component: JygkKhlsfx },
    { path: '/app/esss/report/managesurvey/khlsfx-vue.html', name: 'jygkYsqkk', component: JygkKhlsfx },
    
    { path: '/jygk/ysqkk', name: 'jygkYsqkk', component: JygkYsqkk },
    { path: '/app/esss/report/managesurvey/ysqkk-vue.html', name: 'jygkYsqkk', component: JygkYsqkk },
    
    { path: '/jygk/yfgysk', name: 'jygkYfgysk', component: JygkYfgysk },
    { path: '/app/esss/report/managesurvey/yfgysk-vue.html', name: 'jygkYfgysk', component: JygkYfgysk },
    
    { path: '/jygk/qkdjk', name: 'jygkqkdjk', component: JygkQkdjk },
    
    { path: '/jygk/dhhy', name: 'jygkdhhy', component: JygkDhhy },
    { path: '/app/esss/report/managesurvey/dhhy-vue.html', name: 'jygkdhhy', component: JygkDhhy },
    
    { path: '/jygk/cgfx', name: 'jygkcgfx', component: JygkCgfx },
    { path: '/app/esss/report/managesurvey/cgfx-vue.html', name: 'jygkcgfx', component: JygkCgfx }
  ]
})
