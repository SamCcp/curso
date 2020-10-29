<template>
  <div>
    <navbar>
      <template slot="left">
        izquierda
      </template>
      <template slot="right">
        derecha
      </template>
    </navbar>
    <breadcrumb :items="breadcrumbitems"></breadcrumb>
  </div>
</template>

<script>
module.exports = {
  name : "mainlayout",
  data(){
    return {
      breadcrumbitems : [
        {
          path :"/",
          label : "home"
        }
      ]
    }
  },
  components : {
    "navbar" : LoadComponent("../components/navbar.vue"),
    "breadcrumb" : LoadComponent("../components/breadcrumb.vue")
  }

}
</script>

<style>

</style>