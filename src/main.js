import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'
import VueRouter  from 'vue-router'
import router from './router'

Vue.use(BaiduMap, {
  ak: 'Lzf4PpQmCgDIwU63TF8Qu8ZqtBluKUbF'
});
Vue.use(VueRouter)


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
