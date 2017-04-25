// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
  iView.LoadingBar.start();
  next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
