import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import {saveAs} from 'file-saver';
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

export const eventBus = new Vue();

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI, {locale})
Vue.use(VueCodeMirror)

Vue.prototype.$saveAs = saveAs

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
