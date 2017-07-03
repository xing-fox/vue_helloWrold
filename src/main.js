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
  request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE0OTkwNzkzMzUsInN1YiI6IntcImxvZ2luVHlwZVwiOlwiU09VUkNFX1RZUEVfV0VCXCIsXCJyZWFsUmVmcmVzaFRva2VuRXhwaXJlTWludXRlXCI6NDMyMCxcInJlYWxUb2tlbkV4cGlyZU1pbnV0ZVwiOjE0NDAsXCJyZWZyZXNoVG9rZW5FeHBpcmVIb3Vyc1wiOjcyLFwidGVuYW50SWRcIjo4OTU4MDg1ODkyMDkwNzUwNjYyLFwidG9rZW5FeHBpcmVIb3Vyc1wiOjI0LFwidXNlcklkXCI6Njc5NTIzNzQ1ODc4MjUyOTQ5OH0iLCJpc3MiOiI2Nzk1MjM3NDU4NzgyNTI5NDk4Xzg5NTgwODU4OTIwOTA3NTA2NjJfV0VCIiwiZXhwIjoxNDk5MTY1NzM1fQ.JsPlR-EZ4CoCKy5Fq-yu1Eo8jGk2qPv0j1SF0e-J-Mo');
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
