<template>
  <div>
    <section>
      <b-field label="Name">
          <b-input v-model="name" @keyup.enter="addProduct" ref="productname"></b-input>
          <!-- <input type="text" v-model="name" @keyup.enter="addProduct" /> -->
      </b-field>
      <button class="button is-primary" @click="addProduct">Save</button>
    </section>

    <section>
      <tabla 
         :columns="columnas"
         :data="products"
         @item="selectedProduct"
      />
    </section>
  </div>
</template>

<script>

import tabla from '../components/tablas.vue';

export default {
  name : "products",
  created(){ 
    console.log("fui creado!")
  }, //ya existe en memoria, pero aun no se renderiza
  data(){
    return {
      name : "",
      selected : {},
      products : [],
      columnas : [
        {
          field : "id",
          label : "ID",
          numeric : true,
          width: "40"
        },
        {
          field : "name",
          label : "Product"
        }
      ],
      store : null
    }
  },
  methods : {
    addProduct(){
      let total = this.products.length +1;
      let nuevoProd = {
        id : total,
        name : this.name
      }
      //dispatch nos permite ejecutar la logica de negocio del almacen
      this.$store.dispatch("addProduct", nuevoProd)
      .then( ok => {
        this.name = "";
        this.products.push(nuevoProd)
      })
      .catch( err => {
        this.$buefy.dialog.alert(err)
        this.$refs.productname.$el.querySelector("input").focus();
      })
    },
    selectedProduct(prod){
      console.log(prod, "desde products.vue")
      this.name = prod.name;
    }
  },
  components : {
    tabla
  }
}
</script>

<style>

</style>