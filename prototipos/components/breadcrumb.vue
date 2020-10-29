<template>
  <ul class="breadcrumb">
    <li v-for="(item, ix) in items" :key="ix">
      <a :href="'#'+item.path">{{item.label}}</a>
    </li>
  </ul>
</template>

<script>
module.exports = {
  name : "breadcrumb",
  props : {
    items : {
      type : Array,
      required : true
    }
  }
}
</script>

<style scoped>
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>