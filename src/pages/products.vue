<template>
  <section>
    <b-field label="Name">
        <b-input v-model="name"></b-input>
    </b-field>
    <br>
    <b-select placeholder="Select a name">
        <option
            v-for="option in products"
            :value="option.id"
            :key="option.id">
            {{ option.user.first_name }}
        </option>
    </b-select>
  </section>
</template>

<script>
export default {
  name : "products",
  beforeCreate(){
    //fue a la api por datos
  }, //puedo hacer chamba antes de que exista en memoria
  created(){}, //ya existe en memoria, pero aun no se renderiza
  data(){
    return {
      name : "",
      products : []
    }
  }
}
</script>

<style>

</style>