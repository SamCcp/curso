<template>
  <b-table
    :columns="columns"
    :data="data"
    focusable
    @select="rowSelected"
  >
  </b-table>
</template>

<script>
export default {
  name : "tables",
  props : {
    columns : {
      type : Array,
      required : true
    },
    data : {
      type : Array,
      required: true
    },
    selected : {
      type : Object,
      required : false
    }
  },
  methods : {
    rowSelected(row){
      this.$emit("item", row);
    }
  }

}
</script>

<style>

</style>