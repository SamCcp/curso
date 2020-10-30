<template>
  <div>
    <b-navbar>
      <template slot="end">
        <b-select placeholder="Lang" @input="setUserLanguage">
            <option value="en">English</option>
            <option value="es">Español</option>
        </b-select>
      </template>

      <template slot="start">
        <b-navbar-item
          v-for="option in $router.options.routes"
          :key="option.path"
        >
          <router-link :to="option.path">{{ option.name }}</router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <keep-alive>
      <router-view></router-view> <!--Aqui se pintan los componentes-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      isBuefy: false,
    };
  },
  methods : {
    setUserLanguage(e){
      this.$store.state.userLanguage = e;
    }
  }
};
</script>

<style>
</style>