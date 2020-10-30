<template>
  <div>
    <div class="columns">
      <section class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Products</p>
          </header>
          <div class="card-content">
            <div class="content">
              Numero de productos 
              <h4>
                {{numProductos}}
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section class="column">
        
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      a : 1,
      b : "hola"
    }
  },
  methods : {
  },
  computed : {
    saluda(){
      return "hola"
    },
    numProductos(){
      return this.$store.getters.getProducts.length
    }
  }
};
</script>

<style>
</style>