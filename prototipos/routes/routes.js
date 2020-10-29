const router = new VueRouter({
  routes : [
    {
      path :"/",
      component : LoadComponent("./layout/mainlayout.vue"),
      children : [
        {
          path : "/home",
          component : LoadComponent("./pages/home.vue"),
          name : "home"
        }
      ]
    }
  ]
})