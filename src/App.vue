<template>
  <div id="app">
    <app-nav />
    <router-view />
  </div>
</template>
<script>
import AppNav from "./components/AppNav";
export default {
  components: {
    AppNav,
  },
  // async mounted() {
  //   await this.$store.dispatch("fetchPhotosPerPag");
  // },
};
</script>
<style>
* {
  font-family: "Nunito", sans-serif;
}
</style>
