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

<style scoped>
.hero {
  height: 40vh;
  background: #dde2e9;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}
</style>
