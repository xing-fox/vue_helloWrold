import Vue from 'vue'
import Resource from 'vue-resource'
import iView from 'iview'
import App from './App'
import router from './router'
import store from './store'

Vue.use(iView)
Vue.use(Resource)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

Vue.http.interceptors.push(function(request, next) {
  request.method = 'POST';
  request.headers.set('X-CSRF-TOKEN', 'TOKEN');
  request.headers.set('Accept', 'application/json');
  request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE0OTk2NDgzMjQsInN1YiI6IntcImxvZ2luVHlwZVwiOlwiU09VUkNFX1RZUEVfV0VCXCIsXCJyZWFsUmVmcmVzaFRva2VuRXhwaXJlTWludXRlXCI6NDMyMCxcInJlYWxUb2tlbkV4cGlyZU1pbnV0ZVwiOjE0NDAsXCJyZWZyZXNoVG9rZW5FeHBpcmVIb3Vyc1wiOjcyLFwidGVuYW50SWRcIjo3MTAxNzY1MDI1OTIyNTgyNDI2LFwidG9rZW5FeHBpcmVIb3Vyc1wiOjI0LFwidXNlcklkXCI6NjA4MDI2MjQ2OTIzMjY2ODYzMH0iLCJpc3MiOiI2MDgwMjYyNDY5MjMyNjY4NjMwXzcxMDE3NjUwMjU5MjI1ODI0MjZfV0VCIiwiZXhwIjoxNDk5NzM0NzI0fQ.1t645ZRC6F-LhWn7ySdVOQszzRgfZ9sTuATd7_MOXAk');
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
