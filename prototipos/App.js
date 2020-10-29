const App = {
  template: '<v-layout></v-layout>',
  name : "app",
  components : {
    "v-layout" : LoadComponent("./layout/mainlayout.vue")
  }
}