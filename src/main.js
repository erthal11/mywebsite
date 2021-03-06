import Vue from 'vue'
import App from './App.vue'
import routes from './routes'

import VueRouter from 'vue-router'
import vueHeadful from 'vue-headful'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

// Use vue-headful to manage page headings.
Vue.component('vue-headful', vueHeadful)




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
