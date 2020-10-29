<template>
  <div class="dropdown">
    <button class="dropbtn" ref="btn" @click="showContent">{{label}}
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content" ref="content">
      <a v-for="(item, ix) in items" :key="ix" :href="'#'+item.path" @click.prevent="clickLink">{{item.label}}</a>
    </div>
  </div>
</template>

<script>
class Item{
  constructor(path, label){
    this.path = path;
    this.label = label;
  }
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.querySelector(".dropdown-content");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

module.exports = {
  name : "dropdown",
  inheritattrs : false,
  props : {
    label : {
      type : String,
      required : true
    },
    items : {
      type : Array,
      required : true
    }
  },
  methods:{
    showContent(){
      this.$refs.content.classList.toggle("show");
    },
    clickLink(e){
      if( this.$route.hash != e.target.hash )
        this.$router.push(e.target.hash);
    }
  }
}
</script>

<style scoped>
.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.show {
  display: block;
}
</style>