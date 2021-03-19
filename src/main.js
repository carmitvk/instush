import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store.js'


import ElementUI from 'element-ui';
import VueElElements from 'vue-el-element'
Vue.use(VueElElements)
Vue.use(ElementUI);
Vue.use(require('vue-moment'));

import { EmojiPickerPlugin } from 'vue-emoji-picker'
Vue.use(EmojiPickerPlugin)

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/main.scss'


new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
