<template>
  <div class="topnav" ref="top" @click="optionSelected">
    <a href="#home" class="active">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <dropdown label="Audits" :items="dropdownitems"></dropdown>
    <a class="icon" @click="showMenu">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</template>

<script>
module.exports = {
  name : "navbar",
  data(){
    return {
      dropdownitems : [
        {
          path : "/hola",
          label : "hola"
        },
        {
          path : "/hola/mundo",
          label : "hola mundo"
        }
      ]
    }
  },
  methods: {
    showMenu(){
      this.$refs.top.classList.toggle("responsive")
    },
    optionSelected(e){
      const links = this.$refs.top.querySelectorAll("a");
      links.forEach( link =>{
        link.classList.remove("active");
      })
      e.target.classList.add("active")
    }
  },
  components : {
    "dropdown" : LoadComponent("/components/dropdown.vue")
  }
}
</script>

<style scoped>
.topnav {
  background-color: #333;
  overflow: hidden;
}
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #27405e;
  color: white;
  border-bottom: 3px solid red;
}
.topnav .icon {
  display: none;
}

@media(max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block !important;
  }
}

@media(max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>