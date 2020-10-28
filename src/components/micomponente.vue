<template>
  <label>{{nombre}}</label>
</template>

<script>
export default {
  data(){
    return {
      nombre : "hola desde el componente!"
    }
  }
}
</script>

<style >
  label{
    color:blue;
  }
</style>