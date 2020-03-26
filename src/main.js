import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import Antd from 'ant-design-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import EventBus from "@/plugins/EventBus"
import ScrollBar from '@/plugins/ScrollBar'
import Editor from '@/plugins/Editor'
import AweDND from 'awe-dnd'


import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router';
Vue.use(AweDND)
Vue.use(Antd,VueRouter,VueAwesomeSwiper);
Vue.prototype.$http = axios,vueAxios;
// 创建全局事件总线
Vue.prototype.$event = new Vue();
Vue.use(EventBus);
Vue.use(ScrollBar);
Vue.use(Editor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');