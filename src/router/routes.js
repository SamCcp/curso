import Router from "vue-router";
import C from '../components/micomponente.vue';

var router = new Router({
  routes: [
    { 
      path: "/", 
      component: C,
      name : "Home"
    },
    {
      path : "/products",
      component : () => import(/* webpackChunkName: "ABC" */ '../pages/products.vue'),
      name : "Products"
    }
  ],
});

export default router;
