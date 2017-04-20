import Vue from 'vue'
import vueRouter from 'vue-router'
import Hello from 'view/Hello'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    {path: '/', name: 'Hello', component: Hello}
  ]
})