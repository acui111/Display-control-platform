import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import Antd from 'ant-design-vue';

import EventBus from "@/plugins/EventBus"
import ScrollBar from '@/plugins/ScrollBar'
import Editor from '@/plugins/Editor'


import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router';

Vue.use(Antd,VueRouter);
Vue.prototype.$http = axios,vueAxios;


Vue.use(EventBus);
Vue.use(ScrollBar);
Vue.use(Editor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');