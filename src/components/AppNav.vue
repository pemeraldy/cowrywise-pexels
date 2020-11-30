<template>
  <div class="navigation">
    <nav class="navbar d-flex navbar-expand-lg navbar-light bg-light">
      <router-link
        class=" app-name navbar-brand d-block text-center  w-100"
        to="/"
        >YoPix</router-link
      >

      <div
        class="collapse navbar-collapse d-flex justify-content-end "
        id="navbarColor01"
      ></div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-name {
  font-family: "Yesteryear", cursive !important;
  font-size: 52px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navigation {
  height: 100px !important;
}
.navbar {
  height: 100%;
}
</style>
