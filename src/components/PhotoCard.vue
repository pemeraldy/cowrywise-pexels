<template>
  <div class="card m-auto w-100" data-toggle="modal" data-target="#photoModal">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h3>Photographer</h3>
      <h5 class="card-title artist-name">Photo Title:</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
  mounted() {
    console.log(this.image);
  },
};
</script>

<style></style>
