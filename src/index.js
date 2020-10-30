
import Vue from 'vue';
import Layout from './layout/main.vue';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import Axios from 'axios';
Vue.prototype.$axios =  Axios; //pro tip


import Router from "vue-router";
import router from './router/routes';


import store from './store/app';


Vue.use(Router);

var app = new Vue({
  router,
  store,
  render: (h) => h(Layout)
}).$mount("#app")

window.app = app;