<template>
  <div class=" hero d-flex justify-content-center align-items-center">
    <search-form />
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
export default {
  components: {
    SearchForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  height: 40vh;
  background: #ccc;
  background-image: url("https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}
</style>
