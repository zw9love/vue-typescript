// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import filters from './filters/index'

Vue.config.productionTip = false

// 1 filters
for (let key in filters){
  Vue.filter(key, filters[key])
}

// 2 filters
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

// console.log('Vue version：' + Vue['version'])
// console.log(Promise)

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
