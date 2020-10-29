const router = new VueRouter({
  routes : [
    {
      path :"/",
      component : LoadComponent("../layout/mainlayout.vue"),
      children : [
        
      ]
    }
  ]
})