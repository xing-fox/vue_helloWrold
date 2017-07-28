import Vue from 'vue'
import Resource from 'vue-resource'
import iView from 'iview'
import App from './App'
import router from './router'
import store from './store'
require('./plugins/fastclick.js')

Vue.use(iView)
Vue.use(Resource)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.dispatch('laodAsyncT')
  next()
})

if ('addEventListener' in document) {  
  document.addEventListener('DOMContentLoaded', ()=>{  
    FastClick.attach(document.body)
  }, false)
}

Vue.http.interceptors.push((request, next)=>{
  request.method = 'POST';
  request.headers.set('X-CSRF-TOKEN', 'TOKEN');
  request.headers.set('Accept', 'application/json');
  request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE1MDEyMDM2NzEsInN1YiI6IntcImxvZ2luVHlwZVwiOlwiU09VUkNFX1RZUEVfV0VCXCIsXCJyZWFsUmVmcmVzaFRva2VuRXhwaXJlTWludXRlXCI6NDMyMCxcInJlYWxUb2tlbkV4cGlyZU1pbnV0ZVwiOjE0NDAsXCJyZWZyZXNoVG9rZW5FeHBpcmVIb3Vyc1wiOjcyLFwidGVuYW50SWRcIjo4OTU4MDg1ODkyMDkwNzUwNjYyLFwidG9rZW5FeHBpcmVIb3Vyc1wiOjI0LFwidXNlcklkXCI6Njc5NTIzNzQ1ODc4MjUyOTQ5OH0iLCJpc3MiOiI2Nzk1MjM3NDU4NzgyNTI5NDk4Xzg5NTgwODU4OTIwOTA3NTA2NjJfV0VCIiwiZXhwIjoxNTAxMjkwMDcxfQ.U_Om-VPgiHVgb-jstdsFN8f8HgLfWyghIumFxdHCx8U');
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
