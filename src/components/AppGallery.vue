<template>
  <div class="container photo-container mt-4">
    <div class="row my-3">
      <div class="col-12 text-center ">
        <h3>Popular Photos</h3>
        <!-- <h3 v-else>{{ searchText }} Photos</h3> -->
      </div>
    </div>
    <div id="photos">
      <span>
        <img
          @click="$refs.modalPhoto.showModal(photo)"
          class="thumbnail"
          v-for="photo in photos"
          :key="photo.id"
          :src="photo.src.medium"
          :alt="photo.photographer"
        />
      </span>
    </div>
    <main-modal ref="modalPhoto" />
  </div>
</template>

<script>
import MainModal from "./MainModal";

export default {
  components: {
    MainModal,
  },
  data() {
    return {
      allPhotos: [],
    };
  },
  computed: {
    photos() {
      return this.$store.getters["getPhotos"];
    },
    searchText() {
      return this.$store.getters["getSearch"];
    },
  },
  async mounted() {
    const resp = await this.$store.dispatch("fetchPhotos", "office");
    this.allPhotos = resp;
  },
};
</script>

<style scoped>
#photos {
  min-height: 50vh;
  /* Prevent vertical gaps */
  line-height: 0;
  -webkit-column-count: 4;
  -webkit-column-gap: 0px;
  -moz-column-count: 4;
  -moz-column-gap: 0px;
  column-count: 3 !important;
  column-gap: 10px;
}

#photos img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
  border-radius: 4px;
  margin: 5px;
  transition: all 0.19s ease-in;
}
#photos img:hover {
  transform: scale(1.03);
}

@media (max-width: 1200px) {
  #photos {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
@media (max-width: 1000px) {
  #photos {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media (max-width: 800px) {
  #photos {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media only screen and (max-width: 400px) {
  #photos {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
    margin-left: -10px;
  }
}
</style>
