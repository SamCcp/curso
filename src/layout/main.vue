<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>
          <img
            src="https://azzule.com/wp-content/uploads/2018/10/az-drk-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
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

    <router-view></router-view>
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
};
</script>

<style>
</style>