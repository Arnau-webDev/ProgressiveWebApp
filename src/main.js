import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'
import Vuetify from 'vuetify/lib';


Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
